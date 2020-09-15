import React from 'react';
import "../styles/Styles.css";
import PDF from "../images/OtterstromResume.pdf"

const Home = () => {
    return (
        <>
            <div className="container">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-auto">
                            <img src={require('../images/Erin300x300.jpg')} alt="Erin Otterstrom" class="img-fluid" />
                        </div>
                        <div class="col" id="textblock">
                            <div class="card-block px-2">
                                <h1 class="card-title">Erin C. Otterstrom</h1>
                                <p class="card-text">I am an enterprising software engineer with skills in JavaScript, React, MongoDB, HTML, and CSS.
                                <br /><br />
                                My previous career as a business analyst gave me experience in researching and resolving customer issues, writing SQL queries for data mining, authoring technical documents, and I.T. project management.
                                <br /><br />
                                I am an enthusiastic team player with a strong work ethic, advanced complex problem-solving skills, and a willingness to take on added responsibility to meet tight deadlines.
                                <br /><br />
                                In the next phase of my career, I want to use my analysis and problem-solving skills to work on the technically challenging facets of backend database applications.
                                <br /><br />
                                    <a href={'https://github.com/ECOtterstrom'}>
                                        <img src={require('../images/GitHub32.png')} alt="GitHub" class="img-fluid" id='icon' />
                                    </a>
                                    <a href={'https://www.linkedin.com/in/erinotterstrom'}>
                                        <img src={require('../images/LinkedIn32.png')} alt="LinkedIn" class="img-fluid" id='icon' />
                                    </a>
                                    <a href={PDF}>
                                        <img src={require('../images/smDownloadPDF.png')} alt="resume" class="img-fluid" id='icon' />
                                    </a>
                                    <a href={'mailto:erinotterstrom@gmail.com'}>
                                        <img src={require('../images/smEmail.png')} alt="email" class="img-fluid" id='icon' />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;



