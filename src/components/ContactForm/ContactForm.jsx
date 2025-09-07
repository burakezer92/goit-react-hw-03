import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";
import * as Yup from "yup";

function ContactForm(props) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className="form">
        <label className="label" htmlFor={nameFieldId}>
          name
        </label>
        <Field className="input" type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />

        <label className="label" htmlFor={numberFieldId}>
          number
        </label>
        <Field
          className="input"
          type="number"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
