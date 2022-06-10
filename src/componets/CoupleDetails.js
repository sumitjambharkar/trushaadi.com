import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import UseNav from "./UseNav";
import { useParams } from "react-router-dom";
import { db } from "./firebase";


const CoupleDetails = () => {
  const {personId} = useParams()

  const [data, setData] = useState({})

    useEffect(() => {
      db.collection("success").doc(personId).onSnapshot(snapshot=>{
        setData(snapshot.data())
      })
    }, [personId])

  return (
    <>
      <UseNav/>
      <Details className="container">
        <Link to="/">Featured Success Stories</Link>
        <Link to="/video">Videos Stories</Link>
        <Link to="/tellus">Tell Us Your Story</Link>
      </Details>
      <Welcome className="container">
        <h1>Welcome to Shaadi Pride.</h1>
        <p>This is where we celebrate Shaadi.com Success Stories.</p>
      </Welcome>
      <Head className="container">
        <div className="row">
        <h1>{data.name}</h1>
        <p>{data.date}</p>
        <div className="col-md-4" width="100%" text-center>
        <img
          src={data.image}
          alt=""
        />
        </div>
        <p>
         {data.desc}
        </p>
        </div>
      </Head>
      <Footer/>
    </>
  );
};

export default CoupleDetails;

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
const Head = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: auto;
  margin-bottom: 40px;
  > h1 {
    padding: 24px;
    color: darkcyan;
  }
  > p {
    padding: 24px;
    color: gray;
  }
  > img {
    padding: 24px;
    align-items: center;
  }
`;
