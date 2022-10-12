import { Container, Grid, Image, Spacer, Text } from "@nextui-org/react";

const Offert = () => {
  return (
    <Container
      justify="center"
      alignItems="center"
      css={{ textAlign: "center" }}
    >
      <Spacer y={1} />
      <Text h2>Oferta</Text>
      <Grid.Container gap={1}>
        <Grid xs={12} sm={5}>
          <Image src="/images/fura.jpg" css={{ borderRadius: "15px" }} />
        </Grid>
        <Grid xs={12} sm={7} alignItems="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos
          ratione nobis itaque mollitia sit soluta quaerat explicabo
          necessitatibus quae labore sequi, nam eius. Nobis, in blanditiis!
          Iusto minima facere veniam sint a! Autem tenetur dolor ipsa
          voluptatibus exercitationem. Magni.
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Offert;
