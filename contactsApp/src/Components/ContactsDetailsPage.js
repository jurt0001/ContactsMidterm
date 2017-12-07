import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getAge, dob, caps} from '../format.js'; 

export default class ContactsDetailsPage extends Component {
    
	render() {
		if(!this.props.item){
			return (
				<div className="details">
					<p className="message">Select a Contact</p>
				</div>
			);
		} else {
            
			return(
				<div className="contact-details">
					<h1>{caps(this.props.item.name.first)} {caps(this.props.item.name.last)}</h1>
					<div><div>Gender: {caps(this.props.item.gender)}</div>
						<div>DOB: {dob(this.props.item.dob)}  AGE:  {getAge(this.props.item.dob)}</div>
						<hr></hr>
					</div>
                    
					<div><div>Email: <a href="mailto: {this.props.item.email}">{this.props.item.email}</a>
					</div>
					<div>Phone: {this.props.item.phone}</div>
					</div>
					<div><img src={this.props.item.picture.large}></img></div>
                    
                    
                
                
				</div>
                
                
            
			);
            
		}
	}
}

ContactsDetailsPage.propTypes = {
	item: PropTypes.object
};