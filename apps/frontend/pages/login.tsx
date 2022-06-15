import type { NextPage } from "next";
import Head from "next/head";
import { AssociationForm } from "../component/Forms/association-form";
import { createStyles, Container, Center } from "@mantine/core";
import { DefaultLayout } from "../component/Layouts/Default";
import { ConnexionForm } from "../component/Forms/connexion-form";

const useStyles = createStyles((theme, _params, getRef) => ({
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
        <title>Connexion</title>
      </Head>
      <DefaultLayout>
        <Center>
          <img className={classes.logo} src="/img/logo.png" />
        </Center>
        <Center>
          <h1 className={classes.title}>Connexion</h1>
        </Center>

        <Container size={360}>
          <ConnexionForm />
        </Container>
      </DefaultLayout>
    </>
  );
};

export default Home;
