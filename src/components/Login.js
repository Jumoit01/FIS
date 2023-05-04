import React, { useState } from 'react'




export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                Username:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit" onClick={() => window.location.href = "../"}>Submit</button>
        </form>
    );
}