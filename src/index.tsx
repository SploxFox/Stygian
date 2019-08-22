import {Game} from "../../Iris/src";
import { FormattedText } from "../../Iris/src/interface/formatted-text";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { InteractiveTextBox } from "../../Iris/src/interface/text-box/interactive-text-box";

//Create a new instance of the game class
const game = new Game();

//Load the story text document...
game.localizer.loadAsset("story/sampleStoryInteraction.txt").then((text) => {

    //...and, once we've loaded that, we'll execute all of this code

    //Parses the plain text into FormattedText (which is how we get the dancing letters and such)
    const formattedText = FormattedText.parse(text);

    //Create a new variable with type InteractiveTextbox (but do not assign anything yet)
    let mainTextBox: InteractiveTextBox;

    //Render a new Interactive text box                                Once mounted onto the page, we'll set that mainTextBox variable to our new text box
    ReactDOM.render(<InteractiveTextBox formattedText={formattedText} ref={(mtb: any) => mainTextBox = mtb}></InteractiveTextBox>,document.body);

    //When we click or touch, we'll start the text box
    window.addEventListener("click", function(){
        mainTextBox.textBox.start();
    });
    window.addEventListener("touchstart", function() {
        mainTextBox.textBox.start();
    })
});