import React, { Component } from 'react';
import axios from'axios'
import './App.css';
import styled from 'styled-components'
class App extends Component {
  constructor(){
    super()
    this.state = {
      users : []
    }
  }
  componentDidMount() {
    this.fetchUserCards()
  }
  fetchUserCards = () => {
    axios.get(`https://api.github.com/users/jacobcalv/following`)
    .then(result => {
      console.log(result.data)
      this.setState({
        users: result.data
      })
    })
    .catch(error => {
      console.log('👎', error)
    })
  }
  
  render(){
    const Container = styled.div`
      border-top: 2rem solid black;

    `
    const CardContainer = styled.div`
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 90%;
      margin-left: 7%
    `
    const Card = styled.div`
      width: 15%;
      background-color: black;
      margin: 2%;
      padding: 2%;
      border-right: 1rem solid blue;
    `
    const Image = styled.img`
      width: 80%;
      margin-left: 10%;
      
    `
    const Header = styled.h1`
      color: white;
      text-align: center;

    `
    const Button = styled.button`
      background-color: white;
      width: 40%;
      margin-left: 30%;
      border: none;
      height: 2rem;
      font-size: 1rem
      border-left: 1rem solid green;
    `
    const Title = styled.h1`
      text-align: center;
      font-family: 'Bungee Outline', cursive;
      font-size: 3.5rem;
    `
   return (
    <Container>
      <Title>Users I Follow</Title>
      <CardContainer>
        {this.state.users.map((user,index) => (
              <Card>
                <Image key={index} src={user.avatar_url} alt={`Image of ${user.login}`}/>
                <Header>{user.login}</Header>
                <a href={user.html_url}><Button>Profile</Button></a>
              </Card>
          ))}
      </CardContainer>
    </Container>   
    ); 
  }
  
}

export default App;
