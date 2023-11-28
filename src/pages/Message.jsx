import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MessagesDisplay from "../components/MessagesDisplay";
import NewMessage from "../components/NewMessage";

import { firestore, auth } from "../firebase";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import {
//   collection,
//   query,
//   onSnapshot,
//   getDocs,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";

function Message() {
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  });

  /*
    What is needed:
      fetch based off the url who the receiver is
      based on who the receiver is, fetch all letters
      post/patch to that receivers letter
  */

  // mock res for receiver
  const receiver = {
    name: "Festus",
    uid: 1,
    avatar: "/images/festus.jpg",
  };

  useEffect(() => {
    // const messageRef = collection(firestore, "letterbox");
    // const q = query(messageRef);
    // const unsubscribe = onSnapshot(q, (snapshot) => {
    //   const messages = snapshot.docs.map(async (doc) => {
    //     const subcollectionRef = collection(doc.ref, "letters");
    //     const subcollectionDocs = await getDocs(subcollectionRef);
    //     const subcollectionData = subcollectionDocs.docs.map((subDoc) => ({
    //       subId: subDoc.id,
    //       ...subDoc.data(),
    //     }));
    //     return {
    //       id: doc.id,
    //       mainCollectionData: doc.data(),
    //       subcollectionData,
    //     };
    //   });
    //   Promise.all(messages).then((resolvedMessages) => {
    //     setMessage(resolvedMessages);
    //   });
    setMessage([
      {
        letter: "Hey Charlie",
        time: { seconds: 1700152847, nanoseconds: 514000000 },
        sentby: receiver.uid,
        type: "text",
        id: 1,
      },
      {
        letter: "Hey Festus",
        time: { seconds: 1700254847, nanoseconds: 514000000 },
        sentby: auth.currentUser?.uid,
        type: "text",
        id: 2,
      },
      {
        letter: "Hey Charlie",
        time: { seconds: 1700254897, nanoseconds: 514000000 },
        sentby: receiver.uid,
        type: "text",
        id: 3,
      },
      {
        letter: "Hey Festus",
        time: { seconds: 1700255897, nanoseconds: 514000000 },
        sentby: auth.currentUser?.uid,
        type: "text",
        id: 4,
      },
      {
        letter: "Hey Charlie",
        time: { seconds: 1700256897, nanoseconds: 514000000 },
        sentby: receiver.uid,
        type: "text",
        id: 6,
      },
      {
        letter: "Hey Festus",
        time: { seconds: 1700256898, nanoseconds: 514000000 },
        sentby: auth.currentUser?.uid,
        type: "text",
        id: 7,
      },
      {
        letter: "Hey Charlie",
        time: { seconds: 1700266898, nanoseconds: 514000000 },
        sentby: receiver.uid,
        type: "text",
        id: 8,
      },
      {
        letter: "Hey Festus",
        time: { seconds: 1700266899, nanoseconds: 514000000 },
        sentby: auth.currentUser?.uid,
        type: "text",
        id: 92,
      },
    ]);
    // });

    // return unsubscribe;
  }, [receiver.uid, auth.currentUser]);

  const sendMessage = async (e) => {
    //   e.preventDefault();
    //   if (!newMessage.trim()) return;
    //   const letterboxCollection = collection(firestore, "letterbox");
    //   const letterboxDocRef = await addDoc(letterboxCollection, {
    //     // Add any data specific to the "letterbox" document
    //   });
    //   const lettersSubcollectionRef = collection(letterboxDocRef, "letters");
    //   await addDoc(lettersSubcollectionRef, {
    //     letter: newMessage,
    //     time: serverTimestamp(),
    //     sentby: auth.currentUser.uid,
    //     type: "text",
    //   });
    //   setNewMessage("");
  };
  return (
    <>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          background: "#E6EDF4",
          padding: "24px 0 30px",
          borderRadius: "0 0 8px 8px",
        }}
      >
        <Link to="/messages">
          <ArrowBack sx={{ padding: "4px", margin: "0 18px", fill: "#000" }} />
        </Link>
        <Avatar
          src={receiver.avatar}
          alt={receiver.name}
          sx={{ alignContent: "end", marginRight: "12px" }}
        />
        <Typography variant="h3" fontSize="22px">
          {receiver.name}
        </Typography>
      </Stack>
      <Box sx={{ padding: 3, paddingTop: 0 }}>
        {user ? (
          <div>
            <MessagesDisplay chat={message} />
            <NewMessage
              setNewMessage={setNewMessage}
              sendMessage={sendMessage}
              newMessage={newMessage}
            />
          </div>
        ) : (
          <div>not logged in</div>
        )}
      </Box>
    </>
  );
}

export default Message;
