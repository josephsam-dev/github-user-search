import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="mt-4 p-4 border rounded shadow-md max-w-sm mx-auto bg-white">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mb-2 mx-auto"
      />
      <h2 className="text-xl font-bold text-center">{user.name || user.login}</h2>
      <p className="text-gray-600 text-center">@{user.login}</p>
      <div className="flex justify-between mt-4 px-4">
        <span>Followers: {user.followers}</span>
        <span>Repos: {user.public_repos}</span>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 block text-center text-blue-600 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
