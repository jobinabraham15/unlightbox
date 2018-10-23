import ImageViewer from "./imageViewer";

export const imageLoad = function imageLoad(url: string) {
  let replaceImg = new Image(); // Create a new dummy image DOM object;
  replaceImg.src = url;
  return replaceImg;
};
