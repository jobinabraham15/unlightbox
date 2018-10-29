import * as React from "react";
import * as ReactDOM from "react-dom";
import Unlightbox from "../src/unlightbox";

const mockUrls = [
  "https://s3-ap-southeast-1.amazonaws.com/aasaan-staffing/media/1526383682703_32089704_2238673263021287_745264885570469888_n.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/aasaan-staffing/media/generic/1539693017765/1534050014668_IMG_20180812_102949.jpg",
  "http://homeaquaria.com/wp-content/uploads/2013/06/4Danios1.jpg"
];

ReactDOM.render(
  <Unlightbox url={mockUrls[0]} containerStyle={{border: "1px solid black", background: "repeating-linear-gradient(45deg,#ffffff,#dedede 1px,#f7f7f7 2px,#e4e4e6 1px)"}} containerWidth={400} containerHeight = {400}/>,
  document.getElementById("root")
);
