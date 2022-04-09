import React, {useState}  from "react";
import PropTypes from 'prop-types'

function useInputValue( defaultValue=''){
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
        value,
        onChange: event => setValue(event.target.value)
        },
        claer: () => setValue(''),
        value: () => value
    }
}

 function AddTodo({onCreate}) {
    const input = useInputValue('');
     

     function submitHandler(event){
         event.preventDefault()

         if(input.value().trim()) {
            onCreate(input.value())
           input.claer()
         }
     }
return (
    <form className="addForm" onSubmit={submitHandler}>
        <input className="inp"  {...input.bind}/>
        <button className="addTodo" type='submit' >Add Todo</button>
    </form>)
 }

AddTodo.prorTypes ={
    onCreate: PropTypes.func.isRequired
}

    export default AddTodo