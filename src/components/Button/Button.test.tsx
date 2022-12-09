/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, fireEvent } from "@testing-library/react"
import Button, { ButtonProps, ButtonSize, ButtonType } from ".";
const defaultProps = {
    onClick: jest.fn(),//穿件一个被监控的模拟函数
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: "klass",
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

// test('My first react test case', () => {
//     const wrapper = render(<Button>Test</Button>);
//     const element = wrapper.queryByText("Test");// 在组建中查找文本
//     expect(element).toBeTruthy();
//     expect(element).toBeInTheDocument()// 判断组件是否在文档中，由“@testing-library/jest-dom”这个包提供的——可以代替toBeTruthy
// });

describe("test Button Component", () => {// 分类——这个是Button组件里面的测试——可以代替上面的test
    it("should render the correct default button", () => {// it和test类似
        const wrapper = render(<Button {...defaultProps}>Test</Button>);
        const element = wrapper.getByText("Test") as HTMLButtonElement;// 将html元素断言成button元素 并在组建中查找文本
        expect(element).toBeInTheDocument()// 判断组件是否在文档中，由“@testing-library/jest-dom”这个包提供的
        expect(element.tagName).toEqual("BUTTON");// 元素是否是BUTTON按钮
        expect(element).toHaveClass("btn btn-default");// 检查元素是否拥有类名
        expect(element.disabled).toBeFalsy();// 检查元素的disabled属性为false
        fireEvent.click(element);// fireEvent：专门用来触发不同的用户事件；
        expect(defaultProps.onClick).toHaveBeenCalled();// defaultProps上的事件被调用
    });
    it("should render the correct component based on different props", () => {// 测试不同的属性
        const wrapper = render(<Button {...testProps}>Test</Button>);
        const element = wrapper.getByText("Test");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("btn-primary btn-lg klass")
    });
    it("should render a link when btnType equals link and is provided", () => {// 测试是否是一个link按钮
        const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>);
        const element = wrapper.getByText("Link");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("A");// 元素是否是a标签
        expect(element).toHaveClass("btn btn-link")
    });
    it("should render disabled button when disabled set to true", () => {// 测试按钮是否禁用
        const wrapper = render(<Button {...disabledProps}>Test</Button>);
        const element = wrapper.getByText("Test") as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();// disabled元素为true
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();// disabledProps上的事件没有被调用
    })
})