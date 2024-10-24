import { Component } from "react"

class UserDetails extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <h3>Name: {this.props.name} </h3>
                <h3>Location: {this.props.location}</h3>
                <h3>Phone No: {this.props.phone}</h3>
                <h3>State: {this.props.state}</h3>
            </div>
        );
    }
}

export default UserDetails;