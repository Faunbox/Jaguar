import { Container, Grid, Image, Spacer, Text } from "@nextui-org/react";

const Offert = () => {
  return (
    <Container
      id="oferta"
      justify="center"
      alignItems="center"
      css={{ textAlign: "center" }}
    >
      <Spacer y={1} />
      <Text h2>Oferta</Text>
      <Grid.Container gap={1}>
        <Grid xs={12} sm={5}>
          <Image src="/images/jazda.webp" css={{ borderRadius: "15px" }} />
        </Grid>
        <Grid xs={12} sm={7} alignItems="center" direction="column">
          <Text size={"$lg"}>
            Oferta obejmuje przyjazd zarówno po Pana Młodego jak i Panne Mlodą,
            przejazd do kościoła oraz na salę weselną, szczegóły omawiamy
            telefonicznie. Podczas całej podróży samochód jest kierowany przez
            właściciela, mój strój możemy również indywidualnie uzgodnić, mogę
            być dla was Brytyjskim Szoferem bądź schludnie ubranym kierowcą.
            Pojazd nie posiada klimatyzacji, w upalny dzień może być gorąco we
            wnętrzu. Nie utrudni nam to zbytnio podróży, samochód jest
            zaprojektowany tak że nawet przy prędkości 90 kilometrów na godzinę
            i przy otwartych wszystkich czterech oknach wciąż można swobodnie
            rozmawiać i słyszeć rozmówcę.
          </Text>
          <Spacer y={1} />
          <Text>
            Istnieje również możliwość wynajęcia samochodu na sesję ślubną bądź
            związaną z inną tematyką, wszędzie tam gdzie zjawiskowy klasyk
            będzie mile widziany. Z racji dynamicznie zmieniających się cen
            paliwa koszt wypożyczenia samochodu ustalamy indywidualnie na
            podstawie długości trasy oraz miejsca zamieszkania Państwa Młodych.
          </Text>
        </Grid>
        <Grid>
          <Spacer y={1} />
          <Text>
            Z racji że samochód ma prawie pięćdziesiąt lat i niski przebieg co
            czyni go jeszcze atrakcyjniejszym teren który obejmuję usługa jest
            zawężony do promienia 20 kilometrów od miejscowości Żywiec, jednak
            jeśli jesteś z daleka a naprawdę pragniecie by ten samochód był
            waszym pojazdem ślubnym możemy uzgodnić wcześniej warunki przewozu,
            na miejsce mogę zabrać Jaguara laweta co niestety podniesie znacząco
            cenę usługi.
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Offert;
