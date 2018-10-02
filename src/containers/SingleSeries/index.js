import React, { Component } from 'react';

class SingleSeries extends Component {
    state = {
        show:null
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)      
        .then((response) => response.json()) 
        .then(json => this.setState({ show: json }));
    }
    render () {
        // console.log(this.props);  checking op
        const { show } = this.state;
        
        return (
            <div>
              { show === null && <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i> }

              {
                  show !== null 
                  &&
                  <div>
                   <p>
                    <img alt="show" src={show.image.medium} />
                   </p>
                   <p>{show.name}</p>
                   <p>Premiered: {show.premiered }</p>
                   <p>Rating: {show.rating.average}</p>
                   <p>Episodes: {show._embedded.episodes.length} </p>
                   
                  </div>


              }
            </div>
        )
    }
}

export default SingleSeries;
