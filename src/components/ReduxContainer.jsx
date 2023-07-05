import { useSelector } from "react-redux";

export default function ReduxContainer() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return todos;
}
