import { InfoRounded } from "@mui/icons-material"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "35vh"})}
`
const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: #000000;
    margin-bottom: 8px;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 5px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    font-weight: 600;
    color: gray;
    cursor: pointer;
`


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>Shop Now</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem

