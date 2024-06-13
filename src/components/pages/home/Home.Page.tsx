'use client'
import Button from '@/components/core/button/Button'
import { toast } from '@/components/ui/use-toast'
import React from 'react'

const HomePage = () => {
    const click = ()=>{
        toast({
          variant: "success",
          description: "Logged in successfully !",
        })
      }
  return (
    <div>
        <Button
        onClick={click}
        label="Toast"
      />
    </div>
  )
}

export default HomePage