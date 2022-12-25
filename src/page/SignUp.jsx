import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

export default function SignUp({ dataUsers, setDataUsers, setUserConnected }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const unique_id = uuid();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const copyDataUsers = [...dataUsers];
    const id = unique_id;
    const email = data.signEmail;
    const password = data.signPassword;

    if (dataUsers.some((x) => x.email === email)) {
      return;
    } else {
      copyDataUsers.push({ email: email, password: password, id: id });
      setDataUsers(copyDataUsers);
      setUserConnected(true)
      navigate("/");
    }

    console.log(dataUsers);

    // console.log(data);
  };

  // console.log(watch("email"));

  return (
    <div id="form">
      <img className="logo" src="../../assets/logo.svg" alt="" />
      <form className="form_account" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <div className="input_box">
          <label id="signEmail">
            {" "}
            Email address
            <input
              className="input"
              type="text"
              aria-label="email"
              {...register("signEmail", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </label>

          {errors.signEmail && (
            <span className="error_msg">Put an valid email</span>
          )}
        </div>

        <div className="input_box">
          <label id="signPassword">
            {" "}
            Password
            <input
              type='password'
              className="input"
              {...register("signPassword", { required: true })}
            />
            {errors.signPassword && (
              <span className="error_msg">This field is required</span>
            )}
          </label>
        </div>

        <div className="input_box">
          <label id="signRepeatPassword">
            {" "}
            Repeat password
            <input
              type='password'
              className="input"
              {...register("signRepeatPassword", { required: true })}
            />
            {errors.signRepeatPassword && (
              <span className="error_msg">This field is required</span>
            )}
          </label>
        </div>

        <button type="submit">Create account</button>
        <p className="redirect_account">
          <span>Already have an account?</span>
          <NavLink to="/auth">
            <span className="red"> Login</span>
          </NavLink>{" "}
        </p>
      </form>
    </div>
  );
}
