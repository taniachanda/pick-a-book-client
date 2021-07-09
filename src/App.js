import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import AddBooks from "./components/AddBooks/AddBooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignIn from "./components/SignIn/SignIn";
// import Sidebar from "./components/Sidebar/Sidebar";
import OrderedBook from "./components/OrderedBook/OrderedBook";
import ManageBookList from "./components/ManageBookList/ManageBookList";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser]}
      className="App"
    >
      <Router>
        <Switch>
          {/* <HomeScreen></HomeScreen> */}
          <Route exact path="/home" component={HomeScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
          <PrivateRoute
            exact
            path="/addBooks"
            component={AddBooks}
          ></PrivateRoute>
          <PrivateRoute
            path="/checkout/:_id"
            // component={CheckOut}
          >
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute exact path="/orderedBook" component={OrderedBook}>
            {/* <OrderedBook /> */}
          </PrivateRoute>
          <Route exact path="/signIn" component={SignIn}>
            {/* <SignIn /> */}
          </Route>
          {/* <Route exact path="/sidebar" component={Sidebar}>
          </Route> */}
          <PrivateRoute exact path="/manageBookList" component={ManageBookList}>
            {/* <ManageBookList /> */}
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
