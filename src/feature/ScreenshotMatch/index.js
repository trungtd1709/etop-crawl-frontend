import { Input } from "antd";

const ScreenshotMatch = () => {
  return (
    // <div className="w-100 d-flex flex-row">
    //   <input />
    //   <CustomButton text="crawl" onClick={handleClick} />
    // </div>
    <div className="app-body" style={{ marginTop: "100px", gap: "15px" }}>
      <Input placeholder="Input match URL here" />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};

export default ScreenshotMatch;
