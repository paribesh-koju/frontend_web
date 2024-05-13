
import React, {useEffect} from 'react'
import { newtestApi } from '../../apis/Api'

const Loginpage = () => {
   //print Hello after page load, automatic 
   useEffect(() =>{
    console.log('my name is lalit')

    //calling test api
    newtestApi().then((res) =>{
      console.log(res)
    })
  })
  return (
    <div><h1>Login page ??!!!</h1></div>
  )
}

export default Loginpage