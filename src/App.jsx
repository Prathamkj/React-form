import React, { useState } from 'react' // import useState is necessary

const App = () => {

  // function to handle form submission
  // const submitHandler = (e) => {
  //   console.log("Form Submitted");
  //   e.preventDefault(); // prevent the default form submission behavior
  //   // this is imp // to prevent the page from reloading
  // }

  const [username, setusername] = useState("")
  // Submit handler function
  const submitHandler = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    console.log(username); // log the username to the console
    // here we can print as many username as we want
    setusername(""); // reset the input field after submission
  }



  return (
    <div>
      {/* form handling in react */}
      {/* event listner lagaya yaha par on Submit */}
      {/* <form action="" onSubmit={(e) => {
        submitHandler(e);
      }}> */}
        <form action="" onSubmit={(e) => {
          // submit ya koi bhi event handler ho usse aise hi banana hota hai
          submitHandler(e);
        }}>
        <input 
          value={username} // this is controlled component
          // if we pass value and give it a value then it cannot be changed
          // value={"Krishna"}
          // onChange={(e) => setusername(e.target.value)} // add onChange to update state
          onChange={(e) => {
            // console.log(e.target.value);
            setusername(e.target.value) // update the state with the input value
          }}


          className='px-4 py-3 text-xl m-5 rounded' 
          type="text" 
          placeholder='Enter Your Name'
        />
        <button className='px-4 py-3 text-xl m-5 font-semibold bg-emerald-400 rounded-xl'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
