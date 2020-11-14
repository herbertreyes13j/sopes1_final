import React, { useState, useEffect}  from 'react'
import { Alert } from 'rsuite';
import {Icon,Nav,Header,Navbar, Form, FormGroup, FormControl, ControlLabel,FlexboxGrid,Panel, Content,ButtonToolbar,Button,Container} from 'rsuite';

const Crud = (props) => {
    let usuario = localStorage.getItem('user')
    const insertarproducto = async ()=>{
        let nombre=document.getElementById('nombre').value
        let descripcion=document.getElementById('descripcion').value
        let url=document.getElementById('url').value
        let precio=document.getElementById('precio').value
        let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Access-Control-Allow-Origin',localStorage.getItem("server"));
		headers.append('Access-Control-Allow-Credentials', 'true');
		headers.append('GET', 'POST', 'OPTIONS');

        const URL = localStorage.getItem("server")+ '/juego';
        const response = await fetch(URL, {
            method: 'POST',
            headers: headers,
            body: `{
              "nombre":"${nombre}",
              "descripcion":"${descripcion}",
              "url":"${url}",
              "precio":"${precio}"
               }`,
          });
        document.getElementById('nombre').value=""
        document.getElementById('url').value=""
        document.getElementById('precio').value=""
        document.getElementById('descripcion').value=""
        Alert.success('Juego Agregado Correctamente!')
    }
   
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
        <Nav.Item icon={<Icon icon="home" />} > <a   href="/inicio">
        Inicio
      </a></Nav.Item>
      </Nav>
    </Navbar.Body>
         
        </Navbar>
      </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Registro de Usuario</h3>} bordered>
                  <Form fluid>
                    <FormGroup>
                      <ControlLabel>Nombre</ControlLabel>
                      <FormControl name="nombre" id="nombre"/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Descripcion</ControlLabel>
                      <FormControl name="name" id="descripcion" />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>URL</ControlLabel>
                      <FormControl name="passwordd"  id="url" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Precio</ControlLabel>
                      <FormControl name="password"  id="precio" />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={insertarproducto}>Registrarse</Button>
                      </ButtonToolbar>
                    </FormGroup>

                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
    </div>
    )
}

export default Crud;