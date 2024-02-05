// import RouterItem from "./routes/Router";
// import './App.css'

// function App() {


//   return (
//     <>
//       <RouterItem/>
//     </>
//   )
// }

// export default App

import 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouterItem from "./routes/Router";
import './App.css';

function App() {
  return (
    <>
      <RouterItem />
      <ToastContainer />
    </>
  );
}

export default App;


