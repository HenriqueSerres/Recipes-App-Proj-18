import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Validations() {
    const SIX = 6;
    const passwordValidation = password.length > SIX;
    const emailValidation = email.includes('@') && email.includes('.com');
    const validation = passwordValidation && emailValidation;
    return validation;
  }

  const localStorageEmail = {
    email,
  };

  return (
    <form
      onSubmit={ (e) => e.preventDefault() }
    >

      <input
        name="email"
        label="email"
        type="email"
        id="email"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        required
        placeholder="email@provider.com"
      />

      <input
        name="password"
        label="password"
        type="password"
        id="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        required
        placeholder="Must have a length higher than 6"
      />

      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ !Validations() }
        onClick={ () => {
          localStorage.setItem('mealsToken', 1);
          localStorage.setItem('cocktailsToken', 1);
          localStorage.setItem('user', JSON.stringify(localStorageEmail));
        } }
      >
        Enter
      </button>

    </form>
  );
}

export default Login;
