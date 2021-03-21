import { Button, Form, Modal, Alert } from 'react-bootstrap';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError('Invalid login');
    }
  };

  return (
    <>
      <div onClick={openForm} className="btn btn-outline-secondary mx-2">
        Login
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
