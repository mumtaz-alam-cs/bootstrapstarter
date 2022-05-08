import React from 'react';

function Section({ title, description, image, rtl }) {
   return (
      // <section id="scroll">
      <section>
         <div className="container px-5">
            <div className="row gx-5 align-items-center">
               <div className={(rtl) ? "col-lg-6 order-lg-2" : "col-lg-6"}>
                  <div className="p-5">
                     <img className="img-fluid rounded-circle" src={image} alt="..." />
                  </div>
               </div>
               <div className={(rtl) ? "col-lg-6 order-lg-1" : "col-lg-6"}>
                  <div className="p-5">
                     <h2 className="display-4">{title}</h2>
                     <p>{description}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Section