import { FooterApp } from "./Footer/Footer";
import { HeaderMenu } from "./Headers/HeaderMenu";
import { AppShell, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  main: { flexGrow: 1, minHeight: "100vh" },
}));

export function DefaultLayout({ children }) {
  const { classes } = useStyles();
  const links = [
    { link: "/", label: "Lotos" },
    { link: "/", label: "Qui sommes-nous ?" },
    { link: "/", label: "Asso News" },
    { link: "/", label: "Associations" },
    { link: "/", label: "Boutique Asso Passion" },
  ];

  return (
    <AppShell
      className={classes.container}
      padding={0}
      header={<HeaderMenu links={links} />}
      footer={<FooterApp links={links} />}
    >
      <div className={classes.main}>{children}</div>
    </AppShell>
  );
}
