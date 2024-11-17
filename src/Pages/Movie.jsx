import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Movie = () => {
    const API="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const [data, setData] = useState([]);
    const getMovieData = async()=>{
        try {
            const response = await axios.get(API);
            console.log(response);
            setData(response.data.Search);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getMovieData();
    },[])
  return (
    <ul className="container grid grid-four--cols">
        {data.map((item) => {
            return (
                <Card key={item.imdbID} movieData={item} />
            );
        })}
    </ul>
  );
}

export default Movie;