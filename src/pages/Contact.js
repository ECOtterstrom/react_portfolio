import React from 'react';
import "../styles/Styles.css";

const Contact = () => {
    return (
        <div className="container content">
            <section id="contact-info" className="contact-info">
                <h1><b>Contact</b></h1>
                <form>
                    <div className="form-group row">
                        <label for="inputName3" className="col-sm-2 form-control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="name" className="form-control" id="inputName3" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 form-control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputMessage3" className="col-sm-2 form-control-label">Message</label>
                        <div className="col-sm-10">
                            <input type="message" className="form-control" id="inputMessage2" placeholder="Message" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-info">Submit</button>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Contact;