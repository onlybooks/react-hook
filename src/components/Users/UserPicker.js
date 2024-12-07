import staticDB from '../../static.json'

export default function UserPicker () {
  const { users } = staticDB

  return (
    <select>
      <option value="" disabled selected>Users</option>
      {users.map((user) => (<option key={user.id}>{user.name}</option>))}
    </select>
  )
}