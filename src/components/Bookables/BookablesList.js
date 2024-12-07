import staticDB from "../../static.json";
import { useState } from 'react'

export default function BookablesList () {
  const { bookables } = staticDB;
  const [bookableIndex, setBookableIndex] = useState(1);

  const group = "Rooms";
  const bookablesInGroup = bookables.filter(b => b.group === group);

  function changeBookable (selectedIndex) {
    setBookableIndex(selectedIndex)
  }

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li
          key={b.id}
          className={i === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => changeBookable(i)}
          >
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}