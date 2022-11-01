import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Users = lazy(() => import("./Components/Users"));
const ErrorPage = lazy(() => import("./Components/ErrorPage"));
const NewContactMessage = lazy(() => import("./Components/NewContactMessage"));
const ContactOutlet = lazy(() => import("./Components/ContactOutlet"));
const UserOutlet = lazy(() => import("./Components/UserOutlet"));

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>error.message</p>
      <button onClick={() => resetErrorBoundary}>Reset My App</button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  const [manageData, setManageData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const myFetchRequest = async () => {
      setIsLoading(true);
      setError({hasError: false, message: ""})
      const response = await fetch("https://randomuser.me/api/1.4/?results=30");
      //If the API request above is unsuccessful, the error below is thrown...
      if (!response.ok) {
        setError({ hasError: true, error: "Something is up"})
        throw new Error("Something is up");
      }
      //There are a lot of unnecessary info in the imported API below...
      const responseBody = await response.json();
      //So,  below, I'm transforming them (aka evolvedData) to sieve through and use only the ones I deem important for my app...
      const evolvedData = [];

      for (const user of responseBody.results) {
        evolvedData.push({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          picture: user.picture.small,
        });
      }

      //Passing in my transformed data into my setManageData state...
setManageData(evolvedData)
setIsLoading(false)
      
    };
    myFetchRequest()  
  }, []);




  return (
    <div className="App">
      <NavBar />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactOutlet />}>
              <Route path="" element={<Contact />} />
              <Route path="new" element={<NewContactMessage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>

            <Route path="/users" element={<UserOutlet />}>
              <Route path="" element={<Users users={manageData} />} />
              
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
