import Button from '../common/Button';
import { useState } from 'react';

export default function AddFriendForm({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImageUrl, setFriendImageUrl] = useState("https://i.pravatar.cc/48");

  function resetForm() {
    setFriendName("");
    setFriendImageUrl("");
  }


  function handleAddFriend(e) {
    e.preventDefault();

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      image: friendImageUrl,
      balance: 0,
    }

    onAddFriend(newFriend);
    resetForm();
  }

  return (
    <div>
      <form className="form-add-friend">
        <label>Friend name</label>
        <input
          type="text"
          name="friend-name"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />

        <label>Image URL</label>
        <input
          type="text"
          name="friend-image-url"
          value={friendImageUrl}
          onChange={(e) => setFriendImageUrl(e.target.value)}
        />

       <Button onClick={handleAddFriend}>Add</Button>
      </form>
    </div>
  )
}