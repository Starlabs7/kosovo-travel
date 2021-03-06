import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import {Link} from "react-router-dom";


function Carousel() {
    let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: true,
        touchThreshold: 15,
    }

    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        try{
            const data = await fetch('./data/data.json');
            const items = await data.json();
            setItems(items.carousel);
        }catch(error){
            console.error(error);
        }    
    }
    return (
        <div className="carousel-wrapper">
            <h1 className="title 2">Destinations</h1>
            <Slider {...settings}>
                {items.map(item => (
                    <div className="card-wrapper" >
                        <div className="carousel-card">
                            <img src={item.image} alt="Popular Destination"/>
                            <h3 key={item.id} ><Link to={`/carousel/${item.id}`} className="carousel-link">{item.title}</Link></h3>
                            <p>{item.description}</p>
                            <button className="btn2"><Link to={`/carousel/${item.id}`} className="carousel-button">Learn more!</Link></button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
