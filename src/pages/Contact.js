import React from 'react';
import "../styles/Styles.css";
import PDF from "../images/OtterstromResume.pdf"

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col" id="textblock">
                            <div className="card-block px-2">
                                <h1 className="card-title">Contact Me</h1>
                                <table className="table" id="card-text">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Location: </th>
                                            <td>Cottonwood Heights, UT</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone Number:</th>
                                            <td>(801)898-6834</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email Address:</th>
                                            <td><a href={'mailto:erinotterstrom@gmail.com'}>erinotterstrom@gmail.com </a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Profiles:</th>
                                            <td>
                                                <a href={'https://github.com/ECOtterstrom'}>
                                                    <img src={require('../images/GitHub32.png')} alt="GitHub" className="img-fluid" id='icon' />
                                                </a>
                                                <a href={'https://www.linkedin.com/in/erinotterstrom'}>
                                                    <img src={require('../images/LinkedIn32.png')} alt="LinkedIn" className="img-fluid" id='icon' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Resume:</th>
                                            <td>
                                                <a href={PDF}>
                                                    <img src={require('../images/smDownloadPDF.png')} alt="resume" className="img-fluid" id='icon' />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default Contact;

