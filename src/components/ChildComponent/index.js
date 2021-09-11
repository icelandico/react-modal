import React, { useEffect } from "react";

const ChildComponent = () => {

  const apiFetch = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json()
  }

  useEffect(() => {
    apiFetch();
  })

  return (
      <div>
        <p>Some example text</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>This is asynchronous action</p>
      </div>
  )
}

export default ChildComponent;
