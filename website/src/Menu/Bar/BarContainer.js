import React from 'react';
import Beer from './Beer';
import Sake from './Sake';
import Wine from './Wine';
import Beverage from './Beverage';


class BarContainer extends React.Component {

    state = {
        beer: false,
        sake: false,
        wine: false,
        beverage: false
    }

    handleBeverage = () => {
        this.setState({
            beer: false,
            sake: false,
            wine: false,
            beverage: !this.state.beverage
        })
    }

    handleBeer = () => {
        this.setState({
            beverage: false,
            beer: !this.state.beer,
            sake: false,
            wine: false
        })
    }
    
    handleSake = () => {
        this.setState({
            beverage: false,
            beer: false,
            sake: !this.state.sake,
            wine: false
        })
    }

    handleWine = () => {
        this.setState({
            beverage: false,
            beer: false,
            sake: false,
            wine: !this.state.wine
        })
    }

    render() {
         return (<div className="bar-cat">
            <ul>
                <li onClick={this.handleBeverage}>Beverages</li>
                <li onClick={this.handleBeer}>Beer</li>
                <li onClick={this.handleSake}>Sake</li>
                <li onClick={this.handleWine}>Wine</li>
            </ul>
            <div>
                {this.state.sake ? <Sake /> : null}
                {this.state.beer ? <Beer /> : null}
                {this.state.wine ? <Wine /> : null}
                {this.state.beverage ? <Beverage /> : null}
            </div>
         </div>)

    }

}

export default BarContainer;