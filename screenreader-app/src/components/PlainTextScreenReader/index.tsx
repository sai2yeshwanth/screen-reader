const PlainTextScreenReader = (props: any) => {
    const { item } = props;

    const onClickSpeech = () => {
        //to stop speechSynthesis which is already running
        window.speechSynthesis.cancel()
        //creating a new SpeechSynthesisUtterance 
        let msg = new SpeechSynthesisUtterance()
        // assigning item to new variable
        const plainText: string = item
        // for voice modulaitions
        let voices = speechSynthesis.getVoices();
        // assigning a voice msg to modulaitions type
        msg.voice = voices[2];
        // assigning a text to msg
        msg.text = plainText
        //final out its read the text
        window.speechSynthesis.speak(msg)
    }


    return (
        <span
            onClick={onClickSpeech}
        >
            {item}
        </span>
    )
}


export default PlainTextScreenReader