import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import UseNav from "./UseNav";
import { useParams } from "react-router-dom";


const CoupleDetails = () => {
  const params = useParams()

  const [data, setData] = useState({})

    useEffect(() => {
        const getData = async () => {
            const respone = await fetch(`http://localhost:3001/profile/${params.id}`)
            const result = await respone.json()
            console.log(result.profile);
            setData(result.profile)
        }
        getData()
    }, [params.id])

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
        <h1>{data.name}</h1>
        <p>{data.date}</p>
        <img
          src={data.image}
          alt=""
        />
        <p>
         {data.des}
        </p>
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
