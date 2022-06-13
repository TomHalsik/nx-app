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
  link: string | null;
  variant: string | null;
}

export const CustomButton = ({
  onClick,
  title,
  link,
  variant,
}: ButtonProps) => {
  const { classes } = useStyles();
  const buttonProp =
    variant === "white"
      ? {
          className: classes.white,
          onClick: onClick,
          variant: "white",
        }
      : {
          className: classes.gradient,
          onClick: onClick,
          gradient: { from: "#FFC700", to: "#FFAB00", deg: 100 },
          variant: "gradient",
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
