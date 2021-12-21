import React from 'react'
import styled from 'styled-components'
import { Heading } from '../components/Heading'
import user1 from "../img/nat-8.jpg"
import user2 from "../img/nat-9.jpg"

const data = [
  {img:user1,title:"I HAD THE BEST WEEK EVER WITH MY FAMILY",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",name:"MARY SMITH"},
  {img:user2,title:"WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",name:"JACK WILSON"}
]

const Reviews = () => {
  return (
    <Wrapper>
      <Heading>WE MAKE PEOPLE GENUINELY HAPPY</Heading>
      <div className="card-wrapper">
        {data.map((item,i) => {
          return <Review key={i} {...item} />
        })}
      </div>
    </Wrapper>
  )
}

const Review = ({img,title,para,name}) => {
  return (
    <EachCard>
      <div className="img-container">
        <span className='name'>{name}</span>
        <img src={img} alt={name} />
      </div>
      <div className="text-container">
        <p className="title">{title}</p>
        <p className="para">{para}</p>
      </div>
    </EachCard>
  )
}

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #777;
  gap: 100px;

  .card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 70px;
    align-items: center;
  }
`

const EachCard = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: 60%;
  padding: 60px;
  line-height: 1.7;

  &:hover img {
    transform: scale(1.1);
    filter: blur(3px);
  }

  &:hover .name {
    bottom: 45px;
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5);
    transition: all 0.4s;
  }

  .img-container {
    min-width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;
    position: relative;
  }

  .title {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .name {
    position: absolute;
    bottom: 10px;
    color: #f1f3f5;
    text-align: center;
    font-size: 1.3rem;
    z-index: 1;
    right: 36px;
    width: 50%;
    line-height: 1.4;
    opacity: 0;
    transition: all 0.4s;
  } 
`

export default Reviews
