import React, { useState } from "react";
import UserCard from "./UserCard";

const users = [
  {
    id: 1,
    name: "Vikas Kumar",
    image: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "Anjali Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Rohit Sharma",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

function UserList({ setReceiver }) {
  function handleClickUser(user) {
    setReceiver(user);
  }

  return (
    <div className="flex flex-col p-4 space-y-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          image={user.image}
          onClick={() => {
            handleClickUser(user);
          }}
        />
      ))}
    </div>
  );
}

export default UserList;
