import React from 'react'
import Text from '../typography/Text'
import Button from '../button/Button'

const DefaultNavbar = () => {
  return (
    <nav className=' bg-blue-50'>
        <div className='commonContainer flex items-center justify-between py-5'>
        <div>
            <Text label={'LOGO'} variant={'header_2'} />
        </div>
        <div className='flex items-center gap-4'>
            <Button variant={"outlineBtn"} label='Login'/>
            <Button variant={"regulerBtn"} label='Register'/>
        </div>
        </div>
    </nav>
  )
}

export default DefaultNavbar