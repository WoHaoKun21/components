import classNames from "classnames";
import React, { useContext } from "react";
import { MenuContext } from ".";

export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);
    const classes = classNames("menu-item", className, {
        "is-disabled": disabled, // 是否禁用
        "is-active": context.index === index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === "number")) {
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

MenuItem.displayName = "MenuItem";// displayName是react内置的一个静态属性，用来给组件起个名字

export default MenuItem;