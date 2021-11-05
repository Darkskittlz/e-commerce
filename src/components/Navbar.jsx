import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled from 'styled-components';
import {mobile} from "../responsive";


//This is the parent of the Wrapper Component
const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;

//This is the parent of the Left, Center, Right components
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-style: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "0px"})}
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "13px", marginLeft: "10px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 15px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search"/>
                        <Search style={{color: "blue", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>DarkMeow
                    Productions</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
