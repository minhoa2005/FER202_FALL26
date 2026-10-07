import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function TaskItem({ task, onToggle, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = (event) => {
    event.preventDefault();
    const trimmedTitle = editedTitle.trim();
    if (!trimmedTitle) {
      window.alert('Tên công việc không được để trống.');
      return;
    }
    onSave(task.id, trimmedTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center gap-3">
      {isEditing ? (
        <Form className="d-flex flex-grow-1 gap-2" onSubmit={handleSave}>
          <Form.Control
            autoFocus
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
            aria-label="Sửa tên công việc"
            maxLength={120}
          />
          <Button variant="success" size="sm" type="submit">Lưu</Button>
          <Button variant="outline-secondary" size="sm" type="button" onClick={handleCancel}>Hủy</Button>
        </Form>
      ) : (
        <>
          <Form.Check
            className="flex-grow-1"
            type="checkbox"
            id={`task-${task.id}`}
            label={<span className={task.completed ? 'text-decoration-line-through text-body-secondary' : ''}>{task.title}</span>}
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            aria-label={`${task.completed ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu hoàn thành'}: ${task.title}`}
          />
          <div className="d-flex gap-2">
            <Button variant="outline-primary" size="sm" type="button" onClick={() => setIsEditing(true)}>
              Sửa
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              type="button"
              onClick={() => onDelete(task.id)}
              aria-label={`Xóa ${task.title}`}
            >
              Xóa
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
