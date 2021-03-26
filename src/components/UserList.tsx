import React  from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypesSelector(state => state.user);
  const { fetchUsers } = useActions()


  React.useEffect(() => {
    fetchUsers()
  }, [])

  if(loading) {
    return <h1>Идет загрузка...</h1>
  }
  if(error) {
    return <h1>{ error }</h1>
  }

  return (
    <div className="">
      {
        users.map(user => {
          return <div className="" key={user.id}>{user.name}</div>
        })
      }
    </div>
  )
}

export default UserList;

