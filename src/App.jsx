import { useState } from "react";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import { searchUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const result = await searchUser(username);
    console.log(result);
    setUser(result);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>

      <SearchForm onSearch={handleSearch} />

      {!user && <p className="mt-4">Start by searching for a GitHub user above!</p>}

      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
