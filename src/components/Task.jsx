import { useDispatch } from "react-redux";

function Task({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(false);
  const [newText, setNewText] = React.useState(task.description);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleEdit = () => {
    dispatch({ type: "EDIT_TASK", payload: { id: task.id, description: newText } });
    setEditMode(false);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {editMode ? (
        <>
          <input value={newText} onChange={e => setNewText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </span>
      )}
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </div>
  );
}
