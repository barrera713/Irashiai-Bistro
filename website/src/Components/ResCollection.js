import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../Actions/Reservation';



class ResCollection extends React.Component {
    

    componentDidMount() {
       this.props.fetchReservations();     
    }

    handleClick = (selectedRow) => {
        console.log("handle id click")
    }




    render() {
        const { reservations } = this.props;
        
        
        console.log('this is reservations:', reservations)
        reservations.sort( (a, b) => { return new Date(a.date) > new Date(b.date) ? 1 : -1 } )
        if(reservations.sort( (a, b) => { return new Date(a.time) - new Date(b.time) })) 
        
        return (<div >
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
                {reservations.map(i => 
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
