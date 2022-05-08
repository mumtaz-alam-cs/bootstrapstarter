import React from 'react'

function Footer({ websiteName }) {
   return (
      <footer className="py-5 bg-black">
         <div className="container px-5">
            <p className="m-0 text-center text-white small">
               Copyright &copy; {websiteName} {new Date().getFullYear()}
            </p>
         </div>
      </footer>
   )
}

export default Footer