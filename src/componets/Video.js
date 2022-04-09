import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UseNav from "./UseNav";


const Video = () => {
  const vid = [1, 2, 3, 4];
  return (
    <>
      <UseNav/>
      <Details className="container">
        <Link to="/">Featured Success Stories</Link>
        <Link to="/video">Videos Stories</Link>
        <Link to="/tellus">Tell Us Your Story</Link>
      </Details>
      <Welcome className="container">
        <h1>
          Watch the beautiful journey of our Success Stories and be inspired.
        </h1>
      </Welcome>
      <Videos className="container">
        {vid.map((ele) => {
          return (
            <>
              <Box>
                
              </Box>
            </>
          );
        })}
      </Videos>
      <Footer>
        <h1>
          © 1996-2022 TruShaadi.com, The World's Leading Matchmaking Service™
        </h1>
        <h1>Created By Sumit Jambharkar</h1>
      </Footer>
    </>
  );
};

export default Video;

const Details = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: start;
  margin-top: 24px;
  a {
    color: black;
    text-decoration: none;
    padding: 16px;
    display: flex;
    font-weight: 700;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  a:active {
    color: red;
  }
`;
const Welcome = styled.div`
  padding: 24px;
  > h1 {
    text-align: center;
    color: #72727d;
  }
  > p {
    text-align: center;
    color: #72727d;
  }
`;
const Footer = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-around;
  > h1 {
    font-size: 16px;
    padding: 24px 24px;
    color: white;
  }
`;
const Videos = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 8px 8px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 500px;
  margin: 4px;
  text-align: center;
`;
