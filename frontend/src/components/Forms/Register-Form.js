import React from "react";
import { Form, FormGroup, FormInput, Button} from "shards-react";

export default function RegisterForm() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <FormInput id="Email" />
        <label htmlFor="password">Password</label>
        <FormInput id="Password" />
        <label htmlFor="fname">First Name</label>
        <FormInput id="FName" />
        <label htmlFor="lname">Last Name</label>
        <FormInput id="LName" />
      </FormGroup>
      <Button className="pad-top-min">Submit</Button>
    </Form>
  );
}
