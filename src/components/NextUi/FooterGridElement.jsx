import { Grid } from "@nextui-org/react";

const FooterGridElement = ({ children }) => {
  return (
    <Grid xs={12} sm={4} justify="center">
      {children}
    </Grid>
  );
};

export default FooterGridElement;
