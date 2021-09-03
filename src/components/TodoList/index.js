import "./styles.css";

const TodoList = ({ todos, handleTodo }) => {
  return (
    <div className="todoBox">
      <ul>
        {todos.map((todo, index) => {
          return (
            <div>
              <li key={index}> {todo}</li>
              <button onClick={() => handleTodo(todo)}>Remover tarefa</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
