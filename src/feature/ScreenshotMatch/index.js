import { Input } from "antd";
import crawlApi from "../../api/crawlApi";
import { useState } from "react";

const ScreenshotMatch = () => {
  const [matchUrl, setMatchUrl] = useState("");
  const getData = async () => {
    try {
      const res = await crawlApi.getData(matchUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app-body" style={{ marginTop: "100px", gap: "15px" }}>
      <div className="d-flex flex-row w-100" style={{ gap: "15px" }}>
        <Input
          value={matchUrl}
          onChange={(e) => {
            setMatchUrl(e.target.value);
          }}
          placeholder="Input match URL here"
        />
        <button className="btn btn-primary" onClick={getData}>
          Submit
        </button>
      </div>
      <img
        className=""
        style={{ width: "80%" }}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
      ></img>
    </div>
  );
};

export default ScreenshotMatch;
