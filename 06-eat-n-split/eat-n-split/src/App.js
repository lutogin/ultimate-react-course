import './index.css';
import FriendList from './friend/Friend-list';
import AddFriendForm from './friend/Add-friend-form';
import Button from './common/Button';
import { useState } from 'react';
import SplitForm from './split-form/Split-form';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isActiveAddFriendForm, setIsActiveAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(friend);
  }

  function handleUnselectFriend() {
    setSelectedFriend(null);
  }

  function handleSplitBill(selectedUser, expense) {
    const idx = friends.findIndex(el => el.id === selectedUser.id);

    setFriends((friends) => {
      const f = friends.slice();
      f[idx].balance = f[idx].balance + expense;

      return f;
    });
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
          onUnselectFriend={handleUnselectFriend}
        />

        {isActiveAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend}/>}

        <Button onClick={() => setIsActiveAddFriendForm((isActive) => !isActive)}>
          {isActiveAddFriendForm ? 'Close' : 'Add friend'}
        </Button>

      </div>

      {selectedFriend && <SplitForm selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;
