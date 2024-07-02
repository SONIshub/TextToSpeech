let speech = new SpeechSynthesisUtterance();

let voices = []

let voiceSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]
    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)))
}

voiceSelect.addEventListener("change",(e)=>{
    e.preventDefault()
    speech.voice = voices[voiceSelect.value]
})

document.querySelector("button").addEventListener("click",(e)=>{
    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})

document.getElementById("removeText").addEventListener("click",()=>{
    document.querySelector("textarea").value = ""
})