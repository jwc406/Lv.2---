import Todo from "./Todo";
import { useSelector } from "react-redux";

import { Main, MainContent } from "./../styles/StComponents";

function TodoList({ isDone }) {
  const { todos } = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  function renderTodoList(filteredTodos) {
    if (filteredTodos.length > 0) {
      return filteredTodos.map((todo) => <Todo todo={todo} key={todo.id} />);
    } else {
      return <p>할 일이 없습니다 🥲</p>;
    }
  }

  return (
    <Main>
      <p>{isDone ? "완료 ✅" : "하는 중 🔥"}</p>
      <MainContent>{renderTodoList(filteredTodos)}</MainContent>
    </Main>
  );
}

export default TodoList;
