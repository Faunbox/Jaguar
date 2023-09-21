import { Col, Container, Grid, Link, Row, Text } from "@nextui-org/react";
import FooterGridElement from "../NextUi/FooterGridElement";
import PrivactPolitics from "../Others/PrivacyPolitics";
import { GiRotaryPhone } from "react-icons/gi";
import { MdLocalPostOffice } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "60px",
        background: "(0, 0, 0, 0.6)",
        backdropFilter: "saturate(180%) blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Container
        alignItems="center"
        justify="center"
        css={{ textAlign: "Center" }}
      >
        <Grid.Container justify="center" alignItems="center" gap={2}>
          <FooterGridElement xs={12} sm={4} justify="center">
            <PrivactPolitics />
          </FooterGridElement>
          <FooterGridElement xs={12} sm={4} justify="center">
            <Col>
              <Text css={{ textAlign: "center" }}>
                <Link href="tel:+48512700684" color={"inherit"}>
                  <GiRotaryPhone size={19} style={{ marginRight: "5px" }} />
                  Telefon: +48512700684
                </Link>
              </Text>
              <Text>
                <Link href="mailto:kontakt@jaguarnaslub.pl" color={"inherit"}>
                  <MdLocalPostOffice size={19} style={{ marginRight: "5px" }} />
                  Email: kontakt@jaguarnaslub.pl
                </Link>
              </Text>
            </Col>
          </FooterGridElement>
          <FooterGridElement xs={12} sm={4} justify="center">
            <Row justify="space-around">
              <a
                href="https://www.tiktok.com/@jaguarxj6l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/people/Jaguar-na-%C5%9Alub/61551434428764/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>

              <FaInstagram />
            </Row>
          </FooterGridElement>
        </Grid.Container>
        <Text small>Created by Filip Sojecki</Text>
      </Container>
    </footer>
  );
};

export default Footer;
