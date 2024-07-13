import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Delete = () => {
  return (
      <FontAwesomeIcon icon={faX} className='text-red-500 w-7 h-7 hover:text-red-200 hover:cursor-pointer' />
  )
}

export default Delete