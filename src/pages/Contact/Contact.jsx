import {
  Checkbox,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useState } from "react";
import StyledButton from "../../components/NextUi/ColoredButton";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Spacer y={1} />
      <Text h2 css={{ color: "white" }}>
        Kontakt
      </Text>
      <Grid.Container as="form" justify="center" alignItems="center" gap={2}>
        <Grid xs={12} sm={6} alignItems={"center"} justify={"center"}>
          <Text h3 css={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
            voluptatum voluptas consequatur mollitia a inventore, eveniet
            corrupti. Maxime labore id molestias sed ad provident fuga
            reprehenderit at. Laborum, dolorum? Deserunt molestiae aperiam
            quaerat quibusdam eaque rerum molestias modi ut.
          </Text>
        </Grid>
        <Grid.Container xs={12} sm={6} direction="column" gap={2}>
          <Grid xs={12}>
            <Input type={"text"} label="Imie" width="100%" clearable />
          </Grid>
          <Grid>
            <Input type={"date"} label="Data ślubu" size="md" width="100%" />
          </Grid>
          <Grid>
            <Input.Textarea
              minRows={5}
              label="Wiadomość"
              width={"100%"}
              minLength={5}
            />
          </Grid>
          <Grid>
            <Checkbox
              defaultChecked={false}
              onChange={() => setIsChecked(!isChecked)}
            >
              <Text small>
                Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą
                o ochronie danych osobowych w związku z wysłaniem zapytania
                przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
                niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
                przysługuje mi prawo dostępu do swoich danych, możliwości ich
                poprawienia, żądania zaprzestania ich przetwarzania.
                Administratorem danych jest firma Nowak
              </Text>
            </Checkbox>
          </Grid>
          <Spacer y={1} />
          {isChecked ? (
            <StyledButton>Wyślij</StyledButton>
          ) : (
            <StyledButton disabled={true}>Wyślij</StyledButton>
          )}
          <Spacer y={1} />
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default Contact;
