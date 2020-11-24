import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import { validateEmailId } from '../services/signInService';
import { signUpUser } from '../reducers/userReducer';

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
    <div className="signin">
      <Link to="/">
        <img
          className="signin__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="signin__border">
        <h1>Sign Up</h1>
        <form className="sigin__form" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            name="firstName"
            className="sigin__input"
            ref={register({ required: true, minLength: 3 })}
          />
          <ErrorMessage label={'First Name'} error={errors.firstName} min={3} />

          <label>Last Name</label>
          <input
            name="lastName"
            className="sigin__input"
            ref={register({ required: true, minLength: 2 })}
          />
          <ErrorMessage label={'Last Name'} error={errors.lastName} min={2} />

          <label>Email</label>
          <input
            name="email"
            className="sigin__input"
            ref={register({
              required: true,
              pattern: /^\S+@\S+$/i,
              validate: validateEmail,
            })}
            onBlur={() => trigger('email')}
          />
          <ErrorMessage label={'Email'} error={errors.email} />
          <label>Password</label>
          <input
            name="password"
            className="sigin__input"
            type="password"
            ref={register({ required: true, minLength: 8 })}
          />
          <ErrorMessage label={'Password'} error={errors.password} min={8} />

          <button disabled={isSubmitting} type="submit">
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: '10px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
