import {
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import emailjs from "emailjs-com";
import './ContactButton.scss'



export default function ContactButton() {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [{ name, email, message }, setState] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        e.target,
        process.env.YOUR_USER_ID
      )
      .then(
        (result) => {
          alert("Your message has been sent!");
          setOpen(false);
        },
        (error) => {
          console.log(error.text);
          setOpen(false);
        }
      );
  };

  return (
    <>
      <IconButton
        size="large"
        sx={{ ml: 2 }}
        onClick={handleClickOpen}
        key="email"
        title='Contact me'
      >
        <AlternateEmailIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>📧 Lest get in touch</DialogTitle>
        <DialogContentText>
            Please, click here and send me an email address so I get in touch
            soon as I can.
        </DialogContentText>
        <form name="sentMessage" validate onSubmit={handleSubmit} className='form_contact'>
            <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Send email</Button>
        </form>
      </Dialog>
    </>
  );
}
