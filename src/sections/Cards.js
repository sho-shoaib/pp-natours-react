import React from 'react'
import styled from 'styled-components'
import backgroundImg from "../img/nat-4.jpg"
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegCompass,FaRegMap,FaRegHeart } from "react-icons/fa";

const data = [
  {title:"EXPLORE THE WORLD",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",icon:<IoGlobeOutline className="icon" />},
  {title:"MEET NATURE",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",icon:<FaRegCompass className="icon" />},
  {title:"FIND YOUR WAY",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",icon:<FaRegMap className="icon" />},
  {title:"LIVE A HEALTHIER LIFE",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",icon:<FaRegHeart className="icon" />}
]

const Cards = () => {
  return (
    <Wrapper>
      {data.map((item,i) => {
        return <Card key={i} {...item} />
      })}
    </Wrapper>
  )
}

const Card = ({title,para,icon}) => {
  return (
  <CardHolder>
    {icon}
    <p className='title'>{title}</p>
    <p className='para'>{para}</p>
  </CardHolder>
  )
}

const Wrapper = styled.div`
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(${backgroundImg});
  background-size: cover;
  background-position: top;
  display: flex;
  gap: 50px;
  padding: 300px 150px;
  clip-path: polygon(0 19%, 100% 0, 100% 79%, 0 100%);
`

const CardHolder = styled.div`
  background-color: rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 15px;
  line-height: 1.7;
  color: #777;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  transition: all 0.2s;
  .icon {
    font-size: 4.5rem;
    margin-bottom: 25px;
  }
  .title {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  }
`

export default Cards
