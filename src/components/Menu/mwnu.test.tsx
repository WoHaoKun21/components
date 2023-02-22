/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, RenderResult } from "@testing-library/react";
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
    menuElement: RenderResult,
    activeElement: RenderResult,
    disabledElement: RenderResult;

describe("test Menu and MenuItem component", () => {
    // 通用函数  
    beforeEach(() => {
        wrapper = render(generateMenu(testProps));
        menuElement = wrapper.getByTestId('test-menu');
    })
    // 测试组件加载的时候的props属性
    it("should render correct Menu and MenuItem based on default props", () => {

    })
    // 测试组件点击改变时候的回调
    it('click items should change active and call the right callback', () => {

    });
    // 测试Menu组件在传入mode是纵向还是横向的时候，样式有没有生效
    it('should render vertical mode when mode is set to vertical', () => {

    })
})