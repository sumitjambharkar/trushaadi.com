import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from './Footer';

const Topmatch = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Header>
        <h1>Trushaddi.com</h1>
      </Header>
      <CreateSection>
        <Card className="container">
          <Form>
            <h1>Let's get started by connecting with few of your matches</h1>
          </Form>
          <Tamplte>
            {num.map((ele) => {
              return (
                <>
                  <GusetBox>
                    <img
                      style={{ width: "120px" }}
                      src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg"
                      alt=""
                    />
                    <p>sumit Jambharkar</p>
                  </GusetBox>
                </>
              );
            })}
          </Tamplte>
          <Button>
            <button>
              <Link to="/connect-match">Connect with match</Link>
            </button>
          </Button>
        </Card>
      </CreateSection>
      <Footer/>
    </>
  );
};

export default Topmatch;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 12px;
  > h1 {
    font-family: romon;
  }
`;
const CreateSection = styled.div`
  background-color: rgb(235, 220, 220);;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 6px;
  margin-bottom: 24px;
`;
const Form = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 28px;
    font-weight: 400;
    text-align: center;
  }
`;
const Tamplte = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  > button {
    width: 210px;
    height: 40px;
    border: 1px solid #FFA500;
    background-color:#FFA500;
    border-radius: 24px;
    font-weight: 700;
    margin: 8px;
  }
  > button a {
    text-decoration: none;
    color: white;
  }
`;
const GusetBox = styled.div`
  display: flex;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;