import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, updateTodo } from "../redux/modules/todos";

import {
  TodoBox,
  ButtonGroup,
  DeleteButton,
  EditButton,
} from "./../styles/StComponents";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const clickDeleteButtonHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const clickDoneButtonHandler = () => {
    dispatch(updateTodo({ id: todo.id, isDone: !todo.isDone }));
  };

  return (
    <TodoBox>
      <Link to={`/${todo.id}`}>
        <span style={{ cursor: "pointer" }}>➡️ 상세페이지</span>
      </Link>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <ButtonGroup>
        <DeleteButton onClick={clickDeleteButtonHandler}>삭제하기</DeleteButton>
        <EditButton onClick={clickDoneButtonHandler}>
          {todo.isDone ? "취소" : "완료"}
        </EditButton>
      </ButtonGroup>
    </TodoBox>
  );
}

export default Todo;
