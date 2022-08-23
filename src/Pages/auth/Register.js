import React from 'react'
import {Button} from 'reactstrap'

function Register() {
  return (
    <div>
        <h3>Kayıt Ol</h3>
        <div>
            <input placeholder='Email'/>
        </div>
        <div>
            <input placeholder='Şifre'/>
        </div>
        <Button color='primary'>Kayıt Ol</Button>
    </div>
  )
}

export default Register