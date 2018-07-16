import React, { Component } from 'react';
function login(){ 
  
    return (
    <div>
    <form>
            Username:<input
              type="text"
            
              placeholder="Enter your Username"
            />
             Password:<input
              type="Password"
             
              placeholder="Password"
            />
            <button>Login</button>
          </form>

     </div>
    );
  
}
export default login;