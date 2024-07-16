import "./addUser.css";
import { useState } from "react";
import { collection, query, where, getDocs, setDoc, updateDoc, doc, serverTimestamp, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error fetching user: ", err);
      setUser(null);
    }
  };

  const handleAdd = async () => {
    if (!user || !currentUser) {
      console.error("User or current user is not defined");
      return;
    }

    const chatRef = collection(db, "chats");
    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const chatData = {
        chatId: newChatRef.id,
        lastMessage: "",
        receiverId: user.id,
      };

      const userChatsDoc = await getDoc(userChatsRef);
      if (userChatsDoc.exists()) {
        await updateDoc(userChatsRef, {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: user.id,
            updatedAt: Date.now(),
          }),
        });
      } else {
        await setDoc(userChatsRef, {
          chats: [
            {
              chatId: newChatRef.id,
              lastMessage: "",
              receiverId: user.id,
              updatedAt: Date.now(),
            },
          ],
        });
      }
    } catch (err) {
      console.error("Error adding user to chat: ", err);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="User Avatar" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
