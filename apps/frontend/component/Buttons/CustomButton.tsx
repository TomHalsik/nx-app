import React from "react";
import Link from "next/link";
import { createStyles, Button, ButtonVariant } from "@mantine/core";

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  title: string;
  variant: ButtonVariant;
  link?: string;
  style?: object;
  color: "gradient" | "green" | "white";
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
}

export const CustomButton = ({
  onClick,
  title,
  link,
  variant,
  style,
  color,
  type,
  disabled,
}: ButtonProps) => {
  const { classes } = useStyles();
  const buttonClasse: string = classes[color];

  const buttonProp = {
    onClick,
    variant,
    style,
    disabled,
    type: type ? type : "submit",
    className: buttonClasse,
    gradient:
      variant === "gradient"
        ? { from: "#FFC700", to: "#FFAB00", deg: 100 }
        : undefined,
  };

  return link ? (
    <Link href={link} passHref>
      <Button {...buttonProp}>{title}</Button>
    </Link>
  ) : (
    <Button {...buttonProp}>{title}</Button>
  );
};

const useStyles = createStyles(() => ({
  white: {
    border: "1px solid #D0D5DD",
    boxShadow: "0px 2px 0px #C0C5CC",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#101828",
  },
  gradient: {
    border: "1px solid #D0D5DD",
    boxShadow: "0px 2px 0px #C19225",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#101828",
  },
  green: {
    background: "#32D583",
    border: "1px solid #D0D5DD",
    boxShadow: "0px 2px 0px #0B6035",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
}));

export default CustomButton;
