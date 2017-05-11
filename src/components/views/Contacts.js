import React from 'react';
import { assign, set } from 'lodash/object';
import TextAreaField from 'components/form/TextAreaField';
import TextField from 'components/form/TextField';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('DATA: ', JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(
      set(
        assign({}, this.state),
        ['form', 'errors', fieldName],
        false
      )
    );
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email': {
          this.clearError('email');

          if (e.target.value.length < 3) {
            this.setState(
              set(
                assign({}, this.state),
                'form.errors.email',
                true
              )
            );
          }

          break;
        }
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form', 'values', fieldName],
          e.target.value
        )
      );
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;

    return (
      <div>
        <h1>Contacts</h1>
        <form onSubmit={this.onSubmit} className="form">
          <TextField
            name="fullName"
            value={fullName}
            onChange={this.handleChange('fullName')}
            label="Full name:"
          />
          <TextField
            name="email"
            value={email}
            error={this.state.form.errors.email}
            onChange={this.handleChange('email')}
            label="Email:"
          />
          <TextAreaField
            name="message"
            value={message}
            onChange={this.handleChange('message')}
            label="Message:"
          />
          <div className="actions" >
            <input
              type="submit"
              value="Submit"
              className="button button_blue"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Contacts;
