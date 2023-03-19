/* eslint-disable consistent-return */

import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Alert from "./Alert";

const fields = loginFields;
const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.id] = "";
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state } = useLocation();

  let { error, user } = useSelector((state) => state.login);

  const { login } = useContext(UserContext);
  const onSubmit = (data) => {
    user = {
      email: "kevin",
      password: "Rukundo1",
      name: "kevin",
      role: "superAdmin",
    };
    login({ user: { ...user, name: user.name } });
    navigate("/dashboard/add");

    // dispatch(loginUser(data));
  };

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        {error && (
          <Alert message={error.payload} heading="Error" variant="error" />
        )}
        {/* {isAuth && (
          <Alert
            message="Login successful"
            heading="Success"
            variant="success"
          />
        )} */}
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};

export default Login;
