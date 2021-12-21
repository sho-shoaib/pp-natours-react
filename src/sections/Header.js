import React from 'react'
import styled from 'styled-components'
import backgroundImg from "../img/hero.jpg"
import logo from "../img/logo-white.png"
import { Button } from '../components/Button'

const Header = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={logo} alt="logo-white" />
      </div>
      <div className='heading'>
        <p>outdoors</p>
        <span>is where life happens</span>
      </div>
      <Button>discover our tours</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(${backgroundImg});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 79%, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .img-container {
    position: absolute;
    top: 40px;
    left: 40px;
    height: 40px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .heading {
    color: white;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-100px);
    p {
      font-size: 4.5rem;
      letter-spacing: 18px;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 10px;
      word-spacing: 16px;
    }
  }
`

export default Header
