import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "."

export interface SubMenuProps {
    index?: number,
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, className, children }) => {
    const context = useContext(MenuContext);
    const classes = classNames("menu-item submenu-item", className, {
        'is-active': context.index === index
    });

    // 用来渲染下拉的内容
    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, index) => {

        })
        return (
            <li></li>
        )
    }

    return (
        <li key={index} className={classes}>
            <div className="submen-title">{title}</div>
            {renderChildren()}
        </li>
    )
}