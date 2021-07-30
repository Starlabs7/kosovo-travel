import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";



function Posts({ match }) {

    useEffect(()=> {
        fetchItem();
    }, []);

    const [item, setItem] = useState([]);

    const fetchItem = async () =>{
        try{
            const data = await fetch('./data/data.json');
            const item = await data.json();
            setItem(item.carousel);
            console.log(item);
        }catch(error){
            console.error(error);
        }    
    }
    return (
        <div>
            <h1>{item.id}</h1>
        </div>
    )
}

export default Posts
