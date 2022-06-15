import * as React from "react";
import { Formik, Form, Field } from "formik";
import API from "../../utils/API";
import { createStyles } from "@mantine/core";
import { toast } from "react-toastify";
import { useState } from "react";
import CustomButton from "../Buttons/CustomButton";

interface PlayerFormValues {
  email: string;
  password: string;
}

const validateInput = (value) => {
  return !value ? true : false;
};

const validatePassword = (value: string) => {
  if (!value) return true;
  return value.length < 8 ? true : false;
};

export const InscriptionForm = () => {
  const { classes } = useStyles();
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues: PlayerFormValues = {
    email: "",
    password: "",
  };

  const valideAllForm = (validateForm: any) => {
    setIsSubmit(true);
    validateForm().then((result: object) =>
      Object.keys(result).length
        ? toast.error("Veuillez remplir tous les champs du formulaire")
        : null
    );
  };

  const sendData = (data: any) => {
    API.post(
      "/user",
      { data },
      (result: any) => {
        console.log("REsult", result);
        if (result) {
          toast.success("Votre inscription a été enregistrée avec succès !");
        } else {
          toast.error("L'adresse email est déjà utilisée");
        }
      },
      null
    );
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          sendData(values);
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, validateForm }) => (
          <Form>
            <div>
              <div className={classes.form}>
                <label className={classes.label}>Adresse email *</label>
                <Field
                  validate={validateInput}
                  id="email"
                  name="email"
                  placeholder="Votre adresse email"
                  className={classes.input}
                  style={
                    errors.email && (touched.email || isSubmit)
                      ? {
                          boxShadow: "0 0 5px red",
                        }
                      : {}
                  }
                />
              </div>
              <div className={classes.form}>
                <label className={classes.label}>Mot de passe *</label>
                <Field
                  validate={validatePassword}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Votre mot de passe"
                  className={classes.input}
                  style={
                    errors.password && (touched.password || isSubmit)
                      ? {
                          boxShadow: "0 0 5px red",
                        }
                      : {}
                  }
                />
              </div>
              <div className={classes.buttonContainer}>
                <CustomButton
                  onClick={() => valideAllForm(validateForm)}
                  variant={"gradient"}
                  color={"gradient"}
                  title={"S'inscrire"}
                  type={"submit"}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const useStyles = createStyles(() => ({
  label: {
    textAlign: "left",
    display: "block",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#344054",
    paddingBottom: "6px",
  },
  input: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 14px",
    gap: "8px",
    background: "#FFFFFF",
    border: "1px solid #D0D5DD",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    borderRadius: "8px",
    flex: "none",
    order: 1,
    alignSelf: "stretch",
    flexGrow: 0,
    width: "100%",
  },
  form: {
    marginTop: "20px",
    textAlign: "left",
  },
  button: {
    background: "#32D583",
    boxShadow: "0px 2px 0px #0B6035",
    borderRadius: "8px",
    color: "#FFFFFF",
    width: "100%",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "20px",
    padding: "12px 0px",
    cursor: "pointer",
    border: "none",
    transition: "all ease .3s",
    "&:hover": {
      background: "#32D503",
      transition: "all ease .3s",
    },
  },
  buttonContainer: {
    paddingTop: "24px",
  },
}));
