import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export default function DemoState2({ addUser }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    return (
        <div>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <Button onClick={() => addUser(name, age, address)}>Add user</Button>
        </div>
    )
}
