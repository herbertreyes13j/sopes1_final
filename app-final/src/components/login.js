import React, { useState, useEffect}  from 'react'
import {Header,Navbar, Form, FormGroup, FormControl, ControlLabel,FlexboxGrid,Panel, Content,ButtonToolbar,Button,Container} from 'rsuite';
import { useHistory } from "react-router-dom";
import { Alert } from 'rsuite';
const Login = (props) => {
    let history = useHistory();
    const iniciarsesion = async ()=>{
        let correo=document.getElementById('correo').value
        let pass=document.getElementById('pass').value
        let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Access-Control-Allow-Origin',localStorage.getItem("server"));
		headers.append('Access-Control-Allow-Credentials', 'true');
		headers.append('GET', 'POST', 'OPTIONS');

        const URL = localStorage.getItem("server")+ '/login';
        await fetch(URL, {
            method: 'POST',
            headers: headers,
            body: `{
              "correo":"${correo}",
              "password":"${pass}"
               }`,
          })
        .then(response=> response.json()).
        then(data=>{
            document.getElementById('correo').value=""
            document.getElementById('pass').value=""
            if(data.code==300){
                
                Alert.error('El usuario no existe')
                
            }else{
                localStorage.setItem('user',data.nombre)
                console.log('Algo')
                history.push("/inicio");
                
            }
      
        });
        
        
        
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
                <Panel header={<h3>Inicio de Sesion</h3>} bordered>
                  <Form fluid>
                    <FormGroup>
                      <ControlLabel>Correo</ControlLabel>
                      <FormControl name="name" id="correo"/>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl name="password" type="password" id="pass" />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={iniciarsesion}>Inicio de Sesion</Button>
                      </ButtonToolbar>
                    </FormGroup>
                    <a href="/registro">
        No posees cuenta? Registrate!
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

export default Login;