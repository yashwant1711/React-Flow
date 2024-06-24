import React from 'react'
import { Handle } from 'reactflow'

function Paymentcountry({data :{currency, country, countryCode}}) {
  return (
    <div className='h-auto w-auto bg-white border-2 border-gray-500 text-center p-2'>
      <h2>{country}</h2>
      <h3>{currency}</h3>
      <h3>{countryCode}</h3>
      <Handle type='source' position='right'/>
      <Handle type='target' position='left'/>

    </div>
  )
}

export default Paymentcountry
