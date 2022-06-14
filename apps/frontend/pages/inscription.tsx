import type { NextPage } from "next";
import Head from "next/head";
import { AssociationForm } from "../component/Forms/association-form";
import { createStyles, Container } from "@mantine/core";
import { DefaultLayout } from "../component/Layouts/Default";

const useStyles = createStyles((theme, _params, getRef) => ({
  inscriptionLayout: {
    background: "linear-gradient(102.25deg, #FFC700 -0.08%, #FFAB00 100%)",
    minHeight: "100vh",
    textAlign: "center",
    paddingBottom: "50px",
  },
  logo: {
    maxWidth: "330px",
    width: "100%",
    height: "auto",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "38px",
    lineHeight: "46px",
    color: "#713B12",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Inscription association</title>
      </Head>
      <DefaultLayout>
        <div className={classes.inscriptionLayout}>
          <img className={classes.logo} src="/img/logo.png" />
          <h1 className={classes.title}>Ouverture prochaine</h1>
          <Container size={360}>
            <AssociationForm />
          </Container>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
