import { message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'
import './index.css'
import axios from 'axios'

export default function Login () {
  const refa = React.createRef()
  const refb = React.createRef()
  const navigate = useNavigate()

  const handlelogin = () => {
    const username = refa.current.value
    const password = refb.current.value
    const body = {
      username,
      password
    }
    const form = new FormData()
    Object.keys(body).forEach(i => {
      form.append(i, body[i])
    })

    axios({
      url: 'http://106.52.87.172:5000/login',
      data: form,
      method: 'POST',
    }).then(
      (res, err) => {
        if (res.data === 1) {
          navigate('/Home')
          message.success('success!')
        } else {
          message.error('error!')
        }
      }
    )


  }

  return (
    <div className='loginpage'>
      <div className='logintitle'>XDPlanner</div>
      <div className="login">
        <p className='loginp'>Login</p>
        <input type='text' placeholder='用户名' className='logininput' ref={refa} />
        <input type='password' placeholder='密码' className='logininput' ref={refb} />
        <button className='logininputbtn' onClick={handlelogin}>登 录</button>
      </div>
    </div >
  )
}
