import Footer from "./component/Footer"
import Navigation from "./component/Navigation"
import BooksDetails from "./component/BooksDetails"
import Home  from "./pages/Home"
import CurrentlyReading from "./pages/CurrentlyReading"
import Read from "./pages/Read"
import WantToRead from "./pages/WantToRead"
import ReadingChallenge from "./pages/ReadingChallenge"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import DidNotFinish from "./pages/DidNotFinish"


function App () {

  const Layout = () => {
    return (
      <div className="">

        <Navigation />
       
        <Outlet/>
     <Footer/>
      </div>
    );
  }
  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
        
      
       
         {
          path: "/",
          element:<Home className="z-10"/>,
        },
         {
          path: "/want to read",
          element:<WantToRead/>,
        },
       
         {
          path: "/book/:id",
          element:<BooksDetails/>,
        },
         {
          path: "/read",
          element:<Read/>,
        },
         {
          path: "/currently reading",
          element:<CurrentlyReading/>,
        },
         {
          path: "/did not finish",
          element:<DidNotFinish/>,
        },
         {
          path: "/challenge",
          element:<ReadingChallenge/>,
        },
      ]
    
  },
]);
  return (
     
    <div className="bg-tertiary-100  text-secondary-100" >
       <RouterProvider router={router} />
      
      </div> 
  );
}

export default App;

