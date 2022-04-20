import { Facebook, GitHub, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
    display: flex;
    width: 100%;
    background: #ececec;
`;

const Left = styled.div`
    flex: 1;  
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    flex-direction: column;
    //Makes flex container display vertically as opposed to the :default, :horizontal. 
`;

const Logo = styled.h1`
    ${mobile({ textAlign: "center", marginTop: "5px" })}
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    ${mobile({ justifyContent: "center" })}

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    //This is saying take my props, look inside (props.color) and find color. 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-bottom: 5px;
`

const Right = styled.div`
    flex: 1;   
    padding: 20px;
    ${mobile({backgroundColor: "#ebe8e8"})}
`;

const Center = styled.div`
    flex: 1;   
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title=styled.h3`
    margin-bottom: 30px;
    display: flex;
    ${mobile({ justifyContent: "center", fontWeight: "600", fontSize: "25px", textDecoration: "underline" })}
`

const List=styled.ul`   
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    //flex-wrap: wrap = The flex items break into multiple line-height-step. The crossover start 
    //is equivalent to start or before depending on flex-direction value. The cross-end
    //is located opposite of the specified cross-start.
`

const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${mobile({ justifyContent: "center", fontSize: "20px" })}
`

const Payment = styled.img`
    width: 50%;
    ${mobile({width: "100%", justifyContent: "center", display: "flex" })}

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DarkMeow Productions</Logo>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Error atque, quisquam omnis tempora recusandae expedita et alias
                     facere pariatur a optio minus sapiente? Suscipit, ex odio quae reiciendis
                      perspiciatis maxime.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="000000">
                        <GitHub/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Mens Fashion</ListItem>
                    <ListItem>Womens Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>United States
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>Darkskiiittles@gmail.com
                </ContactItem>
                <Payment src="https://sep.yimg.com/ca/I/yhst-172622206-1_2636_1275986089" />
            </Right>
        </Container>
    )
}

export default Footer
