import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.handleInputChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input
                  type="text"
                  name="firstName"
                  className="input"
                  placeholder="Your First Name..."
                  onChange={this.handleInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input type="text" name="lastName" className="input" placeholder="Your Last Name..." />
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
          </div>
        </div>
        <button className="button">Submit</button>
      </form>
    )
  }
}

export default ContactForm;