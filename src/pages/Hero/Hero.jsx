import { Button, Container, Text } from "@nextui-org/react";

const HeroSecrion = () => {
  return (
    <Container
      css={{ minHeight: "90vh" }}
      display="flex"
      justify="center"
      alignItems="center"
    >
      <Text h2>Wyjątkowy samochód na wyjątkową chwilę</Text>
      <Text h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        veritatis cupiditate ullam neque iusto aut et quaerat illum distinctio
        eveniet fuga itaque, recusandae aperiam nesciunt! Exercitationem hic a
        nulla beatae earum harum atque reiciendis corrupti sed, quaerat quidem
        modi soluta.
      </Text>
      <Button ghost color={"error"}>
        Zamów
      </Button>
    </Container>
  );
};

export default HeroSecrion;
