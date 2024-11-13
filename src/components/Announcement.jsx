import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
${mobile({ fontSize: "12px" })}

`
const Announcement = () => {
    return (
        <Container>
            Super Deal! Use FLAT10 and Get flat 10% off on your first order.
        </Container>
    )
}

export default Announcement