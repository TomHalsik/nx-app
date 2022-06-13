import React from "react";
import { createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    border: "1px solid #D0D5DD",
    boxShadow: "0px 2px 0px #C19225",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#101828",
  },
}));

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  children: string;
}

export const GradientButton = ({ onClick, children }: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <Button
      variant="gradient"
      className={classes.button}
      onClick={onClick}
      gradient={{ from: "#FFC700", to: "#FFAB00", deg: 100 }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
