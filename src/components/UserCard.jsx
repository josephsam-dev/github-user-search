export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div className="mt-6 p-6 rounded-lg bg-gray-800 shadow-md w-full max-w-md">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border-2 border-gray-600"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-400">@{user.login}</p>
        </div>
      </div>
      <div className="mt-4 text-gray-200">
        <p>
          Followers: {user.followers} | Repos: {user.public_repos}
        </p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
