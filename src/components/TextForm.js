import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase !", "success")
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase !", "success")

    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + Text);
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared !", "success")

    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard !", "success")

    }

    const handleExtraSpaces = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed  !", "success")

    }

    const handleAddSpace = () => {
        // let newText = Text.split(/[ ]+/);
        setText(Text.replace(/\s+/g, "  "))
        props.showAlert("Added Double Spaces !", "success")

    }




    // imported from reaact hook
    // text is variable & update function -> setText
    const [Text, setText] = useState('');

    // Text = "new text";   // //wrong way to change the state
    // setText("new text");    // // correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white' : '#042743' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">Enter your text</label> */}
                <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode ==='dark'?'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleAddSpace}>Add Extra Spaces</button>

        </div>

        <div className="container my-2" style={{color: props.mode ==='dark'?'white' : '#042743' }}>

            <h2>Your text summary</h2>

            <p>{Text.split(" ").length} words and {Text.length} characters</p>

            <p>{0.00167 * Text.length} Minutes read</p>
            <h3>Preview</h3>

            <p>{Text.length > 0? Text: "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    
  )
}
