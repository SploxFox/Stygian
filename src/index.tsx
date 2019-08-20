import {Game} from "../../Iris/src";
import { TextBox } from "../../Iris/src/interface/text-box";
import { Localizer } from "../../Iris/src/localizer";
import { FormattedText } from "../../Iris/src/interface/formatted-text";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { MainTextBox } from "./interface/main-text-box";

const game = new Game();

game.localizer.loadAsset("story/sampleStoryInteraction.txt").then((text) => {
    const formattedText = FormattedText.parse(text);

    let mainTextBox: MainTextBox;
    ReactDOM.render(<MainTextBox formattedText={formattedText} ref={(mtb) => mainTextBox = mtb}></MainTextBox>,document.body);

    window.addEventListener("click", function(){
        mainTextBox.textBox.start();
    });
    window.addEventListener("touchstart", function() {
        mainTextBox.textBox.start();
    })
});