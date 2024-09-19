import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.{" "}
                <span style={{ color: "red" }}>Bryce Roy</span>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </p>
            Making a list:
            <ul>
                <li>Option A</li>
                <li>Option B</li>
                <li>Option C</li>
            </ul>
            Ordering a list:
            <ol>
                <li>Option A</li>
                <li>Option B</li>
                <li>Option C</li>
            </ol>
            <img
                src="https://t4.ftcdn.net/jpg/07/63/72/23/360_F_763722336_NMoMz3VxW3a5NlezvigHXKMsJPI13GMQ.jpg"
                alt="Cool Photo"
            />
            <img
                src="../assets/images/pet-ada.jpg"
                alt="A picture of my dog Ada"
            />
        </div>
    );
}

export default App;
