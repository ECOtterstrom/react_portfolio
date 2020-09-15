import React from 'react';
import "../styles/Styles.css";

const Header = () => {
    return (
        <div className="container">
            <section id="portfolio-info" className="portfolio-info">
                <h1 style={{color: 'darkslategray'}}><b>Portfolio</b></h1>
                <form>
                    <div className="card-columns">
                        <div className="card" style={{backgroundColor: 'steelblue'}}>
                            <img className="card-img-top" src="./assets/images/TruckDuVin.jpg" alt="Food Truck" />
                            <div className="card-body">
                                <h4 className="card-title">Food Truck Website</h4>
                                <p className="card-text">A website for a small wine & cheese food truck business created as a group project.</p>
                                <a href="https://ecotterstrom.github.io/wnctruck/" className="btn btn-success">View Project</a>
                            </div>
                        </div>
                        <div className="card" style={{backgroundColor: 'steelblue'}}>
                            <img className="card-img-top" src="./assets/images/WeatherDashboard.jpg" alt="Weather Dashboard" />
                            <div className="card-body">
                                <h4 className="card-title">Weather Dashboard</h4>
                                <p className="card-text">A weather app that displays current weather & a 5 day forecast for the selected city.</p>
                                <a href="https://ecotterstrom.github.io/bootcampassign6/" className="btn btn-success">View Project</a>
                            </div>
                        </div>
                        <div className="card" style={{backgroundColor: 'steelblue'}}>>
                            <img className="card-img-top" src="./assets/images/WorkDayScheduler.jpg" alt="Scheduler App" />
                            <div className="card-body">
                                <h4 className="card-title">Work Day Scheduler</h4>
                                <p className="card-text">A scheduling app that enables entry and saving of tasks during the current work day.</p>
                                <a href="https://ecotterstrom.github.io/bootcampassign5/" className="btn btn-success">View Project</a>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Header;