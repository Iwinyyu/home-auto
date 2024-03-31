import { Fragment } from "react";
import Waves from "./Waves";
import Bulb from "./lightbulb";
import Apple from "./apple";
import Philips from "./philips";
import Google from "./google";
import Alexa from "./alexa";
import Ikea from "./ikea";
import Ifttt from "./ifttt";

export default function Svgs() {
  return (
    <Fragment>
      <div className="absolute inset-0 z-10 grid grid-cols-6 grid-rows-5 place-items-center">
        <Apple />
        <Ifttt />
        <Google />
        <Ikea />
        <Alexa />
        <Philips />
      </div>
      <Waves />
      <Bulb />
    </Fragment>
  );
}
