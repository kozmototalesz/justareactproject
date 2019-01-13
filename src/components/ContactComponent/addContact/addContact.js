import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addContact} from '../../../actions/contactActions';
import TextFieldGroup from '../../../common/TextFieldGroup';
import hat from 'hat';

class AddContact extends Component {
    constructor(){
        super();
        this.state={
            name: '',
            phone:'',
            email:'',
            address:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange (event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onDelete(event){
        this.props.deleteContact(event.target.id)
    }

    onSubmit(e){
        e.preventDefault(); 

        let id=hat();
        
        if (this.state.name==null || this.state.name==="" || this.state.phone==null || this.state.phone==="" ||  this.state.email==null || this.state.email==="" ||  this.state.address==null || this.state.address==="")
        {
            alert("Please fill all required field");
        } else {
            const newContact={
                id: id,
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                address: this.state.address
            }
       
            this.props.addContact(newContact); 
        
            this.setState({
                name: '',
                phone: '',
                email: '',
                address: ''
            })
        }

    }

  render() {   
    return (
        <div>
            <div className="innerContent">
                    <form noValidate onSubmit={this.onSubmit} >
                        <TextFieldGroup placeholder="Name"
                            name="name"
                            type="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />

                         <TextFieldGroup placeholder="Phone"
                            name="phone"
                            type="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                        />
                        
                        <TextFieldGroup placeholder="E-mail"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />

                        <TextFieldGroup placeholder="Address"
                            name="address"
                            type="name"
                            value={this.state.address}
                            onChange={this.onChange}
                        />
                        <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"></input>  

                    </form>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) =>({
    newcontacts: state.newcontacts
});

export default connect(mapStateToProps,{addContact})(AddContact);
 