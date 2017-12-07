import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {dob, caps} from '../format.js';



export default class ContactsPage extends Component {
    
	render() {
		return (
       
        
			<div className="column-list">
				<h3 className="scroll">Scroll for more Contacts!</h3>
				<ul>
					{this.props.items.map( item => (
        
						<li className="contact" key={item.key} >
							<a href={'#contact/' + item.id}>
								<div className="row">
									<div className="column-image">
										<img src={item.picture.thumbnail} alt={item.name}></img>
        
									</div>
									<div className="column-data">
										{caps(item.name.first)} {caps(item.name.last)}
										<br></br>
										{dob(item.dob)}
        
        
									</div>
								</div>
							</a>
        
						</li>
        
					))}
               
        
				</ul>
			</div>
       
        
		);
	}
}

ContactsPage.propTypes = {
	items: PropTypes.array
};

        