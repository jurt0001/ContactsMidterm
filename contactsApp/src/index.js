//*************************************************************
// Author: Christian Jurt
// File: main.js - This is the main (JSX) page.
// Description: An App that catelogs your contacts.
// Date: Oct 16, 2017
// Version: 0.0.1
//*************************************************************
require('./main.scss');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import ContactsPage from './Components/ContactsPage.js';
import ContactsDetailsPage from './Components/ContactsDetailsPage.js';
import {contacts} from './data/contacts.js';

'use strict';
let state = {};

window.addEventListener('hashchange', ()=>setState({location: location.hash}));

function setState(changes){
      
	state = Object.assign({}, state, changes);
    
	let item;
	let location = state.location.replace(/^#\/?|\/$/g, '').split('/');
    
	//routing
	if (location[0] === 'contact' ){
		item = state.items.find(item => item.id == location[1]);
	}
    
	const rootElement = (
		<div>
			<Header title="Contacts List"/>
			<ContactsPage items = {state.items} />
			<ContactsDetailsPage item = {item}/>
			<Footer title="by Christian Jurt" info="Contacts provided by Joel Lord"/>
		</div>
	); 
    
	const app = document.getElementById('react-app');
	ReactDOM.render(rootElement, app);
}

//setting the initial state
setState({
	items: contacts,
	location: location.hash
});

