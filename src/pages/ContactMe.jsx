import React from "react";
import { Container, TabContainer } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import '../styles/ContactMe.css'

const ContactMe = () => {

    const { register, handleSubmit, reset } = useForm();

    const defaultValues = { email: "", phone: "", name: "", comments:"" }

    const submit = (data) => {
        swal(
            {
                title:`Hi, ${data.name}`, 
                text:`Reply to your message as soon as possible`, 
                icon: "success", 
                button:"to accept",
                timer: "3000"
            }
            );
            reset(defaultValues);
      }

  return (
    <Container className="conatainer-form">
      <h1>CONTACT</h1>
    <Form onSubmit={handleSubmit(submit)} className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            type="email" 
            required
            placeholder="Enter email" 
            {...register("email")}
        />
        <Form.Text className="text-muted">
        Please enter your email to contact you.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
            type="number" 
            placeholder="Enter number phone" 
            {...register("phone")}
        />
        <Form.Text className="text-muted">
        Please enter your number phone.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            type="text" 
            required
            placeholder="Enter Name" 
            {...register("name")}
        />

      </Form.Group>
      <Form.Label>Comments</Form.Label>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
       
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          {...register("comments")}
        />
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
};

export default ContactMe;
