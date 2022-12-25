import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Auth({ dataUsers, setDataUsers, setUserConnected }) {
  const unique_id = uuid();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (dataUsers.some((x) => x.email === data.email)) {
      dataUsers.map((x) => {
        if (x.email === data.email) {
          if (x.password === data.password) {
            setUserConnected(true);
            navigate("/");
          }
        }
      });
    } else {
      console.log("no find !!!");
    }
  };
  // console.log(watch("email"));

  return (
    <div id="form">
      <img className="logo" src="../../assets/logo.svg" alt="" />
      <form className="form_account" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="input_box">
          <label id="email">
            {" "}
            Email address
            <input
              className="input"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <span className="error_msg">This field is required</span>
            )}
          </label>
        </div>

        <div className="input_box">
          <label id="password">
            {" "}
            Password
            <input
              className="input"
              type='password'
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error_msg">This field is required</span>
            )}
          </label>
        </div>

        <button type="submit">Login to your account</button>
        <p className="redirect_account">
          <span>Don’t have an account?</span>
          <NavLink to="/sign-up">
            <span className="red"> Sign Up</span>
          </NavLink>{" "}
        </p>
      </form>
    </div>
  );
}
