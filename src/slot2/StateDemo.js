import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export default function StateDemo() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ marginTop: "20px" }}>
            <h1>Count: {count}</h1>
            <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
            <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
            <Button onClick={() => setCount(0)}>Reset</Button>
        </div>
    )
}
