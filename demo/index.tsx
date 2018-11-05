import * as React from "react";
import * as ReactDOM from "react-dom";
import Unlightbox from "../src/unlightbox";

const mockUrls = [
  "http://homeaquaria.com/wp-content/uploads/2013/06/4Danios1.jpg"
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
        />
      </>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("root"));
