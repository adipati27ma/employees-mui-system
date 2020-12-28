import { React } from "react";
import { Grid } from "@material-ui/core";

import { useForm, Form } from "components/useForm";
import Controls from "components/controls/Controls";
import * as employeeService from "services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const validate = () => {
    let temp = {};
    values.fullName
      ? (temp.fullName =
          values.fullName.length >= 3 ? "" : "Minimum 3 characters required.")
      : (temp.fullName = values.fullName ? "" : "This field is required.");

    temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email not valid.";

    values.mobile
      ? !isNaN(values.mobile)
        ? (temp.mobile =
            String(values.mobile).length > 9
              ? ""
              : "Minimum 10 number required.")
        : (temp.mobile = "Please enter a number.")
      : (temp.mobile = "This field is required.");

    temp.departmentId =
      values.departmentId.length != 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const { values, errors, setErrors, handleInputChange } = useForm(
    initialFValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("testing...");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors ? errors.fullName : null}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors ? errors.email : null}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors ? errors.mobile : null}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            option={employeeService.getDepartmentCollection()}
            error={errors ? errors.departmentId : null}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
