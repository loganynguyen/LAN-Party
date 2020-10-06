import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap';

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("submitted", data);

    // This is the object we're sending through
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password
    };

    console.log("PAYLAOD", payload);
  }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="First Last"
          name="firstName"
          aria-describedby="firstNameReq"
          ref={register({ required: true })} />
        {errors.firstName && <Form.Text className="text-danger" id="firstNameReq">Required</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="First Last"
          name="lastName"
          aria-describedby="lastNameReq"
          ref={register({ required: true })} />
        {errors.lastName && <Form.Text className="text-danger" id="lastNameReq">Required</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          name="email"
          aria-describedby="emailReq"
          ref={register({ required: true })} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        {errors.email && <Form.Text className="text-danger" id="emailReq">Required</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="12345 Gorges St"
          name="address"
          aria-describedby="addressReq"
          ref={register({ required: true })} />
          <Form.Text className="text-muted">
            We'll never share your address with anyone else.
          </Form.Text>
          {errors.address && <Form.Text className="text-danger" id="addressReq">Required</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          name="password"
          aria-describedby="passwordReq"
          ref={register({ required: true, minLength: 8 })} />
          {errors.password && errors.password.type === "required" && (
            <Form.Text className="text-danger" id="passwordReq">Required</Form.Text>)}
          {errors.password && errors.password.type === "minLength" && (
            <Form.Text className="text-danger" id="passwordReq">Minimum 8 characters</Form.Text>)}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Signup;