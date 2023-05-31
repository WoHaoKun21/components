/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";
import Menu, { MenuProps } from ".";
import MenuItem from "./MenuItem";

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: "test"
}

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: "vertical",
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem >active</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem>spf</MenuItem>
        </Menu>
    )
}

let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement;

describe("test Menu and MenuItem component", () => {
    // 通用函数
    beforeEach(() => {
        wrapper = render(generateMenu(testProps));// 挂载实现DOM对象创建
        menuElement = wrapper.getByTestId("test-menu");
        activeElement = wrapper.getByText("active");
        disabledElement = wrapper.getByText("disabled");
    })
    // 测试组件加载的时候的props属性
    it("should render correct Menu and MenuItem based on default props", () => {
        expect(menuElement).toBeInTheDocument();// 检测是否有组件
        expect(menuElement).toHaveClass("viking-menu");// 测试组件上是否有“viking-menu”类名
        expect(menuElement.getElementsByTagName("li").length).toEqual(3);// 检测li元素是否是三个
        expect(activeElement).toHaveClass("menu-item is-active");// 元素是否拥有对应类名
        expect(disabledElement).toHaveClass("menu-item is-disabled");// 元素是否拥有对应类名

    })
    // 测试组件点击改变时候的回调
    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText("spf");// 获取文本内容为‘spf’的组件
        fireEvent.click(thirdItem);// 模拟组件点击事件
        expect(thirdItem).toHaveClass("is-active");// 当前组件是否拥有“is-active”类名，也就是是否有触发
        expect(activeElement).not.toHaveClass("is-active");// 组件没有“is-active”这个类名
        expect(testProps.onSelect).toHaveBeenCalledWith(2);// 对象里面的方法被调用

        // 禁止的组件点击事件
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass("is-active");
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    });
    // 测试Menu组件在传入mode是纵向还是横向的时候，样式有没有生效
    it('should render vertical mode when mode is set to vertical', () => {
        cleanup();// 清除之前渲染的组件
        const wrapper = render(generateMenu(testVerProps));// 进行组件渲染
        const menuElement = wrapper.getByTestId("test-menu");
        expect(menuElement).toHaveClass('menu-vertical')
    });
})