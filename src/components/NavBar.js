import React from 'react';

  const NavBar = () => {
   return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-light">
           <div className="container-fluid">
               <div className="navbar-header">
                   <a href="/">Gif-Search</a>
               </div>
               <div className="nav navbar-nav navbar-right">
                   <div className="row justify-content-end">
                     <div className="col-4">
                       <a href="/search">Search</a>
                     </div>
                     <div className="col-4">
                         <a href="/recent">Most Recent</a>
                     </div>
                     <div className="col-4">

                      </div>
                   </div>
               </div>
           </div>
       </nav>
   );
 }

  export default NavBar;
