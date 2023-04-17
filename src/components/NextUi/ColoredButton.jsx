import { Button } from "@nextui-org/react";

const StyledButton = ({ children, disabled = false }) => {
  return (
    <Button
      ghost
      disabled={disabled}
      type="submit"
      css={{
        borderColor: "#A87C66",
        background: "#A87C66",
        color: "white",
        fontFamily: "Butler Stencil",
      }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
