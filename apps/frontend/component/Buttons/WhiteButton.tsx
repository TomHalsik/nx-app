import React from "react";
import { createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    border: "1px solid #D0D5DD",
    boxShadow: "0px 2px 0px #C0C5CC",
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

export const WhiteButton = ({ onClick, children }: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <Button className={classes.button} onClick={onClick} variant="white">
      {children}
    </Button>
  );
};

export default WhiteButton;
