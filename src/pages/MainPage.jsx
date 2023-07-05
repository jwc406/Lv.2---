import React from "react";

import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function MainPage() {
  return (
    <div>
      <Header />
      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </div>
  );
}
