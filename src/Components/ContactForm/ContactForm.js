import { useState } from "react";
import shortid from 'shortid';

const Form = ({ onSubmit }) =>{
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };
  
    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

    const reset = () => {
    setName("");
    setNumber("");
  };
  
  
        return (
            <form onSubmit = {handleSubmit} >
                <label htmlFor={nameInputId} >            
                    Name <br/><input
                            type="text"
                            value={name}
                            onChange={handleChange}
                            name="name"                     
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required
                                id={nameInputId}
                            />
                            
                </label>
                    <br/>
                <label htmlFor={numberInputId}>
                    Number <br/><input
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            id={numberInputId}
                          />
          </label>
          <div style ={{marginTop: "10px"}}>
                    <button type="submit" disabled= {!name || !number}>add contact</button>
          </div>
        </form>
        );
    }


export default Form;