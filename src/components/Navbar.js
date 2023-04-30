import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import  '../style/Style.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='d-flex container justify-content-between mb-2'>
          <div className="flex-start">
              <span className='logo'>MovieApp</span>
          </div>
          <div className="flex-end">
              <span className='item active'>Home</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar