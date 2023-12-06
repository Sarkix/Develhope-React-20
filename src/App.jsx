import React from "react";
import Login from "./Login";

function App() {
    const handleLogin = (loginData) => {
        console.log("Login data:", loginData);
    };

    return (
        <div>
            <Login onLogin={handleLogin} />
        </div>
    );
}

export default App;
