import React from 'react'
import "../Sliders/projectSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sp from '../../assest/shortest-path.png';
import sas from '../../assest/spot-and-solve.png';
import ha from '../../assest/hostel-Accommadation.png';
import hms from '../../assest/Health-monitoring-system.png';
import bb from '../../assest/python-bus-booking.jpg';

export default function projectSliders() {

    const linkroster = [
        {
            id: 1,
            title: 'Spot And Solve',
            description: 'Developed a road-based hazard reporting system with User, Admin, and Super Admin roles. Integrated automatic location detection of reported issues. Implemented a community voting system to prioritize high-impact road problems. Designed an admin workflow with deadlines and escalation to super admin for efficiency.',
            Technology: "React Native, Firebase.",
            image: sas
        },
        {
            id: 2,
            title: 'Hostel Accommodation',
            description: "Developed a full-stack accommodation management system with an admin-focused dashboard. Implemented CRUD operations for tenant management and automated welcome emails. Designed a billing system for electricity (EB) and TV expenses. Integrated RethinkDB for real-time data storage and retrieval.",
            Technology: "React.js, Express.js, Node.js, RethinkDB.",
            image: ha
        },
        {
            id: 3,
            title: 'Health Monitoring System',
            description: " Developed a Health Monitoring System with pill reminders and educational health videos. Enabled users to set alarms for medications and watch videos on common illnesses. Improved user engagement and health tracking efficiency with a feature-rich app.",
            Technology: "React Native, Firebase.",
            image: hms
        },
        {
            id: 4,
            title: 'Shortest Path',
            description: 'This paper introduces a hybrid routing framework combining Dijkstra’s and A* algorithms for efficient, real-world pathfinding using OpenStreetMap data. The system dynamically selects the optimal algorithm based on performance and travel time, ensuring reliability even if one method fails. It includes heuristic optimizations and real-time congestion-based visualizations.',
            Technology: "Python, Flask, Tom-Tom Api, HTML, CSS, Js.",
            image: sp
        },
        {
            id: 5,
            title: 'Bus Booking System',
            description: " Developed a Python-based bus ticket booking system using Tkinter for a user-friendly interface. Enabled users to select, book, and view tickets, similar to RedBus but without a payment option. Utilized SQLite for efficient data storage and retrieval, ensuring smooth booking management.",
            Technology: "Python, Tkinter, SQLite.",
            image: bb
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {linkroster.map((item) => (
                    <div key={item.id}>
                        <div className="LR-card">
                            <img className="LR-image" src={item.image} alt={item.title} />
                            <div className="LR-title">{item.title}</div>
                            <div className="LR-description">{item.description}</div>
                            <div className="LR-technology">Techonology: {item.Technology}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
