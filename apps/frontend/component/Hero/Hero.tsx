import { createStyles, Image, Container } from "@mantine/core";
import CustomButton from "../Buttons/CustomButton";

const useStyles = createStyles((theme) => ({
  hero: {
    background:
      "linear-gradient(0deg, rgb(205 205 205 / 1%), rgb(95 76 255 / 60%))",
    height: "100vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  heroText: {
    textAlign: "center",
    color: "white",
    marginTop: -50,
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 32,
    paddingTop: 40,
    overflow: "hidden",
  },
  logo: {
    maxWidth: "357px",
    overflow: "hidden",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    overflow: "hidden",
    marginTop: 32,
    width: "-webkit-fill-available",
    fontSize: 18,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
}));

export function HomeHero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.heroText}>
        <div className={classes.logoContainer}>
          <Image className={classes.logo} src="/img/logo.png" alt="hero" />
        </div>
        <Container size={"sm"}>
          <h1 style={{ padding: " 0px 5px" }}>
            Footedia est un service de pronostics foot gratuit générés par
            intelligence artificielle.
          </h1>
        </Container>
        <Container size={"sm"} className={classes.buttonContainer}>
          <>
            <CustomButton
              title={"Pronostic"}
              link={"/"}
              variant={"gradient"}
              color={"gradient"}
              style={{ width: "-webkit-fill-available" }}
            />
            <CustomButton
              title={"Résultat"}
              link={"/"}
              variant={"white"}
              color={"white"}
              style={{ width: "-webkit-fill-available" }}
            />
          </>
        </Container>
      </div>
    </div>
  );
}
