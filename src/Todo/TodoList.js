import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem.js"

const styles = {
    ul: { 
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}
function TodoList(props){
return (
    <ui style={styles.ul}>
       {props.todos.map((todo, index) => {
           return <TodoItem 
           todo={todo}
           key={todo.id}
           index={index}
           onChange={props.onToggle}/>
       })}
    </ui>
)

}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList