import React from "react";
import {
  Container,
  Line,
  Name,
  Social,
  SocialLink,
  Text,
  Top,
  Body,
  Card,
  CardContact,
  CardIcon,
  CardName,
} from "./Footer.styles";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { MdLocalPostOffice, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Line />
      <Top>
        <Name>
          <span>Fit</span> App
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam maxime
          laborum quisquam veniam quia quidem ipsam exercitationem dolores
          repellendus excepturi?
        </Text>
        <Social>
          <SocialLink href="https://facebook.com" target={"_blank"}>
            <ImFacebook />
          </SocialLink>
          <SocialLink href="https://instagram.com" target={"_blank"}>
            <AiFillInstagram />
          </SocialLink>
          <SocialLink href="https://telegram.org" target={"_blank"}>
            <FaTelegramPlane />
          </SocialLink>
        </Social>
      </Top>
      <Body>
        <Card>
          <CardIcon>
            <MdLocalPostOffice />
          </CardIcon>
          <CardName>Email</CardName>
          <CardContact href="mailto:fitapp@cat.com">fitapp@cat.com</CardContact>
        </Card>
        <Card className="pt">
          <CardIcon>
            <MdLocationOn />
          </CardIcon>
          <CardName>address</CardName>
          <CardContact href="https://maps.google.com" target={"_blank"}>
            Tashkent, Amir Temur st.
          </CardContact>
        </Card>
        <Card>
          <CardIcon>
            <MdPhone />
          </CardIcon>
          <CardName>Contact</CardName>
          <CardContact href="tel:+998901234567">+998 90 123 45 67</CardContact>
        </Card>
      </Body>
    </Container>
  );
};

export default Footer;
