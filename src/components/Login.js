import React from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import axios from 'axios';

const LoginPage = styled.div`
    margin: 100px auto;
    height: 400px;
    max-width: 600px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #b4b4b4;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    // margin: 20px 0;
`

const InputLabel = styled.label`
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0;
`

const InputBox = styled.input`
    height: 30px;
    font-size: 20px;
    background-color:
`

const InputButton = styled.button`
    background-color: white;
    color: #154734;
    border: 2px #154734 solid;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    min-width: 120px;
    box-sizing: border-box;
    margin: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block
`;

const Footer = styled.div`
    // margin-top: auto;
`

const FooterText = styled.p`
    font-size: 14px

    .email {
        color: #154734;
    }
`;

const FooterLink = styled.a`
    color: #154734;
`


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
        console.log(this.state);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/login', this.state)
            .then(res => {
                saveToken(res.data.token);
            })
            .then(() => this.props.history.push('/'))
            .catch(() => {
                this.props.history.replace('/login');
            });
    }

    render() {
        return (
            <LoginPage>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputContainer>
                        <InputLabel>Username</InputLabel>
                        <InputBox name="username" onChange={this.handleChange}></InputBox>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Password</InputLabel>
                        <InputBox name="password" onChange={this.handleChange}></InputBox>
                    </InputContainer>
                    <InputButton>Login</InputButton>

                </form>
                <Footer>
                    <FooterText>Thank you for your interest in taking part in this experiment.
                    Please login with the username and password provided.
                If you do not know your login details or are having any problems please email <FooterLink target="_blank" href="mailto:daisyanderson.18@gmail.com">Daisy Anderson</FooterLink></FooterText>
                </Footer>
            </LoginPage >

        )
    }
}

export default Login;