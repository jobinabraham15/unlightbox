import * as React from "react";
import { storiesOf } from "@storybook/react";
import Unlightbox from "../src/unlightbox";

const mocks = {
  imageUrl: {
    large:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG",
    small: "http://homeaquaria.com/wp-content/uploads/2013/06/4Danios1.jpg",
    wide:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Abel_crater_AS15-M-2507.jpg",
    high:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Copper-car-162b.jpg"
  },
  containerHeight: 400,
  containerWidth: 400,
  containerStyles: {
    border: "1px solid black",
    background:
      "repeating-linear-gradient(45deg,#ffffff,#dedede 1px,#f7f7f7 2px,#e4e4e6 1px)"
  }
};

storiesOf("Unlightbox", module)
  .add("Pre loading state", () => (
    <Unlightbox
      containerWidth={mocks.containerWidth}
      containerHeight={mocks.containerHeight}
      url={"http://demo.com"}
    />
  ))
  .add("Image smaller than the container", () => (
    <Unlightbox
      containerWidth={mocks.containerWidth}
      containerHeight={mocks.containerHeight}
      url={mocks.imageUrl.small}
    />
  ))
  .add("Image larger than the container", () => (
    <Unlightbox
      containerWidth={mocks.containerWidth}
      containerHeight={mocks.containerHeight}
      url={mocks.imageUrl.large}
    />
  ))
  .add("Image more width than height", () => (
    <Unlightbox
      containerWidth={mocks.containerWidth}
      containerHeight={mocks.containerHeight}
      url={mocks.imageUrl.wide}
    />
  ))
  .add("Image more height than width", () => (
    <Unlightbox
      containerWidth={mocks.containerWidth}
      containerHeight={mocks.containerHeight}
      url={mocks.imageUrl.high}
    />
  ));
