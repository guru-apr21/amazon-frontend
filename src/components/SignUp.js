import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from 'input-hook';
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
      return 'User already exists';
    }
  };
  //Hello world

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
          register={register}
          error={errors.firstName}
          condition={{ required: 'First Name is required' }}
        />
        <Input
          name="lastName"
          label="Last Name"
          register={register}
          error={errors.lastName}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          condition={{ validate: validateEmail }}
          onBlur={() => trigger('email')}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password}
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
