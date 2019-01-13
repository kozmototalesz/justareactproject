import React, { Component } from 'react'
import ViewContact from './viewContact/ViewContact'
import AddContact from './addContact/addContact'


export default class ContactComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      content: ''
    };
    this.onChange=this.onChange.bind(this);
  }

  onChange(event){
    if(event.target.checked)
        this.setState({content: event.target.value});  
  }
  
  render() {
    let component;

    switch(this.state.content) {
      case "addView":
        component =<AddContact></AddContact>;
        break;
      case "contentView":
        component =  <ViewContact></ViewContact>;
        break;
      default:
        component =  <AddContact></AddContact>;
    }
    return (
      <div className="radioWrapper">
        <form>
          Add Contact<input onChange={this.onChange} type="radio" name="view" value="addView" defaultChecked/>    
          View Contact <input onChange={this.onChange} type="radio" name="view" value="contentView"/>  
        </form>
        {component}
      </div>
    )
  }
}
