import * as React from "react";
import { Formik, Form, Field } from "formik";
import API from "../../utils/API";
import { createStyles } from "@mantine/core";
import { toast } from "react-toastify";

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

interface AssociationFormValues {
  representativeFirstName: string;
  representativeLastName: string;
  name: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
}

const validateInput = (value) => {
  return !value ? true : false;
};

export const AssociationForm = () => {
  const { classes } = useStyles();

  const initialValues: AssociationFormValues = {
    representativeFirstName: "",
    representativeLastName: "",
    name: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  };

  const sendData = (data) => {
    API.post(
      "/association",
      { data },
      (result) => {
        if (result) {
          toast.success("Votre inscription a été enregistrée avec succès !");
        } else {
          toast.error(
            "L'adresse email que vous avez renseigné est déjà utilisée"
          );
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
              <div>
                <label className={classes.label}>Représantant légal *</label>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Field
                    validate={validateInput}
                    id="representativeFirstName"
                    name="representativeFirstName"
                    placeholder="Prénom"
                    className={classes.input}
                    style={
                      errors.representativeFirstName &&
                      touched.representativeFirstName
                        ? {
                            width: "48%",
                            boxShadow: "0 0 5px red",
                          }
                        : { width: "48%" }
                    }
                  />
                  <Field
                    validate={validateInput}
                    id="representativeLastName"
                    name="representativeLastName"
                    placeholder="Nom"
                    className={classes.input}
                    style={
                      errors.representativeLastName &&
                      touched.representativeLastName
                        ? {
                            width: "48%",
                            boxShadow: "0 0 5px red",
                          }
                        : { width: "48%" }
                    }
                  />{" "}
                </div>
              </div>
              <div className={classes.form}>
                <label className={classes.label}>Nom d'association *</label>
                <Field
                  validate={validateInput}
                  id="name"
                  name="name"
                  placeholder="Le nom de votre association"
                  className={classes.input}
                  style={
                    errors.name && touched.name
                      ? {
                          boxShadow: "0 0 5px red",
                        }
                      : {}
                  }
                />
              </div>
              <div className={classes.form}>
                <label className={classes.label}>Code postal *</label>
                <Field
                  validate={validateInput}
                  id="zipCode"
                  name="zipCode"
                  placeholder="80100"
                  className={classes.input}
                  style={
                    errors.zipCode && touched.zipCode
                      ? {
                          boxShadow: "0 0 5px red",
                        }
                      : {}
                  }
                />
              </div>
              <div className={classes.form}>
                <label className={classes.label}>Téléphone *</label>
                <Field
                  validate={validateInput}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Votre téléphone"
                  className={classes.input}
                  style={
                    errors.phoneNumber && touched.phoneNumber
                      ? {
                          boxShadow: "0 0 5px red",
                        }
                      : {}
                  }
                />
              </div>
              <div className={classes.form}>
                <label className={classes.label}>Adresse email *</label>
                <Field
                  validate={validateInput}
                  id="email"
                  name="email"
                  placeholder="Votre adresse email"
                  className={classes.input}
                  style={
                    errors.email && touched.email
                      ? {
                          boxShadow: "0 0 5px red",
                        }
                      : {}
                  }
                />
              </div>
              <div className={classes.buttonContainer}>
                <button
                  className={classes.button}
                  type="submit"
                  onClick={() =>
                    validateForm().then((result) =>
                      Object.keys(result).length
                        ? toast.error(
                            "Veuillez remplir tous les champs du formulaire"
                          )
                        : null
                    )
                  }
                >
                  Se pré-inscrire
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
