import React from "react";
import Link from "next/link";
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
  title: string;
  link: string | null;
}

export const WhiteButton = ({ onClick, title, link }: ButtonProps) => {
  const { classes } = useStyles();
  const buttonProp = {
    className: classes.button,
    onClick: onClick,
    variant: "white",
  };

  return link ? (
    <Link href={link} passHref>
      <Button {...buttonProp}>{title}</Button>
    </Link>
  ) : (
    <Button {...buttonProp}>{title}</Button>
  );
};

export default WhiteButton;
