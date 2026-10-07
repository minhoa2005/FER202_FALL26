import { useMemo, useState } from 'react';
import { Badge, Button, ButtonGroup, Card, Container, Form } from 'react-bootstrap';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ThemeContext } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';
import { initialTasks } from './tasks';

const FILTERS = [
  { value: 'all', label: 'Tất cả' },
  { value: 'active', label: 'Chưa làm' },
  { value: 'completed', label: 'Hoàn thành' },
];

export default function TaskManagerApp() {
  const [tasks, setTasks] = useLocalStorage('mini-task-manager.tasks', initialTasks);
  const [theme, setTheme] = useLocalStorage('mini-task-manager.theme', 'light');
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;
  const visibleTasks = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi');
    return tasks.filter((task) => {
      const matchesFilter = filter === 'all'
        || (filter === 'active' && !task.completed)
        || (filter === 'completed' && task.completed);
      return matchesFilter && task.title.toLocaleLowerCase('vi').includes(normalizedQuery);
    });
  }, [filter, query, tasks]);

  const addTask = (title) => {
    setTasks((currentTasks) => {
      const nextId = currentTasks.reduce((maxId, task) => Math.max(maxId, Number(task.id) || 0), 0) + 1;
      return [{ id: nextId, title, completed: false }, ...currentTasks];
    });
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  const deleteTask = (id) => {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    if (!task.completed) {
      window.alert('Chỉ có thể xóa công việc đã hoàn thành.');
      return;
    }
    setTasks((currentTasks) => currentTasks.filter((item) => item.id !== id));
  };

  const saveTask = (id, title) => {
    setTasks((currentTasks) => currentTasks.map((task) => (
      task.id === id ? { ...task, title } : task
    )));
  };
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="min-vh-100 bg-body-tertiary text-body py-4 py-md-5" data-bs-theme={theme}>
        <Container>
          <Card className="mx-auto shadow-sm" style={{ maxWidth: 720 }}>
            <Card.Body className="p-3 p-md-4">
              <Header />
              <TaskForm onAddTask={addTask} />

              <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">
                <ButtonGroup aria-label="Lọc công việc">
                  {FILTERS.map((option) => (
                    <Button
                      variant={filter === option.value ? 'primary' : 'outline-secondary'}
                      key={option.value}
                      type="button"
                      onClick={() => setFilter(option.value)}
                      aria-pressed={filter === option.value}
                    >
                      {option.label}
                    </Button>
                  ))}
                </ButtonGroup>
                <div className="d-flex gap-2">
                  <Form.Control
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Tìm kiếm..."
                    aria-label="Tìm kiếm công việc"
                  />
                  {query && <Button variant="outline-secondary" type="button" onClick={() => setQuery('')}>Xóa tìm kiếm</Button>}
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-2 mb-2" aria-live="polite">
                <Badge bg="secondary">Tổng: {tasks.length}</Badge>
                <Badge bg="warning" text="dark">Chưa làm: {activeCount}</Badge>
                <Badge bg="success">Hoàn thành: {completedCount}</Badge>
              </div>

              <TaskList
                tasks={visibleTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onSave={saveTask}
                hasQuery={Boolean(query.trim())}
              />
              <footer className="text-body-secondary text-center small mt-3">Đang hiển thị {visibleTasks.length} / {tasks.length} công việc</footer>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </ThemeContext.Provider>
  );
}
