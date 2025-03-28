import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useEffect, useState } from "react";
import {
  addTodoRequest,
  deleteTodoRequest,
  fetchTodoRequest,
} from "../../actions/todoActions";

const Todos = () => {
  const dispatch = useDispatch<any>();

  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todo
  );

  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTask = () => {
    dispatch(
      addTodoRequest({
        title: newTodo,
        id: Math.random() * 1000,
        completed: false,
      })
    );
    setNewTodo("");
  };

  const handleClick = (id: number) => {
    dispatch(deleteTodoRequest(id));
  };

  useEffect(() => {
    dispatch && dispatch(fetchTodoRequest());
  }, [dispatch]);

  return (
    <div className="max-w-sm flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Todos Manager</h2>
      <div className="flex gap-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New task"
          className="border rounded p-2 flex-auto"
        />
        <button
          onClick={handleAddTask}
          disabled={!newTodo}
          className="p-2 cursor-pointer text-white bg-blue-400 rounded disabled:bg-gray-200 disabled:cursor-not-allowed"
        >
          Add Task
        </button>
      </div>
      {loading && <p> Loading.... </p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {todos && (
        <ul className="list-none w-full flex flex-col gap-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="w-full text-left p-2 rounded border border-gray-200 shadow-sm flex justify-between items-center"
            >
              <p className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </p>
              {!todo.completed && (
                <button
                  onClick={() => handleClick(todo.id)}
                  className="px-2 py-1 text-emerald-500 cursor-pointer  text-sm rounded bg-transparent hover:bg-emerald-500 hover:text-white"
                >
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
