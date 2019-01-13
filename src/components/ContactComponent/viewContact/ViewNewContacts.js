import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getNewContacts,deleteContact} from '../../../actions/contactActions';
import ContactCard from '../../../common/ContactCard';
import '../../../App.css';

class ViewNewContacts extends Component {

    constructor(props){
        super(props);
        this.state={
            'contacts':[]
        };
        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(e){
        this.props.deleteContact(e.target.id);
    }

    componentDidMount(){
        this.props.getNewContacts(); 
        this.setState({'contacts':this.props.newcontacts.newContact});
    } 

    componentWillReceiveProps(nextProps){
        if(nextProps.newcontacts.newContact){
            this.setState({'contacts':nextProps.newcontacts.newContact});
        }
    }

    render() {
        let contacts = this.state.contacts;
        let existingContactsContent;

        if (contacts.length>0){
            existingContactsContent=(
                contacts.map(contact => (
                    <ContactCard key={contact.id}
                            name={contact.name}
                            email={contact.email}
                            phone={contact.phone}
                            address={contact.address}
                            onDelete={this.onDelete}
                            id={contact.id}
                            >
                    </ContactCard>
            )))
        } else {
            existingContactsContent=(
                <div>
                    You haven't added new contacts.
                </div>
            )
        }
        return (
                <div>
                    <h2>New Contacts</h2>
                    <div className="container">
                        {(existingContactsContent)}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    newcontacts: state.newContacts
})

export default connect(mapStateToProps,{getNewContacts,deleteContact})(ViewNewContacts);
