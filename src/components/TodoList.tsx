import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";

const TodoList: React.FC = () => {
  const {error, limit, loading, page, todos} = useTypesSelector(state => state.todo);
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]

  React.useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if(loading) {
    return <h1>Идет загрузка...</h1>
  }
  if(error) {
    return <h1>{ error }</h1>
  }

  return (
    <div className="">
      {
        todos.map(todo => <div key={ todo.id }>{ todo.id } = { todo.title }</div>)
      }
            
      {
        pages.map((p, index) => 
          <span
            key={index}
            style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
            onClick={() => setTodoPage(p)}
          >{ p }</span>
        )
      }
    </div>
  )
}

export default TodoList;