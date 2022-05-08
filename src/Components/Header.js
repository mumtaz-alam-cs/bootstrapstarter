import React from 'react'

function Header({ heading, subheading, button }) {
   return (
      <header className="masthead text-center text-white">
         <div className="masthead-content">
            <div className="container px-5">
               <h1 className="masthead-heading mb-0">{heading}</h1>
               <h2 className="masthead-subheading mb-0">{subheading}</h2>
               <a className="btn btn-primary btn-xl rounded-pill mt-5" href={button.Link}>{button.Name}</a>
            </div>
         </div>
         <div className="bg-circle-1 bg-circle"></div>
         <div className="bg-circle-2 bg-circle"></div>
         <div className="bg-circle-3 bg-circle"></div>
         <div className="bg-circle-4 bg-circle"></div>
      </header>
   );
}

export default Header