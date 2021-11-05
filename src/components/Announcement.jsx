import styled from "styled-components"

const Container = styled.div`
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    height: 30px;
    font-style: 14px;
`




function Announcement() {
    return (
        <div>
            <Container>Free Shipping on orders over $50</Container>
        </div>
    )
}

export default Announcement
