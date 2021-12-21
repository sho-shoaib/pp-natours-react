import React from 'react'
import styled from 'styled-components'
import backgroundImage1 from "../img/nat-5.jpg"
import backgroundImage2 from "../img/nat-6.jpg"
import backgroundImage3 from "../img/nat-7.jpg"
import {Button} from "../components/Button"
import { Heading } from '../components/Heading'

const data = [
  {title:"the sea explorer",tasks:["3 day tours","up to 30 people","2 tour guides","sleep in cozy hotels","dificulty: easy"],image:backgroundImage1,color:"#ffb900"},
  {title:"the forest hiker",tasks:["7 day tours","up to 40 people","6 tour guides","sleep in provided tents","difficulty: medium"],image:backgroundImage2,color:"#7ed56f"},
  {title:"the snow adventurer",tasks:["5 day tours","up to 15 people","3 tour guides","sleep in provided tents","difficulty: hard"],image:backgroundImage3,color:"#2998ff"}
]

const Plans = () => {
  return (
    <Wrapper>
      <Heading>most popular tours</Heading>
      <div className="cards">
        {data.map((item, i) => {
          return <Card key={i} {...item} />
        })}
      </div>
      <Button color='var(--dark-green)'>Discover all tours</Button>
    </Wrapper>
  )
}

const Card = ({title,tasks,image,color}) => {
  return(
    <CardWrapper color={color} image={image}>
      <div className="img-container">
        <p className="title">{title}</p>
      </div>
      <div className="list">
        {tasks.map((task, i) => {
          console.log(task)
          return <p key={i} className="list-item">{task}</p>
        })}
      </div>
    </CardWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 150px;
  color: #777;
  gap: 60px;
  margin-top: 80px;

  .cards {
    display: flex;
    justify-content: center;
    gap: 60px;
  }

  .heading {
    font-weight: 500;
    font-size: 2.5rem;
  }

  button {
    margin-top: 30px;
  }
`

const CardWrapper = styled.div`
  flex: 1;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  padding-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 25px rgba(0,0,0,0.3);
  }
  
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
  }

  .title {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: white;
    padding: 5px 15px;
    background-color: ${props => props.color};
    width: 75%;
    text-align: right;
    position: absolute;
    top: 7rem;
    right: 0;
  }

  .list-item {
    line-height: 1.7;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .img-container {
    height: 230px;
    width: 100%;
    background-image: linear-gradient(${props => props.color},${props => props.color}),url(${props => props.image});
    background-size: cover;
    background-position: top;
    background-blend-mode: screen;
    margin-bottom: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 79%, 0 100%);
    position: relative;
  }
`

export default Plans
