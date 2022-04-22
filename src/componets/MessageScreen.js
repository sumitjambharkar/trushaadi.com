import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { db } from "./firebase";
import Avatar from '@mui/material/Avatar';

const MessageScreen = () => {
  const { roomId } = useParams();
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState([])

  useEffect(() => {
    if (roomId) {
        db.collection("users")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setUser(snapshot.data());
        });
        
    }
  }, [roomId]);

  return (
    <>
      <Header>
      <ListItemButton>
          <ListItemText>
          {!user ? <Avatar/> :<Avatar src={user.image} />}
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>
            {!user ? <h1>Sumit</h1> : <h1>{user.displayName}</h1>}
          </ListItemText>
        </ListItemButton>
      </Header>
      <Message>
      <p>how r u</p>
      </Message>
    </>
  );
};

export default MessageScreen;
const Header = styled.div`
background-color: #bab0b0;
color:white;
display:flex;
justify-content:start;
> .MuiSvgIcon-root {
    height:70px;
    color:white;
}
`
const Message = styled.div`
margin:4px;
> p {
    background-color:#bab0b0;
    width:auto;
}`
