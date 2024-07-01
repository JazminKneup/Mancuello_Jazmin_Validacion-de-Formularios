import React from 'react';
import './Form.css';

const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? null : 'El correo no es válido';
};

const isRequired = value => (value ? null : 'Este campo es requerido');

const Form = ({ state, dispatch }) => {
  const { firstName, lastName, email, password, confirmPassword } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_VALUE', field: name, payload: value });
    
    let error = isRequired(value);
    if (name === 'email') error = validateEmail(value);
    if (name === 'confirmPassword' && value !== password.value) {
      error = 'Las contraseñas deben coincidir';
    }
    if (name === 'password' && value.length < 8) {
      error = 'La contraseña debe tener al menos 8 caracteres';
    }
    dispatch({ type: 'SET_ERROR', field: name, payload: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        First Name
        <input
          className="form-input"
          name="firstName"
          value={firstName.value}
          onChange={handleChange}
          placeholder="First Name"
        />
      </label>
      {firstName.error && <p className="error">{firstName.error}</p>}
      
      <label>
        Last Name
        <input
          className="form-input"
          name="lastName"
          value={lastName.value}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </label>
      {lastName.error && <p className="error">{lastName.error}</p>}
      
      <label>
        Email
        <input
          className="form-input"
          name="email"
          value={email.value}
          onChange={handleChange}
          placeholder="Email"
        />
      </label>
      {email.error && <p className="error">{email.error}</p>}
      
      <label>
        Password
        <input
          className="form-input"
          name="password"
          type="password"
          value={password.value}
          onChange={handleChange}
          placeholder="Password"
        />
      </label>
      {password.error && <p className="error">{password.error}</p>}
      
      <label>
        Confirm Password
        <input
          className="form-input"
          name="confirmPassword"
          type="password"
          value={confirmPassword.value}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </label>
      {confirmPassword.error && <p className="error">{confirmPassword.error}</p>}
      
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default Form;