import Button, { ButtonSize, ButtonType } from "./components/Button";
function App() {
    return (
        <div className="App">
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
