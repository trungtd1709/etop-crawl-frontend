import { Input } from "antd";
import axios from "axios";
import { useMemo, useState } from "react";

const ScreenshotMatch = () => {
  const [matchUrl, setMatchUrl] = useState("");
  const [imgUrlArray, setImgUrlArray] = useState([]);
  const getData = async () => {
    try {
      const params = {
        url: "matchUrl",
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/something`,
        params
      );
      if (res?.status) {
        setImgUrlArray([...imgUrlArray, res.data]);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const imgList = useMemo(() => {
    return imgUrlArray.map(() => (
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"></img>
    ));
  }, [imgUrlArray]);

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
        <div
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            getData();
          }}
        >
          Submit
        </div>
      </div>
      <div>{imgList}</div>
    </div>
  );
};

export default ScreenshotMatch;
