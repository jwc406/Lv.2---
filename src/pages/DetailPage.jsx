import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReduxContainer from "../components/ReduxContainer";

import { DetailWrapper, DetailBox, Button } from "./../styles/StComponents";

export default function DetailPage() {
  const { todos } = ReduxContainer();

  const param = useParams();

  const todo = todos.find((todo) => todo.id === parseInt(param.id));

  const navigate = useNavigate();
  const clickBackButtonHandler = () => {
    navigate(-1);
  };

  return (
    <DetailWrapper>
      <DetailBox>
        <div>
          <p>ID : {todo.id}</p>
          <Button onClick={clickBackButtonHandler}>이전으로</Button>
        </div>
        <h1>{todo.title}</h1>
        <p>{todo.content}</p>
      </DetailBox>
    </DetailWrapper>
  );
}
