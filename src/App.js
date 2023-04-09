

// import App1 from "./Components/App1.js" ;
// import App2 from "./Components/App2.js" ;
import Button from "./Components/Button";


function App (){
     return(
        <div>
            <h1> Hello World </h1> 
            <p>Hey How are you, how the hell you are doing</p>
            <Button name="Apple"/> 
            <Button name="Mango"/>
            <Button name="Banana"/>
        </div>
     )
}

export default App;


















// // collect all componets 
// // structure it in the way u want to diplay
// // export it to index.js

// // import React from 'react';

// export function App1(){
//     return <h1> Hello World 1 </h1> ;
// }
// export function App2(){
//     return <h1> Hello World 2</h1> ;
// }

// // export default App1;

// // export {App1, App2};  // its not working

// // default export is used when we want to export only one thing from a file 
// // named export is used when we want to export more than one thing from a file