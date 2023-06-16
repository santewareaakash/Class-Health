import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";



export const ContactUs = (props) => {
  const formCtrl = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
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
          toast("Your Email has reached us successfully");
          props.handleClose()
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          props.handleClose()
        }
      );
  };



  return (
    <>
      <form ref={formCtrl} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" />
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" />
        <label htmlFor="user_mobile">Mobile</label>
        <input type="tel" name="user_mobile" id="user_mobile" />
        <label htmlFor="user_country">Country</label>
        <input type="tel" name="user_country" id="user_country" />
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        {/* <input type="submit" value="Send" /> */}
        <button className="common-button w-100">Send</button>
      </form>
    </>
  );
};
