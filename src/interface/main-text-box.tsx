import * as React from "react";
import { TextBox } from "../../../Iris/src/interface/text-box";
import { FormattedText } from "../../../Iris/src/interface/formatted-text";
import { ContinueArrow } from "./continue-arrow";

interface MainTextBoxProps {
    formattedText: FormattedText
}

interface MainTextBoxState {
    stopped: boolean;
    speaker: string;
}

export class MainTextBox extends React.Component<MainTextBoxProps, MainTextBoxState>{
    textBoxComponent: any;
    textBox: TextBox;
    constructor(props: MainTextBoxProps) {
        super(props);

        this.state = {
            stopped: false,
            speaker: "Test"
        }

        this.textBoxComponent = <TextBox formattedText={this.props.formattedText} textStartedCallback={() => this.setState({stopped: false})} textStoppedCallback={() => this.setState({stopped: true})} allTextFinishedCallback={() => {this.setState({stopped: true})}} textFunctions={{
            enter: () => {},
            exit: () => {},
            setSpeaker: (args: {newSpeaker: string}) => this.setState({speaker: args.newSpeaker})
        }} ref={(tb) => {
            this.textBox = tb; tb.start()
        }}></TextBox>;
    }
    render() {
        return(
            <div className="main-text-box">
                <span>{this.state.speaker}</span><br></br>
                {this.textBoxComponent}
                {this.state.stopped ? <ContinueArrow></ContinueArrow> : ""}
            </div>
        )
    }
}