import React from 'react'

function Header(props) {
  return (
    <>
        <div className="col s12 main-heading">
          <h2 className="center-align">{props.heading}</h2>
          <p className="center-align">{props.subHeading}</p>
        </div>
    </>
  )
}

export default Header
