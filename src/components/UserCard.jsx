function UserCard({ user }) {
  if (!user) return null;

  return (
    <div className="mt-4 p-4 border rounded shadow-md max-w-sm">
      <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mb-2" />
      <h2 className="text-xl font-bold">{user.name || user.login}</h2>
      <p className="text-gray-600">@{user.login}</p>
      <p>Followers: {user.followers} | Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
