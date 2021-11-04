import React from "react"

export default function AuthForm(){
  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name={username}
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input 
        type="text"
        name={password}
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>{ btnText }</button>
    </form>
  )
}