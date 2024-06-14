import LoginPage from '@/components/pages/login/Login.page'
import React from 'react'

const Login = () => {
  return (
    <div className='commonContainer min-h-[calc(100vh-150px)] flex flex-col items-center justify-center w-full py-5'>
      <LoginPage/>
    </div>
  )
}

export default Login