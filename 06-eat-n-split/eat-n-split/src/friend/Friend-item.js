import Button from '../common/Button';
import '../index.css';

export default function FriendItem({friendData, onSelectFriend, isSelected, onUnselectFriend}) {
  function handleSelectFriend(e, friendData) {
    e.preventDefault();

    onSelectFriend(friendData);
  }

  function handleUnselectFriend(e) {
    e.preventDefault();

    onUnselectFriend();
  }

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friendData.image} alt={friendData.name}/>
      <h3>{friendData.name}</h3>
      {friendData.balance < 0 && <p className="red">You owe {friendData.name} {Math.abs(friendData.balance)}</p>}
      {friendData.balance > 0 && <p className="green">{friendData.name} owe you {Math.abs(friendData.balance)}</p>}
      {friendData.balance === 0 && <p>You and {friendData.name} are even</p>}

      {isSelected
        ? <Button onClick={handleUnselectFriend}>Close</Button>
        : <Button onClick={(e) => handleSelectFriend(e, friendData)}>Select</Button>}
    </li>
  )
}