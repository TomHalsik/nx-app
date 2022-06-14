import React from "react";
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  MediaQuery,
} from "@mantine/core";
import {
  BrandTwitter,
  BrandLinkedin,
  BrandInstagram,
  BrandFacebook,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 64,
    paddingTop: 64,
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    background: "#53389E",
    flexShrink: 0,
  },

  logo: {
    maxWidth: "316px",
    overflow: "hidden",

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 40,
    overflow: "hidden",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "32px",
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
  },
  informationContainer: {
    paddingTop: 40,
    fontWeight: 500,
    fontSize: 13,
    color: theme.white,
  },
}));

interface FooterLinksProps {
  links: {
    link: string;
    label: string;
  }[];
}

export function FooterApp({ links }: FooterLinksProps) {
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
    <footer className={classes.footer}>
      <Container>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src="/img/logo.png" />
        </div>
      </Container>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Container>
          <div className={classes.linkContainer}>{items}</div>
        </Container>
      </MediaQuery>
      <Container className={classes.informationContainer}>
        <div>
          Jouer comporte des risques : endettement, isolement, dépendance.
        </div>
        <div>contact@assopassion.com</div>
      </Container>
      <div className={classes.afterFooter}>
        <Group spacing={0} className={classes.social} position="center" noWrap>
          <ActionIcon size="lg" variant="transparent">
            <BrandTwitter size={20} color="white" />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <BrandLinkedin size={20} color="white" />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <BrandFacebook size={20} color="white" />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <BrandInstagram size={20} color="white" />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
