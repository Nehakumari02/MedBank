"use client"
import { useModal } from '@/contexts/ModalContext'
import React, { useEffect } from 'react'

const NewOrder = () => {
  const {showModal} = useModal()
  return (
    <div>NewOrder</div>
  )
}

export default NewOrder