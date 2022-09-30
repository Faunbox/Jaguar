import { Button, Container, Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  return (
    <Container
      display="flex"
      justify="space-around"
      alignItems="center"
      direction="column"
      as="form"
    >
      <Input type={"text"} labelPlaceholder="Imie" />
      <Input type={"date"} labelPlaceholder="Data ślubu" />
      <Textarea minRows={5} />
      <Button>Wyślij</Button>
    </Container>
  );
};

export default Contact;
