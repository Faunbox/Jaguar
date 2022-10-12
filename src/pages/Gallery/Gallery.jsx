import { Container, Grid, Image, Text } from "@nextui-org/react";

const Gallery = () => {
  return (
    <Container
      justify="center"
      alignItems="center"
      css={{ textAlign: "center", minHeight: "50vh" }}
    >
      <Text h2>Galeria</Text>
      <Grid.Container>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Image src="https://picsum.photos/1240/920/?blur" />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Gallery;
