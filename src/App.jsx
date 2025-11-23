import { useState } from "react";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import { searchUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const result = await searchUser(username);
    console.log(result); // See API response in console
    setUser(result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">GitHub User Search</h1>

      <SearchForm onSearch={handleSearch} />

      {!user && (
        <p className="mt-6 text-gray-400">
          Start by searching for a GitHub user above!
        </p>
      )}

      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
