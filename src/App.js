import "./App.css";
import crawlApi from "./api/crawlApi";
import CustomButton from "./general/CustomButton";

function App() {
  const handleClick = async () => {
    try {
      console.log("Button clicked!");
      const test = await crawlApi.getData();
      console.log(test);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-100 d-flex flex-row">
      <input />
      <CustomButton text="crawl" onClick={handleClick} />
    </div>
  );
}

export default App;
