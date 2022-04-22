import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {db } from "./firebase";
import Avatar from '@mui/material/Avatar';
import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import ScrollToBottom from 'react-scroll-to-bottom';



const MessageScreen = () => {
  const user = useSelector(selectUser)
  const { roomId } = useParams();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState([])
  const [input, setInput] = useState("")
  const sendMessage =(e)=>{
    e.preventDefault()
    db.collection("users").doc(roomId).collection("message").add({
      displayName:user.displayName,
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  }

  useEffect(() => {
    if (roomId) {
        db.collection("users")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setUsers(snapshot.data());
        });
        db.collection("users").doc(roomId).collection("message")
        .orderBy("timestamp","asc")
        .onSnapshot(snapshot=>{
          setMessage(snapshot.docs.map((doc)=>doc.data()))
        })
        // .get()
        // .then(querySnapshot=>{
        //   setMessage(querySnapshot.docs.map((doc)=>(doc.data())))
        //   console.log(querySnapshot.docs.map((doc)=>(doc.data())))
        // })   
     }
     
  }, [roomId]);

  return (
    <>
      <Section>
      <Header>
      <ListItemButton>
          <ListItemText>
          {!users ? <Avatar/> :<Avatar src={users.image} />}
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>
            {!users ? <h1>Sumit</h1> : <h1>{users.displayName}</h1>}
          </ListItemText>
        </ListItemButton>
      </Header>
      <ScrollToBottom>
      <Message>
      {message.map((doc)=>{
        return (
          <>
          <AllMessage className={`right ? ${doc.displayName===user.displayName}: "left`}>
          <li>{doc.displayName}</li>
          <span>{doc.message}<span style={{fontSize:"8px",fontWeight:700,margin:"10px"}}>{new Date(doc.timestamp?.toDate()).toDateString("en-US")}</span></span>
          </AllMessage>
          </>
        )
      })}
      </Message>
      </ScrollToBottom>
      <form onSubmit={sendMessage}>
      <Bottom>
      <Input>
      <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  />
      </Input>
      <Send>
      <button type="submit">send</button>
      </Send>
      </Bottom>
      </form>
      </Section>
    </>
  );
};

export default MessageScreen;
const Section = styled.div`
height:100%;`
const Header = styled.div`
background-color: #bab0b0;
color:white;
display:flex;
height:10vh;
justify-content:start;
> .MuiSvgIcon-root {
    height:70px;
    color:white;
}
`
const Message = styled.div`
margin:4px;
height:80vh;`
const Bottom = styled.div`
display:flex;
height:10vh;`
const Input = styled.div`
flex:80;
> input {
  width:100%;
}
`
const Send = styled.div`
flex:20;
> button {
  width:100%;
}`
const AllMessage = styled.div`
  margin:12px;
  > li {
    font-size: 12px;
    font-weight: 800;
    list-style: none;
  }
  > span {
    margin:12px;
    background-color:white;
    padding:4px;
    border-radius: 4px;
  }
`