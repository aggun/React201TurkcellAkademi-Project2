import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [])

    return (
        <div>
            <h3>Kullanıcı Detayları</h3>

            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

        </div>
    )
}

export default UserDetail