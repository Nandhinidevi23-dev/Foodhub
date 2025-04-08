
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { FoodComponent } from './FoodApp/FoodComponent';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './FoodApp/About';
import Body from './FoodApp/Body';
import Error from './FoodApp/Error';
import Contact from './FoodApp/Contact';
import ResMenu from './FoodApp/ResMenu';
import UserContext from './FoodApp/utils/UserContext';
import { Provider } from 'react-redux';
import appstore from './FoodApp/utils/appStore';
import CardItem from './FoodApp/CartItem';
import MainDashboard from './FoodApp/MainDashboard';
const Grocery = lazy(() => import("./FoodApp/Grocery"));



const App = () => {

  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: "Nandhini devi"
    }
    setuserName(data.name)
  }, [])
  return (
    <Provider store={appstore}>
      <UserContext.Provider value={{ loggedId: userName, setuserName }}>
        <RouterProvider router={appRouter} />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <FoodComponent />,
      children: [
        {
          path: '/',
          element: <MainDashboard />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/grocery',
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: '/restaurant/:resId',
          element: <ResMenu />,
        },
        {
          path: '/carditem',
          element: <CardItem />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    basename: '/Foodhub', // Move inside createBrowserRouter
  }
);


// const appRouter = createBrowserRouter([



//   {
//     path: '/',
//     element: <FoodComponent />,
//     children: [
//       {
//         path: '/',
//         element: <MainDashboard />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },
//       {
//         path: '/grocery',
//         element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>
//       },
//       {
//         path: '/restaurant/:resId',
//         element: <ResMenu />
//       },
//       {
//         path: "/carditem",
//         element: <CardItem />
//       }
//     ],
//     errorElement: <Error />
//   },


// ],
//   {
//     basename: '/Foodhub', // Set this to the subdirectory of your GitHub Pages URL
//   })

export default App;



