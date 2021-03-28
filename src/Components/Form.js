import React, { useState } from 'react';

const Form = (props) =>{
    const { colorList, setColorList } = props;
    const [ colorText, setColorText] = useState("");
    const formHandler = (e) => {
        e.preventDefault();
        console.log(" Color submitted is " + colorText);

        setColorList([...colorList, colorText]);
        setColorText("");
    }
    return(
        <div>
            <form onSubmit={ formHandler }>
                <label>Color</label>
                <input 
                type="text" 
                name="Color" 
                value={ colorText }
                onChange={ (e) => setColorText(e.target.value) }/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default Form;