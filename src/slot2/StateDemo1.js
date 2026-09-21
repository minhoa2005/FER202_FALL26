import React, { useState } from 'react'

export default function StateDemo1() {
    const [name, setName] = useState("");
    return (
        <div>
            <h1>Hello {name}</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
