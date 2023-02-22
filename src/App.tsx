import { useEffect } from "react";
import axios from "axios";
import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/MenuItem";

function App() {
    return (
        <div className="App">
            <Menu defaultIndex={0} onSelect={(index) => console.log(index)}>
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
        </div>
    );
}

export default App;
