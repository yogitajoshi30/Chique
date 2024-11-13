import styled from "styled-components"
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Pinterest from "@mui/icons-material/Pinterest";
import Room from "@mui/icons-material/Room";
import Phone from "@mui/icons-material/Phone";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;    
${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
display: flex;
flex:1 ;    
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1 ;
padding: 20px;
${mobile({ backgroundColor: "#f4f8f8" })}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>CHIQUE.</Logo>
                <Desc>There are many variations of passages of Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti perspiciatis, officia debitis modi expedita a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, corrupti!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 137 Adarsh Indl Est, Sahar Road, Mumbai
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />  +91 123 456 7890
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{ marginRight: "10px" }} />  contact@chique.fas
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer