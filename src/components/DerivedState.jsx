import { useState } from "react";

function DerivedState() {
  // const users = [
  //   {
  //     name: "Alice",
  //     age: 25,
  //   },
  //   {
  //     name: "Bob",
  //     age: 30,
  //   },
  //   {
  //     name: "Charlie",
  //     age: 35,
  //   },
  //   {
  //     name: "Angels",
  //     age: 40,
  //   },
  // ];

  const [users, setUsers] = useState([
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Charlie",
      age: 35,
    },
    {
      name: "Angels",
      age: 40,
    },
  ]);
  //Derived state: couting users
  const userCount = users.length;
  //Derived state: average age ofusers
  const averageAge =
    users.reduce((accum, user) => accum + user.age, 0) / userCount;
  return (
    <>
      <div className="flex max-w-7xl mx-auto gap-20">
        <h1>Users List</h1>
        <ul>
          {users.map((user, index) => (
            <UserList key={index} user={user}></UserList>
          ))}
        </ul>
        <p>Users Count:{userCount}</p>
        <p>User Average Age:{averageAge}</p>
      </div>
    </>
  );
}

function UserList({ user }) {
  return (
    <>
      <li>{`${user.name} has age ${user.age} years old!`}</li>
    </>
  );
}
export default DerivedState;
