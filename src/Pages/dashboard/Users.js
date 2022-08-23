import React, { useEffect, useState } from 'react'
import { Table,Button } from 'reactstrap';
import {Link} from 'react-router-dom'


function Users() {
  const [users, setUsers] = useState([]);
      useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
  
  return (
    <div>
              <Table striped >
        <thead>
            <tr>
              <th>  #        </th>
              <th>  Name     </th>
              <th>  Userame  </th>
              <th>  Email    </th>
              <th>Detaylar</th>
            </tr>
        </thead>
        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>  {user.id}        </td>
              <td>  {user.name}      </td>
              <td>  {user.username}  </td>
              <td>  {user.email}     </td>
              <td> <Button color='warning'>   <Link to= {`${user.id}`}>Detay</Link> </Button></td>
            </tr>
          ))};
        </tbody>
      </Table>
    </div>
  )
}

export default Users