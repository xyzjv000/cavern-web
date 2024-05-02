import React from 'react'

function Card(props) {
  return (
    <div className={`flex flex-col bg-slate-50 gap-4 p-8 sm:p-10 rounded-lg shadow-md ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card