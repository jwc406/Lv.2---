import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, updateTodo } from "../redux/modules/todos";

import * as ST from "./../styles/StComponents";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const clickDeleteButtonHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const clickDoneButtonHandler = () => {
    dispatch(updateTodo({ id: todo.id, isDone: !todo.isDone }));
  };

  return (
    <ST.TodoBox>
      <Link to={`/${todo.id}`}>
        <span style={{ cursor: "pointer" }}>➡️ 상세페이지</span>
      </Link>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <ST.ButtonGroup>
        <ST.DeleteButton onClick={clickDeleteButtonHandler}>
          삭제하기
        </ST.DeleteButton>
        <ST.EditButton onClick={clickDoneButtonHandler}>
          {todo.isDone ? "취소" : "완료"}
        </ST.EditButton>
      </ST.ButtonGroup>
    </ST.TodoBox>
  );
}

export default Todo;
