import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";

const Contact = () => {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Text h2>Kontakt</Text>
        <Grid.Container as="form" justify="center" alignItems="center" gap={2}>
          <Grid xs={12}>
            <Text h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, architecto! Laboriosam, numquam aspernatur? Doloribus ipsum dolores maiores amet inventore natus recusandae dignissimos rem fugit! Placeat, eum voluptates quidem atque provident cum ex quasi quaerat ut aspernatur excepturi assumenda beatae tempore.
            </Text>
          </Grid>
          <Grid.Container xs={12} direction="column" gap={2}>
            <Grid xs={12}>
              <Input type={"text"} label="Imie" width="100%" />
            </Grid>
            <Grid>
              <Input type={"date"} label="Data ślubu" size="md" width="100%" />
            </Grid>
            <Grid>
              <Input.Textarea minRows={5} label="Wiadomość" width={"100%"} />
            </Grid>
            <Spacer y={1} />

            <Button>Wyślij</Button>
            <Spacer y={1} />
          </Grid.Container>
        </Grid.Container>
    </Container>
  );
};

export default Contact;
