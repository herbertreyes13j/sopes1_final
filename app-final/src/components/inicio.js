import React, { useState, useEffect}  from 'react'
import {Nav,Icon,Header,Navbar, Content,Container} from 'rsuite';
import Card from './Card'
import Grid from '@material-ui/core/Grid';
const Inicio = (props) => {

   const [data,setData]=useState([])
    const usuario = localStorage.getItem("user")

async function obtener(){
    const response = await fetch(localStorage.getItem("server")+'/juego');
    const json = await response.json();
    setData(json);
}
useEffect(() => {
    obtener();
  }, []);
   
    return(
      <div>
            <Container>
            <Header>
        <Navbar >
          <Navbar.Header>
            <h2>{usuario}</h2>
           
          </Navbar.Header>
          <Navbar.Body>
      <Nav>
        <Nav.Item icon={<Icon icon="plus" />} > <a   href="/crud">
        Agregar Producto
      </a></Nav.Item>
      </Nav>
    </Navbar.Body>
         
        </Navbar>
      </Header>
          <Content style={{ padding: '1%' }}>
          <Grid container spacing={8}>

          {data.map((juego) => {
             return <Grid item xs={4} > <Card datos={juego}/>  </Grid>
      })}
      </Grid>
          </Content>
        </Container>
    </div>
    )
}

export default Inicio;