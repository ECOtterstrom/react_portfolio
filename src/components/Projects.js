import React from 'react';
import "../styles/Styles.css";

const Projects = () => {
    return (
        <div className="container">
            <section id="portfolio-info" className="portfolio-info">
                <h1><b>Portfolio</b></h1>
                <table className="table" id="card-text">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <div className="card" >
                                    <img className="card-img-top" src={require('../images/TruckDuVin.jpg')} alt="Food Truck" />
                                    <div className="card-body">
                                        <h4 className="card-title">Food Truck Website</h4>
                                        <p className="card-text" id="notbold">A website for a small wine & cheese food truck business created as a group project.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="https://ecotterstrom.github.io/wnctruck/" className="btn btn-success">View Project</a>
                                    </div>
                                </div>
                            </th>
                            <td>
                                <div className="card">
                                    <img className="card-img-top" src={require('../images/UtahViews2.jpg')} alt="Utah Views" />
                                    <div className="card-body">
                                        <h4 className="card-title">Utah Views</h4>
                                        <p className="card-text">An app designed for finding hiking trails in Utah by selecting a city. </p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="https://utahviews.herokuapp.com/" className="btn btn-success">View Project</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="card">
                                    <img className="card-img-top" src={require('../images/GoogleBookSearch.jpg')} alt="Book Serach App" />
                                    <div className="card-body">
                                        <h4 className="card-title">Google Book Search</h4>
                                        <p className="card-text">An app where users can search for books and save their favorites.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="https://otter-books-search.herokuapp.com/" className="btn btn-success">View Project</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" id="notbold">
                                <div className="card">
                                    <img className="card-img-top" src={require('../images/WeatherDashboard.jpg')} alt="Weather Dashboard" />
                                    <div className="card-body">
                                        <h4 className="card-title">Weather Dashboard</h4>
                                        <p className="card-text">A weather app that displays current weather & a 5 day forecast for the selected city.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="https://ecotterstrom.github.io/bootcampassign6/" className="btn btn-success">View Project</a>
                                    </div>
                                </div>
                            </th>
                            <td>
                                <div className="card">
                                    <img className="card-img-top" src={require('../images/WorkDayScheduler2.jpg')} alt="Scheduler App" />
                                    <div className="card-body">
                                        <h4 className="card-title">Work Day Scheduler</h4>
                                        <p className="card-text">A scheduling app that enables entry and saving of tasks during the current work day.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="https://ecotterstrom.github.io/bootcampassign5/" className="btn btn-success">View Project</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="card">
                                    <img className="card-img-top" src={require('../images/BudgetTracker.jpg')} alt="Budget Tracker" />
                                    <div className="card-body">
                                        <h4 className="card-title">Budget Tracker</h4>
                                        <p className="card-text">A app that enables entry of paychecks and expenses and grapsh the result.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="https://fierce-dusk-53707.herokuapp.com/" className="btn btn-success">View Project</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Projects;