"use client"
import { useModal } from '@/contexts/ModalContext'
import React, { useEffect } from 'react'

const NewOrder = () => {
  const {showModal} = useModal()
  useEffect(()=>{
    showModal("New Order","Are you sure you want to create new order")
  },[])
  return (
    <div>NewOrder</div>
  )
}

export default NewOrder