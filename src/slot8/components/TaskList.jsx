import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ tasks, onToggle, onDelete, onSave, hasQuery }) {
  if (!tasks.length) {
    return (
      <div className="text-center text-body-secondary py-4">
        <p className="mb-1">{hasQuery ? 'Không tìm thấy công việc phù hợp.' : 'Danh sách này đang trống.'}</p>
        {!hasQuery && <small>Thêm một việc nhỏ để bắt đầu nhé.</small>}
      </div>
    );
  }

  return (
    <ListGroup variant="flush">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onSave={onSave} />
      ))}
    </ListGroup>
  );
}
