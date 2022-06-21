import { FooterApp } from "./Footer/Footer";
import { HeaderMenu } from "./Headers/HeaderMenu";
import { AppShell, createStyles } from "@mantine/core";
import getLinks from "../Utils/Link";

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
  const links = getLinks();

  return (
    <>
      <section className="hero-section hero-section-bg section-shaped">
        <div className="shape shape-style-1 shape-grey">
          <span className="span-100"></span>
          <span className="span-50"></span>
          <span className="span-50"></span>
          <span className="span-75"></span>
          <span className="span-100"></span>
          <span className="span-75"></span>
          <span className="span-50"></span>
          <span className="span-100"></span>
          <span className="span-50"></span>
          <span className="span-100"></span>
          <span className="span-75"></span>
          <span className="span-50"></span>
          <span className="span-100"></span>
          <span className="span-50"></span>
          <span className="span-100"></span>
        </div>
        <AppShell
          className={classes.container}
          padding={0}
          header={<HeaderMenu links={links} />}
          footer={<FooterApp links={links} />}
        >
          <div className={classes.main}>{children}</div>
        </AppShell>
      </section>
    </>
  );
}
