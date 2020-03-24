import React from "react";
import { Form, FormGroup, FormInput, Button} from "shards-react";

export default function LoginForm() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <FormInput id="Email" />
        <label htmlFor="password">Password</label>
        <FormInput id="Password" />
      </FormGroup>
      <Button className="pad-top-min">Submit</Button>
    </Form>
  );
}
