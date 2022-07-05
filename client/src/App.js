import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from "./componant/Header.js"
import User from "./componant/User.js"

import user_api_url from "./settings/user_api.js"

function App() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const getUserList = () => {
    axios.get(`${user_api_url}`).then((response) => {
      setListOfUsers(response.data);
    },
      (error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "View";
    getUserList();
  }, []);

  return (
    <div >
      <Header></Header>
      
      <h1>All Users</h1>
      {
        listOfUsers.length > 0 ?
          listOfUsers.map((item) => <User key={item.id} user={item}> </User>)
          : <div>No User Availabe. </div>
      }
    </div>
  );
}

export default App;
