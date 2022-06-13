import React from "react";
import Link from "next/link";
import { createStyles, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
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
}));

interface ButtonProps {
  onClick?: React.MouseEventHandler;
  title: string;
  variant: string;
  link?: string;
  style?: object;
}

export const CustomButton = ({
  onClick,
  title,
  link,
  variant,
  style,
}: ButtonProps) => {
  const { classes } = useStyles();
  let buttonProp = {
    className: classes[variant],
    onClick: onClick,
    variant: variant,
    style: style,
    gradient:
      variant === "gradient"
        ? { from: "#FFC700", to: "#FFAB00", deg: 100 }
        : {},
  };

  return link ? (
    <Link href={link} passHref>
      <Button {...buttonProp}>{title}</Button>
    </Link>
  ) : (
    <Button {...buttonProp}>{title}</Button>
  );
};

export default CustomButton;
