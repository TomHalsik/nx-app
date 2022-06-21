import React from "react";
import {
  createStyles,
  Header,
  Group,
  Burger,
  MediaQuery,
  Paper,
  Transition,
} from "@mantine/core";
import {
  useBooleanToggle,
  useScrollLock,
  useWindowScroll,
} from "@mantine/hooks";
import { User } from "tabler-icons-react";
import { CustomButton } from "../../Buttons/CustomButton";
import useUser from "../../../hook/useUser";
import { logout } from "../../../redux/user/userStore";
import { useDispatch } from "react-redux";
import Router from "next/router";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  header: {
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "unset",
    transition: "all 0.3s ease-in-out",
  },
  headerScroll: {
    background: "white !important",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "94%",
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
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("md")]: {
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
    paddingRight: "16px",
  },
  activePlayer: {
    color: "white",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",
    marginRight: "16px",
  },
}));

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    active: boolean;
  }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [scroll, scrollTo] = useWindowScroll();
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const user = useUser();
  const dispatch = useDispatch();

  const { classes } = useStyles();

  const toggleMenu = () => {
    toggleOpened();
    setScrollLocked((c) => !c);
  };

  const headLinks = links.map((link) => {
    return (
      <Link href={link.link} passHref>
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          style={link.active ? { color: "black" } : {}}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  const drawerLinks = links.map((link) => {
    return (
      <Link href={link.link} passHref>
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={() => toggleOpened()}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  return (
    <>
      <Header
        fixed={true}
        height={66}
        className={classes.header}
        style={
          scroll.y > 25
            ? {
                background: "white",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
              }
            : {}
        }
      >
        <div className={classes.container}>
          <div className={classes.headerLeft}>
            <div></div>
            <div>
              <Group spacing={4} className={classes.links}>
                {headLinks}
              </Group>
            </div>
          </div>
          <div>
            <Burger
              opened={opened}
              onClick={() => toggleMenu()}
              className={classes.burger}
              size="md"
              color="#fff"
            />
            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <div className={classes.headerRight}>
                <div className={classes.activePlayer}>
                  <User size={12} strokeWidth={3} color={"white"} /> 240 joueurs
                </div>

                {(!user && (
                  <>
                    <CustomButton
                      title={"S'inscrire"}
                      variant={"white"}
                      link={"/signin"}
                      style={{ display: "block" }}
                      color={"white"}
                    />

                    <CustomButton
                      title={"Se connecter"}
                      variant={"gradient"}
                      link={"login"}
                      style={{ display: "block" }}
                      color={"gradient"}
                    />
                  </>
                )) || (
                  <CustomButton
                    title={"Déconnexion"}
                    variant={"gradient"}
                    onClick={() => {
                      Router.push("/");
                      dispatch(logout());
                    }}
                    style={{ display: "block" }}
                    color={"gradient"}
                  />
                )}
              </div>
            </MediaQuery>
          </div>
        </div>
      </Header>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
      >
        {(styles) => (
          <Paper
            shadow="md"
            style={{
              ...styles,
              width: "100%",
              background:
                "linear-gradient(102.25deg, #0085FF -0.08%, #00B2FF 100%)",
              height: "100vh",
            }}
          >
            <div style={{ padding: 20 }}>{drawerLinks}</div>
          </Paper>
        )}
      </Transition>
    </>
  );
}
