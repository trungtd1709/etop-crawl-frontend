import { Suspense } from "react";
import "./App.css";
import crawlApi from "./api/crawlApi";
import CustomButton from "./general/CustomButton";
import { Navigate, Route, Routes } from "react-router-dom";
import ScreenshotMatch from "./feature/ScreenshotMatch";
import Home from "./feature/Home";
import NavBar from "./general/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

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
    // <div className="w-100 d-flex flex-row">
    //   <input />
    //   <CustomButton text="crawl" onClick={handleClick} />
    // </div>
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
          {/* hop dong dien tu */}
          <Route path="/" element={<Home />} />
          <Route path="/screenshot/*" element={<ScreenshotMatch />} />

          {/* <Route
          path="/dang-nhap"
          element={
            <GuestRoute>
              <LoginHomeScreen />
            </GuestRoute>
          }
        /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
