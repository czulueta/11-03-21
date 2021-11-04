import React, { useState } from "react-router-dom"
import axios from "axios"

export const { UserContext } = React.createContext()


export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    todos:[]
  }
  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.get("/auth/signup", credentials)
      .then(res => {
        const {user, token} = res.data
        localStorage.setItem("token")
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          token,
          user
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials){
    axios.get("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token")
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          token,
          user
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState(prevState => ({
      user: {},
      token: "",
      todos: []
    }))
  }
  return(
    <UserContext.Provider value={{
      ...userState,
      signup,
      login,
      logout
    }}>
      {props.children}
    </UserContext.Provider>
  )
}