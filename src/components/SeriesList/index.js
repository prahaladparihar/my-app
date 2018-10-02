import React from 'react';
import './main.css';
import {Link } from 'react-router-dom';

const SeriesItem = ({ series }) => (
    <li> 
    <Link to={`/series/${series.show.id}`} className="linkcss">
        {series.show.name} 
    </Link>    
    </li>
)
const SeriesList = (props) => {
    return (
        // <div>Series List Component </div>
        <div>
          <ul className="series-list">
            {props.list.map(series =>(
               <SeriesItem  series={series} key={series.show.id}/> 
            ))}
          </ul>
        </div>
    )
}

export default SeriesList;