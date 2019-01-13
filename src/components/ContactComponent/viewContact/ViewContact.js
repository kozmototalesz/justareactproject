import React, { Component } from 'react'
import ViewNewContacts from './ViewNewContacts'
import ViewExistingContacts from './ViewExistingContacts'

export default class ViewContact extends Component {
  render() {
    return (
      <div className="innerContent">
        <ViewExistingContacts></ViewExistingContacts>
        <ViewNewContacts></ViewNewContacts>
      </div>
    )
  }
}
