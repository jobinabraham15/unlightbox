import * as React from "react";
import { storiesOf } from "@storybook/react";
import Unlightbox from "../src/unlightbox";

storiesOf("Unlightbox", module).add("Pre loading state", () => <Unlightbox containerWidth={300} containerHeight={300}/>);
