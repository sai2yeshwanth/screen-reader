import { BUTTON, INPUTFIELD, INPUTFIELDVALUE } from "../../configData/onClickTypes"

// onclicktext function for text
const onClickText = (text: string, type: number) => {
    //text for button type 1
    if (type === BUTTON) {
        return `You Click on ${text} Button`
    }
    //text for input field type 2
    if (type === INPUTFIELD) {
        return `You Click on ${text} Input field`
    }
    // text for reading input field value
    if (type === INPUTFIELDVALUE) {
        return `${text}`
    }
    return ""
}

const onClickScreenReader = (text: string, type: number) => {
    //to stop speechSynthesis which is already running
    window.speechSynthesis.cancel()
    //creating a new SpeechSynthesisUtterance 
    let msg = new SpeechSynthesisUtterance()
    // assigning text to new variable
    const plainText = onClickText(text, type)
    // for voice modulaitions
    let voices = speechSynthesis.getVoices();
    // assigning a voice msg to modulaitions type
    msg.voice = voices[2];
    // assigning a text to msg
    msg.text = plainText
    //final out its read the text
    window.speechSynthesis.speak(msg)
    return
}


export default onClickScreenReader