import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";

function ListTask() {
  const { tasks, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === "done") return task.isDone;
    if (filter === "not") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>All</button>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "done" })}>Done</button>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "not" })}>Not Done</button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
