import styled from "styled-components"
import ParticleBackground from "../ParticleBackground";
import { mobile } from "../responsive";
import register from "../styles/register.scss"

const Container = styled.div`
    display: flex;
    height: 40rem;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    object-fit: cover;
    -webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;        
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #f5f5f5b5;
    border-radius: 10px;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;



export default function RegisterPage () {
    return (
        <div>
            <Register />
            <ParticleBackground />
        </div>
    );
}


function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="E-Mail"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>
                        By creating an account, I consent to the processing
                        of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

