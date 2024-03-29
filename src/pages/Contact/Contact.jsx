import {
  Card,
  Checkbox,
  Col,
  Container,
  Grid,
  Input,
  Link,
  Row,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import StyledButton from "../../components/NextUi/ColoredButton";
import { GiRotaryPhone } from "react-icons/gi";
import { MdLocalPostOffice } from "react-icons/md";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container
      id="kontakt"
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
        <Grid
          xs={12}
          sm={6}
          alignItems={"center"}
          justify={"center"}
          direction="column"
        >
          <Text h3 css={{ color: "white" }}>
            Chcielibyście rozsiąść się na przestronnej tylnej kanapie i zostać
            zawiesieni pod kosciół oraz sale weselną? Samochód przeszedł
            gruntowną profesjonalną renowację, swoim klasycznym nietuzinkowym
            wyglądem jeszcze bardziej przykuje spojrzenia gości na waszą dwójkę.
            Bez obaw, miejsca na wspaniałą suknie Panny Młodej nie zabraknie.
          </Text>
          <Text h3 css={{ color: "white" }} weight={"bold"}>
            Masz jakieś pytania? Zapraszamy do kontaktu!
          </Text>
          <Col>
            <Container
              justify="center"
              alignItems="center"
              css={{ textAlign: "center" }}
            >
              <Text
                size={25}
                css={{ textGradient: "45deg, #a9a69b -10%, white 60%" }}
              >
                <Link href="tel:+48512700684" color={"inherit"}>
                  <GiRotaryPhone style={{ margin: "5px" }} />
                  Telefon: +48 512 700 684
                </Link>
              </Text>
              <Text
                size={25}
                css={{ textGradient: "45deg, #a9a69b -10%, white 60%" }}
              >
                <Link href="mailto:kontakt@jaguarnaslub.pl" color={"inherit"}>
                  <MdLocalPostOffice style={{ margin: "5px" }} />
                  Email: kontakt@jaguarnaslub.pl
                </Link>
              </Text>
            </Container>
          </Col>
        </Grid>

        <Grid.Container
          xs={12}
          sm={6}
          direction="column"
          gap={2}
          as="form"
          action="https://formsubmit.co/kontakt@jaguarnaslub.pl"
          method="POST"
        >
          <Card
            variant="bordered"
            css={{
              background: "transparent",
              backdropFilter: "blur(10px)",
              width: "auto",
              padding: "10px",
            }}
          >
            <Grid xs={12}>
              <Input
                type={"text"}
                label="Imie"
                name="name"
                width="100%"
                clearable
                required
                min={3}
              />
            </Grid>
            <Grid>
              <Row justify="space-between">
                <Input
                  type={"date"}
                  label="Data ślubu"
                  name="Data"
                  size="md"
                  width="100%"
                  required
                />
                <Spacer y={1} />
                <Input
                  type={"number"}
                  label="Numer kontaktowy"
                  name="phone"
                  size="md"
                  width="100%"
                  required
                />
              </Row>
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
              ></input>
            </Grid>
            <Grid>
              <Textarea
                minRows={5}
                label="Wiadomość"
                name="Wiadomość"
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
                  Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                  ustawą o ochronie danych osobowych w związku z wysłaniem
                  zapytania przez formularz kontaktowy. Podanie danych jest
                  dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem
                  poinformowany, że przysługuje mi prawo dostępu do swoich
                  danych, możliwości ich poprawienia, żądania zaprzestania ich
                  przetwarzania. Administratorem danych jest firma Nowak
                </Text>
              </Checkbox>
              <input type="text" name="_honey" style={{ display: "none" }} />
            </Grid>
            <Spacer y={1} />
            {isChecked ? (
              <StyledButton>Wyślij</StyledButton>
            ) : (
              <StyledButton disabled={true}>Wyślij</StyledButton>
            )}
            <Spacer y={1} />
          </Card>
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default Contact;
