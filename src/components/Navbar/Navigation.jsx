import { Link, Navbar, Text } from "@nextui-org/react";

const Navigarion = () => {
  const menuOptions = [
    { text: "Strona główna", href: "#" },
    { text: "Oferta", href: "#oferta" },
    { text: "Galeria", href: "#galeria" },
    { text: "Kontakt", href: "#kontakt" },
  ];

  return (
    <Navbar>
      <Navbar.Brand>
        <Link href="#">
          <Text b>Jaguarem do ślubu</Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle showIn={"xs"} />
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        {menuOptions.map((item) => {
          return (
            <Navbar.Link href={item.href} key={item.text}>
              {item.text}
            </Navbar.Link>
          );
        })}
      </Navbar.Content>
      <Navbar.Collapse>
        {menuOptions.map((item) => {
          return (
            <Navbar.CollapseItem>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.href}
              >
                {item.text}
              </Link>
            </Navbar.CollapseItem>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigarion;
