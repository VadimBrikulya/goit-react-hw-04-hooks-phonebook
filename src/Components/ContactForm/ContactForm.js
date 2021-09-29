import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

        handleChange = e => {
        const {name, value} = e.currentTarget
          this.setState({ [name]: value })
          
    };
  
        handleSubmit = e => {
        e.preventDefault();
          this.props.onSubmit(this.state);
          this.reset();
          
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };
  
  render() {
    
        return (
            <form onSubmit = {this.handleSubmit} >
                <label htmlFor={this.nameInputId} >            
                    Name <br/><input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"                     
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required
                                id={this.nameInputId}
                            />
                            
                </label>
                    <br/>
                <label htmlFor={this.numberInputId}>
                    Number <br/><input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            id={this.numberInputId}
                          />
          </label>
          <div style ={{marginTop: "10px"}}>
                    <button type="submit" disabled= {!this.state.name || !this.state.number}>add contact</button>
          </div>
        </form>
        );
    }
}

export default Form;