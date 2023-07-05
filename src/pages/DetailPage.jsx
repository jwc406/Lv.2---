import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import * as SD from "./../styles/StComponents";

export default function DetailPage() {
  const { todos } = useSelector((state) => state.todos);

  const param = useParams();

  const todo = todos.find((todo) => todo.id === parseInt(param.id));

  const navigate = useNavigate();
  const clickBackButtonHandler = () => {
    navigate(-1);
  };

  return (
    <SD.DetailWrapper>
      <SD.DetailBox>
        <div>
          <p>ID : {todo.id}</p>
          <SD.Button onClick={clickBackButtonHandler}>이전으로</SD.Button>
        </div>
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
      </SD.DetailBox>
    </SD.DetailWrapper>
  );
}
