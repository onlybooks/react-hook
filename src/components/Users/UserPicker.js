import staticDB from "../../static.json";

export default function UserPicker () {
  const { users } = staticDB;
  return (
    <select>
      {users.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}