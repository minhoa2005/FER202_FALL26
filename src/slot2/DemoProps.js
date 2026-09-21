import { Button } from "react-bootstrap";


function Hello({ users, handleClick }) {
    return (
        <div>
            {users.map((u) => (
                <div>
                    <h1>Name: {u.name}</h1>
                    <h1>Age: {u.age}</h1>
                    <h1>Address: {u.address}</h1>
                    <Button onClick={() => handleClick(u.name)}>Click me</Button>

                </div>
            ))}
        </div>
    )
}

export default Hello;