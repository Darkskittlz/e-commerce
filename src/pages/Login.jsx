import styled from "styled-components"
import ParticleBackground from "../ParticleBackground";
import { mobile } from "../responsive";
import login from "../styles/login.scss"

const Container = styled.div`
    display: flex;
    height: 40rem;
    width: 100%;
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
    width: 30%;
    background-color: #f5f5f58d;
    border-radius: 10px;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    display: block; 
    text-align: center;
    margin: 0px auto;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    display: block;
    margin: 5px auto;
`


export default function LoginPage () {
    return (
        <div>
            <Login />
            <ParticleBackground />
        </div>
    );
}

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>LOGIN</Button>
                    <Link>DO YOU REMEMBER YOUR PASSWORD? </Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

