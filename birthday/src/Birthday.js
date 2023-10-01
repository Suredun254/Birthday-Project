import React, { useState } from "react";
import { data } from "./data";

{
  /*
  ============================================================================
  ****FUNCTIONS USED****

 -The removeNotification(id) function has filter function 
 which is used in filtering of friends whose data doesn't match with the others.
 -It clears one user only at a button click. 

 -The clearAll function clears all the birthday notifications.

 -The map method.
 
 - Application of arrow function and import, and export modules.
 ==============================================================================
*/
}

const Birthday = () => {
  const [friends, setFriends] = useState(data);

  const clearAll = () => {
    setFriends([]);
  };

  const removeNotification = (id) => {
    let newFriends = friends.filter((friend) => friend.id !== id);
    setTimeout(() => {
      setFriends(newFriends);
    }, 2000);
  };
  return (
    <>
      <h1>{friends.length} Birthdays Today</h1>
      {friends.map((friend) => {
        const { id, name, age, image } = friend;

        return (
          <section key={id} className="friend">
            <img src={image} alt="avator" />
            <div>
              <h2>{name}</h2>

              <h5>{age} Years</h5>
              <button onClick={() => removeNotification(id)}>
                Clear Notification
              </button>
            </div>
          </section>
        );
      })}
      <button type="button" onClick={clearAll}>
        Clear All Notifications
      </button>
    </>
  );
};

export default Birthday;
