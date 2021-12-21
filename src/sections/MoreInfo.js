import React from 'react'
import styled from 'styled-components'
import { LinkBtn } from '../components/Button'
import { Heading } from '../components/Heading'
import nat1 from "../img/nat-1.jpg"
import nat2 from "../img/nat-2.jpg"
import nat3 from "../img/nat-3.jpg"

const MoreInfo = () => {
  return (
    <Wrapper>
      <Heading className='header'>exiting tours for adventurous people</Heading>
      <div className='mid-container'>
        <div className="text">
          <p className='heading'>you're going to fall in love with nature</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</p>

          <p className='heading'>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</p>

          <LinkBtn>learn more</LinkBtn>
        </div>
        <div className="images">
          <div className="img-container img-1">
            <img src={nat1} alt="nat-1" />
          </div>
          <div className="img-container img-2">
            <img src={nat2} alt="nat-2" />
          </div>
          <div className="img-container img-3">
            <img src={nat3} alt="nat-3" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0;
  margin-bottom: 90px;

  .header {
    margin-bottom: 50px;
  }
  
  .mid-container {
    display: flex;
    padding: 0 80px;
  }

  .text {
    color: #777;
    flex-basis: 50%;
    line-height: 1.7;
    a {
      margin-top: 15px;
    }
  }

  .heading {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.2rem;
  }

  .text>*{
    margin: 30px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .images {
    position: relative;
    flex-basis: 50%;
  }

  .img-container {
    position: absolute;
    box-shadow: 0 20px 30px rgba(0,0,0,0.3);
    height: 200px;
  } 

  .img-1 {
    top: 30px;
    left: 50px;
  }
  .img-2 {
    top: 75px;
    left: 300px;
  }
  .img-3 {
    top: 160px;
    left: 170px;
  }
`

export default MoreInfo
