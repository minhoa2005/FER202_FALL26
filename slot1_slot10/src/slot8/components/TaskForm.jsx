import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    onAddTask(trimmedTitle);
    setTitle('');
  };

  return (
    <Form className="d-flex gap-2 mb-4" onSubmit={handleSubmit}>
      <Form.Control
        id="new-task"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Nhập tên công việc..."
        maxLength={120}
        aria-label="Tên công việc"
      />
      <Button variant="primary" type="submit" disabled={!title.trim()} className="flex-shrink-0">Thêm</Button>
    </Form>
  );
}
