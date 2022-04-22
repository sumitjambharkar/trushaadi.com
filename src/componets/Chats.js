import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { db } from './firebase'
import {Link} from 'react-router-dom'
import MessageScreen from './MessageScreen';
import UseNav from './UseNav';


function Chats() {
  const [room, setRoom] = useState([])
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setRoom(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <>
    <UseNav/>
      <Chat>
        <ContactSideBar>
          {room.map((doc) => {
            return (
              <>
                <Link to={`/chats/${doc.id}`}>
                <Contact>
                  <Avatar src={doc.data.image} />
                  <ListItemButton>
                    <ListItemText>
                    {doc.data.displayName}
                    </ListItemText>
                  </ListItemButton>
                </Contact>
                </Link>
              </>
            )
          })}
        </ContactSideBar>
        <ChatSideBar>
        <MessageScreen/>
        </ChatSideBar>
      </Chat>
    </>
  )
}

export default Chats;
const Chat = styled.div`
display:flex;
background-color:gray;
height:100%;
padding:50px;`
const ContactSideBar = styled.div`
flex:3;
height:100vh;
background-color:white;
> a {
  text-decoration:none;
  color:black;
}
`
const Contact = styled.div`
padding:8px;
display:flex;
justify-content:start;
`
const ChatSideBar = styled.div`
flex:7;
height:100vh;
background-color:#e1d9d9;`