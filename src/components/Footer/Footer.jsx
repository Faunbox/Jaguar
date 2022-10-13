import { Container, Grid } from "@nextui-org/react";
import FooterGridElement from "../NextUi/FooterGridElement";

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "60px",
        backgroundColor: "black",
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
      </Container>
    </footer>
  );
};

export default Footer;
