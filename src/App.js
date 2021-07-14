import './App.css';
import {useState} from 'react';
import SecretWord from "./components/SecretWord";

function App() {

    const [secret, setSecret] = useState('')
    const [word, setWord] = useState('')
    const [correct, setCorrect] = useState([])
    const [wrong, setWrong] = useState([])


    function getSecretWord() {
        fetch('https://random-word-api.herokuapp.com/word?number=1')
            .then(response => response.json())
            .then(data => {
                setWord(data[0])
                createSecretWord()
            })
    }

    function createSecretWord() {
        let s = word.charAt(0)
        for(let i = 1; i < word.length - 1; i++) {
            if(correct.includes(word.charAt(i))) {
                s += ' ' + word.charAt(i) + ' '
            }
            else {
                s += ' _ '
            }
        }
        s += word.charAt(word.length-1)

        setSecret(s)
    }


    return (
        <div className="App">
            <h1>Hangman</h1>
            <button onClick={getSecretWord}>Play</button>

            <SecretWord word={secret}/>

        </div>
    );
}

export default App;
