import React from 'react';
import '../App.css'; 
const Card = ({ movieData }) => {
    const { Poster, imdbID } = movieData;
    return (
        <li className="hero-container flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="main-container w-full">
                {/* Poster Container */}
                <div className="poster-container flex justify-center mb-4">
                    <img src={Poster} alt={imdbID} className="poster w-full h-auto max-w-xs rounded-lg" />
                </div>
                {/* Ticket Container */}
                <div className="ticket-container flex justify-center">
                    <div className="ticket__content">
                        <a href={`/movie/${imdbID}`} className="ticket__link">
                            <button className="ticket__buy-btn px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                Watch Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;
