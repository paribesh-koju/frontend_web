import React,{useState} from 'react'
 
 
const Register = () => {
  //coding section
 
  //Make state variables
  //format(variableName, ChangingVarName, )
  const[firstname,setFirstName] = useState('')
  const[lastname,setlastName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[confirmPassword,setConfirmPassword] = useState('')
 
  //state for error
  const[firstnameerror,setFirstNameEror] = useState('')
  const[lastnameerror,setLastNameError] = useState('')
  const[emailerror,setEmailError] = useState('')
  const[passworderror,setPasswordError] = useState('')
  const[confirmpassworderror,setConfirmPasswordError] = useState('')
 
  const handleFirstname = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastname = (e) => {
    setlastName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfPassword =(e)=>{
    setConfirmPassword(e.target.value)
  }
 
  //Validation
  var validate=() =>{
    var isValid = true;
    if(firstname.trim()===''){
      setFirstNameEror('Please exter firstname')
      isValid = false;
    }
    if(lastname.trim()===''){
      setLastNameError('Please exter lastname')
      isValid = false;
    }
    if(email.trim()===''){
      setEmailError('Please exter email')
      isValid = false;
    }
    if(password.trim()===''){
      setPasswordError('Please exter password')
      isValid = false;
    }
    if(confirmPassword.trim()===''){
      setConfirmPasswordError('Please Confirm password')
      isValid = false;
    }
    if(password!== confirmPassword){
      setConfirmPasswordError("Password does not match")
      isValid = false;
    }
    return isValid;
  }
 
  const handleButton =(e)=>{
    e.preventDefault()
    var isValid = validate()
    if(!isValid){
      return;
    }
    console.log(firstname,lastname,email,password,confirmPassword)
 
  }
 
 
 
  return (
    <>
      <div className ='m-3'>
        <h1>Create an Account!</h1>
        <form>
          <label>FirstName:{firstname}</label>
          <input onChange={handleFirstname} type="text" className ='form-control' placeholder = 'Enter Your Firstname'/>
          {
            firstnameerror && <small>{firstnameerror}</small>
          }
 
          <label className='mt-3'>Lastname:{lastname}</label>
          <input onChange={handleLastname} type="text" className ='form-control' placeholder = 'Enter Your Lastname'/>
          {
            lastnameerror && <small>{lastnameerror}</small>
          }
 
          <label className='mt-3'>Email:{email}</label>
          <input onChange={handleEmail} type="Email" className ='form-control' placeholder = 'Enter Your Email'/>
          {
            emailerror && <small>{emailerror}</small>
          }
 
          <label className='mt-3'>Password:{password}</label>
          <input onChange={handlePassword} type="text" className ='form-control' placeholder = 'Enter Your Phone Number'/>
          {
            passworderror && <small>{passworderror}</small>
          }
 
          <label className='mt-3'>Confirm Password:{confirmPassword}</label>
          <input onChange={handleConfPassword} type="text" className ='form-control' placeholder = 'Enter Your Phone Number'/>
          {
            confirmpassworderror && <small>{confirmpassworderror}</small>
          }
 
          <button onClick={handleButton} className='btn btn-dark mt-3 w-100'> Create Account</button>
        </form>
      </div>
    </>
  )
}
 
export default Register