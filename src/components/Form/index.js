import "./styles.css";

import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todoEvent, setTodoEvent] = useState("");

  return (
    <div className="formBox">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={todoEvent}
        onChange={(event) => setTodoEvent(event.target.value)}
      />
      <button onClick={() => addTodo(todoEvent)}>Adicionar tarefa</button>
    </div>
  );
};

export default Form;
