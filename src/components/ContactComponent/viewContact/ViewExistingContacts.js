import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getContacts} from '../../../actions/contactActions';
import ContactCard from '../../../common/ContactCard';
import TextFieldGroup from '../../../common/TextFieldGroup'
import Spinner from '../../../common/Spinner';

import '../../../App.css';


class ViewExistingContacts extends Component {

    constructor(){
        super();
        this.state={'contacts':[],
                    'searchValue':'',
                    loading:false
        };
        this.onChange=this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            searchValue:e.target.value
        })
    }

    componentDidMount(){
        this.props.getContacts(); 
    } 
    
    componentWillReceiveProps(nextProps){
        if(nextProps.contacts.contact){
            this.setState({'contacts':nextProps.contacts.contact});
        }
    }

    render() {
        let contacts = this.state.contacts;
        let existingContactsContent;
        let searchValue = this.state.searchValue;     

        
        if (contacts.length>0){
            if(searchValue){
                    let filteredContacts=contacts.filter(contact=>contact.name.toLowerCase().includes(searchValue));  
                    contacts=filteredContacts;
            } 
                existingContactsContent=(
                    contacts.map(contact => (
                        <ContactCard key={contact.id}
                                name={contact.name}
                                email={contact.email}
                                phone={contact.phone}>
                        </ContactCard>
                )))
        } else {
                existingContactsContent=(
                    <div>
                    <Spinner/>
                    </div>
                )   
        }
        return (
                <div>
                    <TextFieldGroup
                            placeholder="Search"
                            name="searchValue"
                            value={this.state.searchValue}
                            onChange={this.onChange}>
                    </TextFieldGroup>
                    <div className="container">
                    {(existingContactsContent)}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts
})

export default connect(mapStateToProps,{getContacts})(ViewExistingContacts);
