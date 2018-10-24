import * as React from "react";
import * as ReactDOM from "react-dom";
import Unlightbox from "../src/unlightbox";
import ImageViewer from "../src/imageViewer";

const mockUrls = [
  "https://s3-ap-southeast-1.amazonaws.com/aasaan-staffing/media/1526383682703_32089704_2238673263021287_745264885570469888_n.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/aasaan-staffing/media/generic/1539693017765/1534050014668_IMG_20180812_102949.jpg",
  "http://homeaquaria.com/wp-content/uploads/2013/06/4Danios1.jpg"
];

ReactDOM.render(
  <ImageViewer url={mockUrls[0]} />,
  document.getElementById("root")
);
