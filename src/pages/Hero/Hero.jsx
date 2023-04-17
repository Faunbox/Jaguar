import { Container, Link, Text } from "@nextui-org/react";
import StyledButton from "../../components/NextUi/ColoredButton";

const HeroSecrion = () => {
  return (
    <Container
      css={{ minHeight: "90vh", textAlign: "center" }}
      display="flex"
      justify="center"
      alignItems="center"
    >
      <Text h2 color="white">
        Wyjątkowy samochód na wyjątkową chwilę
      </Text>
      <Text h3 color="white ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        veritatis cupiditate ullam neque iusto aut et quaerat illum distinctio
        eveniet fuga itaque, recusandae aperiam nesciunt! Exercitationem hic a
        nulla beatae earum harum atque reiciendis corrupti sed, quaerat quidem
        modi soluta.
      </Text>
      <Link href="#kontakt" color={"inherit"}>
        <StyledButton
          ghost
          css={{
            borderColor: "#A87C66",
            background: "#A87C66",
            color: "white",
            fontFamily: "Butler Stencil",
          }}
        >
          Zamów
        </StyledButton>
      </Link>
    </Container>
  );
};

export default HeroSecrion;
