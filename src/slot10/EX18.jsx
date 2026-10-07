import React, { useState } from "react";

export default function SnapshotDemo() {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);
  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };
  const takeSnapshot = () => {
    setSnapshot(count);
  };
  const restoreSnapshot = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };
  return (
    <div>
      <h1>Snapshot Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment</button>
      <button onClick={takeSnapshot}>Take Snapshot</button>
      <button onClick={restoreSnapshot}>Restore Snapshot</button>
    </div>
  );
}
