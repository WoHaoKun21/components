import Button, { ButtonSize, ButtonType } from "./components/Button";
function App() {
  return (
    <div className="App">
      {/* <Button disabled>hello Word</Button> */}
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello Word
      </Button>
      {/* <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        百度link
      </Button> */}
    </div>
  );
}

export default App;
