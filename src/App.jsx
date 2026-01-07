import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = ()=>{
  // localStorage.clear();
  const [user, setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [Authdata] = useContext(AuthContext);
  // console.log(Authdata);
  // console.log(Authdata.employees)
  // const [flag, setFlag] = useState(false);\
  let isAuthenticated = false;

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])


  const handleLogin = (email, password)=>{
    if(Authdata){
      if(Authdata.admin.find((e)=>email == e.email && password == e.password)){
        isAuthenticated = true;
        const admin = Authdata.admin.find((e)=>email == e.email && password == e.password) 
        console.log(admin)
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:admin}))
      }else{
        console.log("I am in employee check")
        const employee = Authdata.employees.find((e)=> email == e.email && password == e.password);
        console.log(employee);
        if(employee){
          isAuthenticated = true;
          setUser('employee');
          setLoggedInUserData(employee);
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
        }  
      }
    } 
    if(isAuthenticated == false){
      alert("Invalid User")
    } 
  }

  // console.log(loggedInUserData);

  return(
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard  data={loggedInUserData} changeUser = {setUser}/>}
      {user === 'employee' && <EmployeeDashboard data={loggedInUserData} changeUser = {setUser}/>}
    </>
  )
}

export default App;