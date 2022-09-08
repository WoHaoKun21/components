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

const Button: React.FC<BaseButtonTypeProps> = (props) => {
  const { btnType, size, children, disabled, href } = props;
  // btn是必存在类名，大括号里面的的选项式类名
  const classes = classnames("btn", {
    [`btn-${btnType}`]: btnType, // 值为true，name属性就会成为类名
    [`btn-${size}`]: size, // 值为true，name属性就会成为类名
    disabled: btnType === ButtonType.Link && disabled, // 值为true，name属性就会成为类名
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
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
