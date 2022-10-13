import { Container, Grid, Text } from "@nextui-org/react";
import FooterGridElement from "../NextUi/FooterGridElement";

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "60px",
        background: "(0, 0, 0, 0.6)",
        backdropFilter: "saturate(180%) blur(10px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        alignItems="center"
        justify="center"
        css={{ textAlign: "Center" }}
      >
        <Grid.Container justify="center" alignItems="center" gap={2}>
          <FooterGridElement xs={12} sm={4} justify="center">
            LOGO
          </FooterGridElement>
          <FooterGridElement xs={12} sm={4} justify="center">
            Dane kontaktowe
          </FooterGridElement>
          <FooterGridElement xs={12} sm={4} justify="center">
            SOCIALE
          </FooterGridElement>
        </Grid.Container>
        <Text>Polityka Prywatnosci</Text>
        <Text small>Created by Filip Sojecki</Text>
      </Container>
    </footer>
  );
};

export default Footer;
