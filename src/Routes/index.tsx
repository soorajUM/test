import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import New from "./New";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/New" element={<New />} />
    </Routes>
  );
};

export default Router;
