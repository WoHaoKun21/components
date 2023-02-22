import React, { createContext, useState } from "react";
import { MenuItemProps } from "./MenuItem"
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIndex: number) => void;
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onSelect?: SelectCallback;
}

interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 }); // 创建一个context对象用来向子组件进行传值

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex);
    const classes = classNames("viking-menu", className, {
        "menu-vertical": mode === "vertical"
    })

    const handleClick = (index: number) => {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    }

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {// 遍历子元素，也就是MenuItem
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;// displayName是子元素的名字也就是我们的MenuItem组件
            if (displayName === "MenuItem") {// Menu组件下面加载的是MenuItem组件
                return React.cloneElement(childElement, { index });// 克隆组件，并且传入index属性
            } else {// 不是MenuItem组件
                console.warn("Warning：Menu has a child which is not MenuItem component")
            }
        })
    }

    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
};

Menu.defaultProps = {
    defaultIndex: 0,
    mode: "vertical"
}

export default Menu;
