import {useState} from 'react';
import staticDB from "../../static.json";

export default function UsersList () {
  const { users } = staticDB;

  const [userIndex, setUserIndex] = useState(0);

  return (
    <ul className="users items-list-nav">
      {users.map((user, index) => (
        <li
          key={user.id}
          className={index === userIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => setUserIndex(index)}
          >
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}