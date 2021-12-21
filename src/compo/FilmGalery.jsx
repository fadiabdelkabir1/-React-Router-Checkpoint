import React from 'react'
import './FilmGalery.css'
import CardComp from "./card";
import { Link } from 'react-router-dom';

export default function FilmGalery({ SearchValue, rating, fakedata }) {
    return (
        <div>
        <ul style={{ listStyle: "none", flexWrap: "wrap", display: "flex" }}>
            {fakedata
            .filter(
                (item) =>
                item.title.toLowerCase().includes(SearchValue.toLowerCase()) &&
                item.rate >= rating
            )
            .map((item) => (
                <Link to={`/trailer/${item.title}`}><CardComp item={item} /></Link>
            ))}
        </ul>
        </div>
    );
}
