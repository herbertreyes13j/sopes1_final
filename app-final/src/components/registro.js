import React, { useState, useEffect}  from 'react'
import {Header,Navbar, Form, FormGroup, FormControl, ControlLabel,FlexboxGrid,Panel, Content,ButtonToolbar,Button,Container} from 'rsuite';
import Card from './Card'

const Registro = (props) => {


    const registrar = async ()=>{
        let nombre=document.getElementById('nombre').value
        let correo=document.getElementById('correo').value
        let pass=document.getElementById('pass').value
        let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Access-Control-Allow-Origin',localStorage.getItem("server"));
		headers.append('Access-Control-Allow-Credentials', 'true');
		headers.append('GET', 'POST', 'OPTIONS');

        const URL = localStorage.getItem("server")+ '/registro';
        const response = await fetch(URL, {
            method: 'POST',
            headers: headers,
            body: `{
              "nombre":"${nombre}",
              "correo":"${correo}",
              "password":"${pass}"
               }`,
          });
        document.getElementById('nombre').value=""
        document.getElementById('correo').value=""
        document.getElementById('pass').value=""
        alert('Usuario agregado')
    }
   
    return(
        <div className="show-fake-browser login-page">
        <Container>
        <Header>
        <Navbar >
          <Navbar.Header>
            <h2>Sopes 1 Final</h2>
          </Navbar.Header>
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
                      <ControlLabel>Correo</ControlLabel>
                      <FormControl name="name" id="correo" />
                    </FormGroup>

                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl name="password" type="password" id="pass" />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={registrar}>Registrarse</Button>
                      </ButtonToolbar>
                    </FormGroup>
                    <a   href="/">
        Volver a Inicio de Sesion
      </a>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    )
}

export default Registro;