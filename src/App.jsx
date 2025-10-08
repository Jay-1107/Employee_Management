import { useContext, useEffect, useState } from "react";
import Login from "./componetns/Auth/Login";
import AdminDashbord from "./componetns/Dashbord/AdminDashbord";
import EmployeeDashbord from "./componetns/Dashbord/EmployeeDashbord";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import AuthProvider, { AuthContext } from "./context/AuthProvider";

function App() {
  useEffect(() => {
    getLocalStorage();
    setLocalStorage();
  });

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // console.log(
  //   "authData",
  //   authData.employees.find((e) => email == e.email && e.password == password)
  // );

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashbord changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashbord changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
