import { Formik } from "formik";
import { User } from "../hooks/useQuery";
import Input from "./Input";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required(),
  name: yup.string().required(),
  phone: yup.string().required(),
});

export default function Form(props: {
  onSubmit: (vals: Omit<User, "id">) => Promise<any>;
}) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      validationSchema={schema}
      initialValues={{
        email: "",
        name: "",
        phone: "",
      }}
    >
      {(f) => (
        <>
        <label>Email</label>
          <Input
            name=""
            value={f.values.email}
            onChange={f.handleChange("email")}
          />
          <label>Imie i Nazwisko</label>
          <Input
            name=""
            value={f.values.name}
            onChange={f.handleChange("name")}
          />
          <label>Numer Telefonu</label>
          <Input
            name=""
            value={f.values.phone}
            onChange={f.handleChange("phone")}
          />
          <button
          onClick={() => f.handleSubmit()}
          style={{ display: "block", margin: "auto" }}
            >
              Submit
          </button>
        </>
      )}
    </Formik>
  );
}
