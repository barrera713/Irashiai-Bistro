import React from 'react';
import Beer from './Beer';
import Sake from './Sake';
import Wine from './Wine';


class BarContainer extends React.Component {

    state = {
        beer: false,
        sake: false,
        wine: false
    }

    handleBeer = () => {
        this.setState({
            beer: !this.state.beer,
            sake: false,
            wine: false
        })
    }
    
    handleSake = () => {
        this.setState({
            beer: false,
            sake: !this.state.sake,
            wine: false
        })
    }

    handleWine = () => {
        this.setState({
            beer: false,
            sake: false,
            wine: !this.state.wine
        })
    }

    render() {
         return (<div className="bar-cat">
            <ul>
                <li onClick={this.handleBeer}>Beer</li>
                <li onClick={this.handleSake}>Sake</li>
                <li onClick={this.handleWine}>Wine</li>
            </ul>
            <div>
                {this.state.sake ? <Sake /> : null}
                {this.state.beer ? <Beer /> : null}
                {this.state.wine ? <Wine /> : null}
            </div>
         </div>)

    }

}

export default BarContainer;