import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import { testApi } from '../../apis/Api'

const Homepage = () => {

  //print Hello after page load, automatic 
  useEffect(() =>{
    console.log('my name is paribesh')

    //calling test api
    testApi().then((res) =>{
      console.log(res)
    })
  })
  return (
    <div>
      <Navbar />
      <h1>Homepage!.....</h1></div>
  )
}

export default Homepage