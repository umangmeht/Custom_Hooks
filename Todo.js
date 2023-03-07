import useFetch from "./useFetch";

const Todo = () => {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1>TO DO</h1>
      {todos &&
        todos.map((todo, i) => {
          return <li key={i}>{todo.title}</li>;
        })}
    </>
  );
};
export default Todo;
