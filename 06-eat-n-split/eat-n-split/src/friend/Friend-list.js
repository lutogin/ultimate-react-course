import FriendItem from './Friend-item';

export default function FriendList({friends, onSelectFriend, selectedFriend, onUnselectFriend}) {
  return (
    <ul>
      {
        friends.map((item) =>
        <FriendItem
          friendData={item}
          key={item.id}
          onSelectFriend={onSelectFriend}
          onUnselectFriend={onUnselectFriend}
          isSelected={selectedFriend?.id === item.id}
        />)
      }
    </ul>
  )
}