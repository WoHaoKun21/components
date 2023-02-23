import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "."
import { MenuItemProps } from "./MenuItem";

export interface SubMenuProps {
    index?: number,
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, className, children }) => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const context = useContext(MenuContext);
    const classes = classNames("menu-item submenu-item", className, {
        'is-active': context.index === index
    });

    // 点击事件
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    // 用来渲染下拉的内容DOM节点
    const renderChildren = () => {
        const subMenuClasses = classNames("viking-submenu", {
            'menu-opened': menuOpen,
        })
        const childrenComponent = React.Children.map(children, (child, index) => {// 使用React提供的map方法
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                return childElement;
            } else {
                console.error("Warning：Menu has a child which is not MenuItem component");
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }

    return (
        <li key={index} className={classes}>
            <div className="submen-title">{title}</div>
            {renderChildren()}{/* 调用函数生成下拉数据组件 */}
        </li>
    )
}

SubMenu.displayName = "SubMenu";

export default SubMenu;