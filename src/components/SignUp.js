import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from './common/Input';
import { validateEmailId } from '../services/signInService';
import { signUpUser } from '../reducers/userReducer';
import Logo from './common/Logo';
import Button from './common/Button';

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    trigger,
    formState: { isSubmitting },
  } = useForm();

  const validateEmail = async (value) => {
    try {
      await validateEmailId(value);
      return true;
    } catch (error) {
      return false;
    }
  };

  const onSubmit = (data, e) => {
    dispatch(signUpUser(data));
    e.target.reset();
    history.replace('/');
  };

  return (
    <>
      <Logo />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <Input
          label="First Name"
          name="firstName"
          ref={register({ required: true, minLength: 3 })}
          error={errors.firstName}
          min={3}
        />
        <Input
          name="lastName"
          label="Last Name"
          ref={register({ required: true, minLength: 2 })}
          error={errors.lastName}
          min={2}
        />
        <Input
          label="Email"
          name="email"
          ref={register({
            required: true,
            pattern: /^\S+@\S+$/i,
            validate: validateEmail,
          })}
          error={errors.email}
          onBlur={() => trigger('email')}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          ref={register({ required: true, minLength: 8 })}
          error={errors.password}
          min={8}
        />
        <Button
          $style={{ width: '100%' }}
          type="submit"
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
        <span>
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Sign in
          </Link>
        </span>
      </form>
    </>
  );
}

export default SignUp;
