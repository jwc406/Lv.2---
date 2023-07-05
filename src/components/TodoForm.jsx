import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

import * as SF from "./../styles/StComponents";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChangeHandler = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const onContentChangeHandler = (event) => {
    const newContent = event.target.value;
    setContent(newContent);
  };

  const dispatch = useDispatch();

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: Date.now(), // 사용자의 입력 순서에 따라 고유한 ID 생성
      isDone: false,
      title,
      content,
    };

    if (title === "" || content === "") alert("모두 입력하세요!");
    else {
      dispatch(addTodo(newTodo));
      setTitle("");
      setContent("");
    }
  };

  return (
    <SF.Nav>
      <SF.InputBox className="inputBox">
        <div>
          <span>제목</span>
          <SF.Input type="text" onChange={onTitleChangeHandler} value={title} />
        </div>
        <div>
          <span>내용</span>
          <SF.Input
            type="text"
            onChange={onContentChangeHandler}
            value={content}
          />
        </div>
      </SF.InputBox>
      <SF.AddButton onClick={clickAddButtonHandler}>추가하기</SF.AddButton>
    </SF.Nav>
  );
}

export default TodoForm;
