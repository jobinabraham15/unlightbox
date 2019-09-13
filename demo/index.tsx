import * as React from "react";
import * as ReactDOM from "react-dom";
import Unlightbox from "../src/unlightbox";

const mockUrls = [
  "https://www.nps.gov/subjects/fishing/images/303CD5E9-BBC5-B474-08C2A5F62BA899E1Original.jpg"
];

class Demo extends React.Component {
  state = {
    url: mockUrls[0]
  };

  render() {
    return (
      <>
        <Unlightbox
          url={this.state.url}
          containerStyle={{
            border: "1px solid black",
            background:
              "repeating-linear-gradient(45deg,#ffffff,#dedede 1px,#f7f7f7 2px,#e4e4e6 1px)"
          }}
          containerWidth={400}
          containerHeight={400}
          saveAs={mockUrls[0].split(":")[0]}
          downloadable={true}
        />
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("root"));
