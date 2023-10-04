"use client"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Header() {
const [time, settime] = useState(false)
console.log(time)
useEffect(() => {
  if (time) {
    toast.success("ok")
  }else{}

 
},[time ])

  return (
    <div onClick={()=>settime(true)}>Header</div>
  )
}
