import './App.css'
import {useState} from "react";
import List from "./components/List.jsx";
import data from "./data/data.js";

function App() {

    const [people, setPeople] = useState(data);

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button type="button" onClick={() => setPeople([])}>Clear All</button>
                <button type="button" onClick={() => setPeople(data)}>Refresh</button>
            </section>
        </main>
    )
}

export default App
