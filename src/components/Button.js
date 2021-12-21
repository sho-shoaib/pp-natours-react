import styled from "styled-components";

export const Button = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${props => props.color?"white":"#777"};
  background-color: ${props => props.color?props.color:"white"};
  padding: 20px 35px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 6px 15px rgba(0,0,0,0.3);
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    transform: translateY(0px);
  }
`

export const LinkBtn = styled.a`
  text-decoration: none;
  color: var(--dark-green);
  border-bottom: 2px solid var(--dark-green);
  padding: 3px 8px;
  text-transform: capitalize;
  transition: all 0.2s;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background-color: var(--dark-green);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 3px 15px rgba(0,0,0,0.3);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
`