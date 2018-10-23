import * as React from "react";
import * as ReactDOM from "react-dom";
import Unlightbox from "../src/unlightbox";
import ImageViewer from "../src/imageViewer";
const url =
  "https://s3-ap-southeast-1.amazonaws.com/aasaan-staffing/media/generic/1539693017765/1534050014668_IMG_20180812_102949.jpg";
ReactDOM.render(<ImageViewer url={url} />, document.getElementById("root"));
