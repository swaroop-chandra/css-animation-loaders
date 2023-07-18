import React from "react";
import { Route, Routes } from "react-router-dom";
import NormalLoading from "../components/normalLoading/NormalLoading";
import StuckLoading from "../components/stuckLoading/StuckLoading";
import NetworkLoading from "../components/networkLoading/NetworkLoading";
import CircleLoading from "../components/circleLoading/CircleLoading";
import PerspectiveLoading from "../components/perspective/PerspectiveLoading";
import BlinkLoading from "../components/blink/BlinkLoading";
import RotateLoading from "../components/rotate/RotateLoading";
import SlideLoading from "../components/slides/SlideLoading";
import DotLoading from "../components/dotsLoading/DotLoading";

//Layouts

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="normal" element={<NormalLoading />} />
        <Route path="stuck" element={<StuckLoading />} />
        <Route path="network" element={<NetworkLoading />} />
        <Route path="circle" element={<CircleLoading />} />
        <Route path="perspective" element={<PerspectiveLoading />} />
        <Route path="blink" element={<BlinkLoading />} />
        <Route path="rotate" element={<RotateLoading />} />
        <Route path="slide" element={<SlideLoading />} />
        <Route path="dots" element={<DotLoading />} />
      </Routes>
    </React.Fragment>
  );
};

export default Index;
