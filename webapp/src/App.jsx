import './App.css';
import saintsService from './services/saints';
import {useEffect, useState} from "react";

function App() {
    const [saints, setSaints] = useState([]);
    const [newWord, setNewWord] = useState("");
    const [matchingSaints, setMatchingSaints] = useState([]);

    useEffect(() => {
        saintsService.readAll().then(saints =>
            setSaints(saints.sort((s1, s2) => s1.name.localeCompare(s2.name)))
        );
    }, []);

    const handleNewWordChange = event => {
        setNewWord(event.target.value);
    };

    const sortString = (str) => {
        return str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const sortedWord = sortString(newWord);
        const anagramMatches = saints.filter(saint => sortString(saint.name) === sortedWord);
        setMatchingSaints(anagramMatches);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={newWord} onChange={handleNewWordChange} />
                </div>
                <div>
                    <button type="submit">Check Anagrams</button>
                </div>
            </form>

            {matchingSaints.length > 0 ? (
                <div>
                    <h2>Matching Saints:</h2>
                    <ul>
                        {matchingSaints.map(saint => (
                            <li key={saint.id}>{saint.name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                newWord && <p>No matching saints found.</p>
            )}
        </>
    );
}

export default App;