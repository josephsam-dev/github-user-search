import { useState } from "react";

function SearchForm({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    onSearch(username);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-center">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
