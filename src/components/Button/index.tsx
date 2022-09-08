// Button组件封装及样式调整
import React from "react";
import classnames from "classnames";

export enum ButtonSize {
    Large = "lg",
    Small = "sm",
}

export enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link",
}

interface BaseButtonTypeProps {
    className?: string; // 类名
    disabled?: boolean; // 是否禁用
    size?: ButtonSize; // 按钮大小
    btnType?: ButtonType; // 按钮类型
    children: React.ReactNode; //子节点
    href?: string;
}

// 给按钮添加元素事件
// 可以拿到Button按钮的所有属性，如果使用“|”只能获得其中一项，使用联合类型：“&”
type NativeButtonProps = BaseButtonTypeProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonTypeProps & React.AnchorHTMLAttributes<HTMLElement>;
// 使用Partial将最终合并的属性转变为可选属性，然后导出去
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;// 最终将所有的属性合并

const Button: React.FC<ButtonProps> = (props) => {
    const { btnType, className, size, children, disabled, href, ...restProps } = props;
    // btn是必存在类名，大括号里面的的选项式类名
    const classes = classnames("btn", className, {
        [`btn-${btnType}`]: btnType, // 值为true，name属性就会成为类名
        [`btn-${size}`]: size, // 值为true，name属性就会成为类名
        disabled: btnType === ButtonType.Link && disabled, // 值为true，name属性就会成为类名
    });
    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps}>
                {children}
            </button>
        );
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
};

export default Button;
