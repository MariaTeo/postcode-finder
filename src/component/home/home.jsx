import React from "react";
import { TextField } from "formik-material-ui";
import { Field, Formik } from "formik";
import { Button, Typography } from "@material-ui/core";
import { navigate } from "@reach/router";

import { initialValuesForm, postcodeScheme } from "./home-form";
import { AppWrapper, Row, Styledfrom } from "./home.styled";

const Home = () => {
  const onSubmit = (values) => {
    navigate(`/find/${values.postcode}`);
  };

  return (
    <AppWrapper>
      <Formik
        initialValues={initialValuesForm}
        validationSchema={postcodeScheme}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Styledfrom>
            <Row>
              <Typography variant="h3">Postcode Finder</Typography>
            </Row>
            <Row>
              <Typography variant="h5">Please type in a postcode</Typography>
            </Row>
            <Field
              component={TextField}
              id="postcode"
              label="search"
              name="postcode"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid}
            >
              Find Postcode
            </Button>
          </Styledfrom>
        )}
      </Formik>
    </AppWrapper>
  );
};

export default Home;
