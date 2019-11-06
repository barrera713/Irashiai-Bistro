import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';



class ResCollection extends React.Component {

    state = {
        selectedDate: new Date()
    }
    

    componentDidMount() {
       this.props.fetchReservations();     
    }

    handleClick = (selectedRow) => {
        console.log("handle id click")
    }



    handleDate = (e) => {
        e.preventDefault()
        this.setState({
            selectedDate: e.target["date"].value
        })
    }
    
    
    
    render() {
        console.log("inside date", this.state.selectedDate)
        const { reservations } = this.props;
        
        
        
        let matchDate = date => date.includes(this.state.selectedDate)
        
        
        // if selected date matches props.date it returns that specific date
        let searchDate = reservations.filter( i => {
            return matchDate(i.date)
        })
        
        console.log('this is reservations:', reservations)
        searchDate.sort( (a, b) => { return new Date(a.date + a.time) > new Date(b.date + b.time) ? 1 : -1 } )
        searchDate.sort( (a, b) => { return new Date(a.time) > new Date(b.time) })

        
        return (<div >
            <div>
                <form onSubmit={ (e) => this.handleDate(e)}>
                    <label>Date</label>
                    <input type="date" name="date"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
               <table className="table-data">
                   <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Party Size</th>
                    </tr>
                </thead>
                <tbody>
                {searchDate.map(i => 
                <tr onClick={ () => this.handleClick(i._id)} key={i._id}> 
                    <td>{i.guest.name}</td>
                    <td>{i.guest.contact}</td>
                    <td>{new Date(i.date.slice(0, 10).replace(/-/g, "/")).toDateString()}</td>
                    <td>{i.time}</td>
                    <td>{i.count}</td>
                </tr>)}
                  </tbody>
               </table>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    reservations: state.allReservations.data
})


export default connect(mapStateToProps, { fetchReservations })(ResCollection)
