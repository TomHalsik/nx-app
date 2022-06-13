import React from "react";
import { createStyles, Header, Group, Burger, MediaQuery } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { User } from "tabler-icons-react";
import { CustomButton } from "../Buttons/CustomButton";

const useStyles = createStyles((theme) => ({
  header: {
    background: "linear-gradient(102.25deg, #0085FF -0.08%, #00B2FF 100%)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "28px",
    gap: "10px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
    },
  },
  logo: {
    maxWidth: "83px",
    maxHeight: "50px",
    paddingRight: "30px",
  },
  activePlayer: {
    color: "white",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",
    marginRight: "16px",
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
  }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={66} className={classes.header} mb={120}>
      <div className={classes.container}>
        <div className={classes.headerLeft}>
          <div>
            <img className={classes.logo} src="/img/logo.png" />
          </div>
          <div>
            <Group spacing={8} className={classes.links}>
              {items}
            </Group>
          </div>
        </div>
        <div>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <div className={classes.headerRight}>
              <div className={classes.activePlayer}>
                <User size={12} strokeWidth={3} color={"white"} /> 240 joueurs
              </div>

              <div>
                <CustomButton
                  title={"S'inscrire"}
                  variant={"white"}
                  link={"/inscription"}
                />
              </div>
              <div>
                <CustomButton title={"Se connecter"} variant={"gradient"} />
              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
    </Header>
  );
}
