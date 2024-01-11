import React from 'react'
import Nav from '@app/components/Nav'
const layout = ({children}) => {
  return (
    <div>
        <Nav/>
        {children}
    </div>
  )
}

export default layout