import React from 'react';
import '../css/form.css';
import { signin } from '../services/signInService';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './common/Logo';
import Input from './common/Input';
import { useForm } from 'react-hook-form';
import Button from './common/Button';

toast.configure();
function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { user } = await signin(data);
      dispatch(setUser(user));
      history.replace('/');
    } catch ({ response }) {
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <Logo />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <Input
          name="email"
          label="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          label="password"
          ref={register({ required: true })}
          error={errors.password}
        />

        <Button
          $style={{ width: '100%' }}
          type="submit"
          disabled={isSubmitting}
        >
          Sign In
        </Button>
        <span>New to Amazon?</span>
        <Link to="/signup">
          <Button $style={{ width: '100%' }} secondary>
            Create your Amazon account
          </Button>
        </Link>
      </form>
    </>
  );
}

export default SignIn;
