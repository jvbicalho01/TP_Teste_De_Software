import "./Todo.css";

const Todo = ({
  todo,
  removeTodo = () => {},
  completeTodo = () => {},
  color,
}) => {
  return (
    <div
      className="todo"
      key={todo.id}
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        backgroundColor: `${color}`,
      }}
      data-cy="todo"
      data-testid="todo"
    >
      <div className="todo__content">
        <p data-cy="todo-content">{todo.text}</p>
        <p
          data-cy="todo-category"
          data-testid="todo-category"
          className="category"
        >
          {todo.category}
        </p>
      </div>
      <div>
        <button
          data-cy="todo-buttonComplete"
          className="todo__complete"
          onClick={() => completeTodo(todo.id)}
        >
          Completar
        </button>
        <button
          data-cy="todo-buttonX"
          className="todo__remove"
          onClick={() => removeTodo(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
