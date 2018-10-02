import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import './index.css';
class Series extends Component {
        state = {
          series : [],
          seriesName : '',
          isFetching : false
        }
onSeriesInputChange = e => {
     this.setState({ seriesName: e.target.value, isFetching: true});
       fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)      
        .then((response) => response.json()) 
        .then(json => this.setState({ series:json, isFetching:false }));
}

    render() {
        const { series, seriesName, isFetching} = this.state;

        return (
            <div>
            Total Results: {this.state.series.length}
             <div>
                <input 
                className="inputt"  
                value={seriesName}
                type="text" 
                onChange={this.onSeriesInputChange} />
             </div>
             {
                 !isFetching && series.length === 0 && seriesName.trim() === '' 
                 &&
                 <p className="text-primary" >Please Enter Series Name  </p>

             }
             {
                 !isFetching && series.length === 0 && seriesName.trim() !== ''
                 &&
                 <p className="text-danger">No TV series have been found with the name '{seriesName}'</p>
             }
             {
                 isFetching && <span><i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i></span>
             }
             {
                 !isFetching && <SeriesList list={this.state.series} />
             }
             
             
            </div>
        );
    }
}

export default Series;
