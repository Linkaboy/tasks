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
                src="c:\Users\bryce\OneDrive\Desktop\Umaine Reciepts\Photo.jpg"
                alt="Cool Photo"
                height="640"
                width="640"
            />
        </div>
    );
}

export default App;
