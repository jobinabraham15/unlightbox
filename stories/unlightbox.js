import * as React from "react";
import { storiesOf } from "@storybook/react";
import Unlightbox from "../src/unlightbox";

storiesOf("Unlightbox", module).add("Pre loading state", () => <Unlightbox width={300} height={300}/>);
