import React from 'react'
import { Handle } from 'reactflow'

function Paymentinit({data :{ amount}}) {
  return (
    <div className='h-auto w-auto bg-white border-2 border-gray-500 text-center p-2'>
      <h1 className=''>Payment Initalised</h1>
      {amount}
      <Handle type='source' position='right'/>
    </div>
  )
}

export default Paymentinit
