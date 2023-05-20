import { Container, Link, Spacer, Text } from "@nextui-org/react";
import StyledButton from "../../components/NextUi/ColoredButton";

const HeroSecrion = () => {
  return (
    <Container
      css={{ minHeight: "90vh", textAlign: "center" }}
      display="flex"
      justify="center"
      alignItems="center"
    >
      <Text h1 color="white">
        Wyjątkowy samochód na wyjątkową chwilę
      </Text>
      <Text
        h3
        css={{
          textGradient: "45deg, #FFF8DC -10%, white 60%",
          backdropFilter: "blur(15px)",
        }}
      >
        Jeśli jesteś wielbicielem klasycznego stylu i kunsztu motoryzacji oraz
        szukasz czegoś co dopełni piękna młodej pary w najważniejszym i
        najwspanialszym dniu waszego życia to dobrze trafiłeś. Oferuję najem
        wraz z szoferem niepowtarzalnej brytyjskiej limuzyny jaką jest Jaguar
        Daimler XJ6 w wersji Long. Pod maską drzemie ponad cztero litrowe
        brytyjskie monstrum zasilanie gaźnikami, niech jego dźwięk doprawi wasz
        wspaniały dzień.
      </Text>
      <Spacer y={1} />
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
