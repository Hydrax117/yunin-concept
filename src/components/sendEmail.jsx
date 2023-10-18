import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_gv0ys6o",
        "template_xdib0ea",
        form.current,
        "NQNp4getvBlU8KslA"
      )
      .then(
        (result) => {
          toast.success("email was sent successfully");
          setInterval(() => {
            window.location.reload();
          }, 4000);
          // show the user a success message
        },
        (error) => {
          // show the user an error
          toast.error("email was not sent try again");
        }
      );
  };

  return (
    <>
      <div>
        <ToastContainer style={{ marginTop: "25%" }} />
      </div>
      <form ref={form} onSubmit={sendEmail} method="POST">
        <label>Name</label>
        <input className="form-control" type="text" name="name" required />
        <label>Subject</label>
        <input type="text" className="form-control" name="subject" required />
        <label>Email</label>
        <input type="email" className="form-control" name="email" required />
        <label>Message</label>
        <textarea name="message" className="form-control" required />
        <input className="btn btn-primary mt-2" type="submit" value="Send" />
      </form>
    </>
  );
};

export default EmailContactForm;
