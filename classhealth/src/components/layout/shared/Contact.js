import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const ContactUs = (props) => {
  const [inputValue, setInputValue] = useState({
    user_name: "",
    user_email: props.email || "",
    user_mobile: "",
    user_country: "",
  });
  const [formError, setFormError] = useState({
    user_name: false,
    user_email: false,
    user_mobile: false,
    user_country: false,
  });

  const formCtrl = useRef();

  const changeInputHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    setFormError({
      user_name: false,
      user_email: false,
      user_mobile: false,
      user_country: false,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const nameRegex = new RegExp(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    );
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const mobileRegex = new RegExp(/^\+*[0-9]+$/);

    if (
      inputValue.user_name.trim().length === 0 ||
      !nameRegex.test(inputValue.user_name)
    ) {
      setFormError({ ...formError, user_name: true });
    } else if (
      inputValue.user_email.trim().length === 0 ||
      !emailRegex.test(inputValue.user_email)
    ) {
      setFormError({ ...formError, user_email: true });
    } else if (
      inputValue.user_mobile.trim().length === 0 ||
      !mobileRegex.test(inputValue.user_mobile)
    ) {
      setFormError({ ...formError, user_mobile: true });
    } else if (
      inputValue.user_country.trim().length === 0 ||
      !nameRegex.test(inputValue.user_country)
    ) {
      setFormError({ ...formError, user_country: true });
      return;
    } else {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_EMAILJS_SERVICEID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`,
          formCtrl.current,
          `${process.env.REACT_APP_EMAILJS_USERID}`
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Your Email has reached us successfully");
            props.handleClose();
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            props.handleClose();
          }
        );
    }
  };

  return (
    <>
      <form ref={formCtrl} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          value={inputValue?.user_name}
          onChange={changeInputHandler}
        />
        <p style={{ color: "red" }}>
          {formError?.user_name && "Please enter your name"}
        </p>
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          value={inputValue?.user_email}
          onChange={changeInputHandler}
        />
        <p style={{ color: "red" }}>
          {formError?.user_email && "Please enter valid email"}
        </p>
        <label htmlFor="user_mobile">Mobile</label>
        <input
          type="tel"
          name="user_mobile"
          id="user_mobile"
          value={inputValue?.user_mobile}
          onChange={changeInputHandler}
        />
        <p style={{ color: "red" }}>
          {formError?.user_mobile && "Please enter valid contact number"}
        </p>
        <label htmlFor="user_country">Country</label>
        <input
          type="text"
          name="user_country"
          id="user_country"
          value={inputValue?.user_country}
          onChange={changeInputHandler}
        />
        <p style={{ color: "red" }}>
          {formError?.user_country && "Please enter your country"}
        </p>
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        <button className="common-button w-100">Send</button>
      </form>
    </>
  );
};
