import React from 'react'

export default function Container(props) {
  return (
    <div style={{width:'85%', margin:"0 auto"}}>
      {props.children}
    </div>
  )
}
