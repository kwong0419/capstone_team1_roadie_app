import React from 'react';
import ClientProfile from '../ClientProfile/ClientProfile';
import ClientContactForm from '../ClientContactForm/ClientContactForm';
import EditClientProfileForm from '../ClientProfile/EditClientProfileForm';
import EventForm from '../Events/EventForm';


const Client = () =>{
    return(
        <div className="realClientProfile">
            <ClientProfile />
            <ClientContactForm />
            <EditClientProfileForm />
            <EventForm />
        </div>
    )

};
export default Client;