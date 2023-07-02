import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
    setName, selectName, setEmail, selectEmail, setSubject, selectSubject, setMessage, selectMessage, setDisabled, selectDisabled, 
    setAlert, selectAlert 
    } from '../features/contact/contactSlice';
import '../assets/styles/contacts.scss';
import SubscribeModal from '../components/SubscribeModal';

const Contacts = () => {
    // Hooks definitions
    const dispatch = useDispatch();
    const contactName = useSelector(selectName);
    const contactEmail = useSelector(selectEmail);
    const contactSubject = useSelector(selectSubject);
    const contactMessage = useSelector(selectMessage);
    const contactDisabled = useSelector(selectDisabled);
    const contactAlert = useSelector(selectAlert);

    // Constants definitions
    const regex = /\@/; // Used to validate email address

    // Define functions for user actions
    const onNameInput = (keystroke) => {       
        dispatch(setName(keystroke.target.value)); // Save inputted value as "contact.name" in the "Contact" slice
    };
    const onEmailInput = (keystroke) => {
        if (keystroke === '') {
            dispatch(setAlert(null))
        } else if (!regex.test((keystroke.target.value))) {
            dispatch(setAlert('Please enter a valid email address'))
        } else {
            dispatch(setAlert(null))
        }
        dispatch(setEmail(keystroke.target.value)); // Save inputted value as "contact.email" in the "Contact" slice
    };
    const onSubjectInput = (keystroke) => {
        dispatch(setSubject(keystroke.target.value)); // Save inputted value as "contact.subject" in the "Contact" slice
    };
    const onMessageInput = (keystroke) => {
        if (keystroke === '') {
            dispatch(setAlert(null))
        } else if (keystroke !== '' && keystroke.target.value.trim().length <= 10) {
            dispatch(setAlert('Your message must be at least 10 characters'))
        } else {
            dispatch(setAlert(null))
        }
        dispatch(setMessage(keystroke.target.value)); // Save inputted value as "contact.message" in the "Contact" slice
    };
    const onFormSubmit = (click) => {
        click.preventDefault();
        console.log("This works but may not send the email before it's connected to the back-end!");
        sendEmail();
    }

    // Disabling submit button logic
    const validateDisabling = () => { // True = disabled, false = enabled
        if (contactName !=='' && regex.test((contactEmail)) && contactSubject !== '' &&
            contactMessage !=='' && contactMessage.trim().length > 10 ) 
        {dispatch(setDisabled(false));}
    }; 
    useEffect(() => {
        validateDisabling();
    }, [contactName, contactEmail, contactSubject, contactMessage]);

    // Call API to send email
    const sendEmail = () => {
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify({
                name: contactName,
                email: contactEmail,
                title: contactSubject,
                body: contactMessage,
                uniqueMessageId: Math.random().toString(36).slice(2),
                }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=> {
            if (response.status === 'success') {
                alert("Thank you for contacting us. We will get back to you shortly.");
                this.resetForm()
            } else if(response.status === 'fail') {
                alert("Message failed to send.")
            };
        });
    };

    return (
    <>
    
    <header>
    <h1 className="text-center mt-5 mb-5"> Get in touch </h1>
    </header>

    {/* Newsletter subscription bell button with Bootstrap modal control attributes*/}
    <div className="btn-special btn--bell" data-bs-toggle="modal" data-bs-target="#subscriptionModal">
        <span className="btn-special-icon"><i className="fa fa-bell fa-2x"></i></span>
        <span className="btn-special-topFakeBorders"></span>
        <div className="btn-special-bottomAnim btn-special-anim"></div>
        <div className="btn-special-sideAnim btn-special-anim"></div>
        <div className="btn-special-topAnim btn-special-anim"></div>
        <span className="vcontent">Subscribe to our newsletter</span>
    </div>
    <SubscribeModal/>

    {/* Contact Form / Material Design for Bootstrap */}
    <section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">We look forward to our conversation</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours.</p>

    {/* Email message submit form */}
    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" onInput={onNameInput} id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">Your name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" onInput={onEmailInput} id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" onInput={onSubjectInput} id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                            <textarea type="text" onInput={onMessageInput} id="message" name="message" rows="2" 
                            className="form-control md-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>
                    </div>
                </div>
            <div className="d-grid gap-2 col-3 mx-auto mt-5 mb-3">
                <button onClick={onFormSubmit} disabled={contactDisabled} className="btn btn-primary" type="submit">Submit message</button>
            </div>
            </form>
            {/* Show <div> with user alert if alert is not null */}
            {contactAlert && <div className="status">{contactAlert}</div>}
        </div>

        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@notspam.com</p>
                </li>
            </ul>
        </div>
    </div>

    </section>

    </>
    );
}
 
export default Contacts;