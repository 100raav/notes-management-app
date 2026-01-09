import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    addNote({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        placeholder="Note Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />
      {error && <p className="error">{error}</p>}
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button disabled={!title.trim()}>Add Note</button>
    </form>
  );
}

export default NoteForm;
