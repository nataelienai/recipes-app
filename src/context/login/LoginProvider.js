import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState({ disabled: true });
  const [mealsToken, setmealsToken] = useState(1);
  const [cocktailsToken, setcocktailsToken] = useState(1);

  const loginContextValue = {
    email,
    setEmail,
    password,
    setPassword,
    btn,
    setBtn,
    mealsToken,
    setmealsToken,
    cocktailsToken,
    setcocktailsToken,
  };

  return (
    <LoginContext.Provider value={ loginContextValue }>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default LoginProvider;
