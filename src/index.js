
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import Header from './components/Header';
// import Home from './components/Home';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Showmore from './components/Showmore';
// import View from './components/View';
// import Login from './components/Login';
// import Signup from './components/Signup';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'Header',
//         element: <Header />,
//       },
//       {
//         path: 'Home',
//         element: <Home />,
//       },
//       {
//         path: 'Showmore',
//         element: <Showmore />,
//       },
//       {
//         path: 'View',
//         element: <View />,
//       },
//       {
//         path: 'Login',
//         element: <Login />,
//       },
//       {
//         path: 'Signup',
//         element: <Signup />,
//       },
    
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={router} />);





// Component2-----------------------------------------------------------------------------------------------------



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component2/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Compo1 from './component2/Compo1';
import Compo2 from './component2/Compo2';
import Compo3 from './component2/Compo3';
import Compo4 from './component2/Compo4';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", 
        element: <Compo1 />,
      },
      {
        path: "Compo2", 
        element: <Compo2 />,
      },
      {
        path: "Compo3", 
        element: <Compo3 />,
      },
      {
        path: "Compo4", 
        element: <Compo4 />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
