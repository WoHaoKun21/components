import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
    return (
        <div className="App">
            <Menu defaultIndex={0} /* mode="horizontal" */ onSelect={(index) => console.log(index)}>
                <MenuItem>cool link</MenuItem>
                <MenuItem disabled>cool link 2</MenuItem>
                <MenuItem>cool link 3</MenuItem>
                <MenuItem>cool link 4</MenuItem>
                {/* <li>hello</li> */}
            </Menu>

            <Button>hello</Button>
            <Button disabled>hello</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
                Large Primary
            </Button>
            <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
                Small Danger
            </Button>
            <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">
                Baidu Link
            </Button>
            <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
                disabled Link
            </Button>
            <h5>SubMenu下拉菜单</h5>
            <Menu defaultIndex={0} mode="horizontal" onSelect={(index) => console.log(index)}>
                <MenuItem>cool link</MenuItem>
                <MenuItem disabled>cool link 2</MenuItem>
                <SubMenu title="dropdown">
                    <MenuItem> dropdown1</MenuItem>
                    <MenuItem> dropdown2</MenuItem>
                </SubMenu>
                <MenuItem>cool link 3</MenuItem>
            </Menu>
        </div>
    );
}

export default App;
