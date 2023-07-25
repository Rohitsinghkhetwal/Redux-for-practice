import { useState } from "react"
import { styled } from "styled-components"
import { useDispatch } from "react-redux"
import { createUser } from "../store/ApiOperation";

const Forms = () => {
    const [users, setusers] = useState({});
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setusers({...users,[e.target.name]: e.target.value});
        
        console.log(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("this is user", users)
        dispatch(createUser(users));


    }



  return (
    <Wrapper>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="block">
                <label className="freeName">
                    Name:
                    <input 
                    type="text" 
                    placeholder="name"
                    name= "name"
                    className="space"
                    onChange={getUserData}
                    />
                </label>
            </div>
            <div className="block">
                <label className="freeName">
                    Email:
                    <input
                     type="email"
                     placeholder="email"
                     name="email"
                     className="space"
                     onChange={getUserData}
                     />
                </label>
            </div>
            <div className="block">
                <label className="freeName">
                    Age:
                    <input 
                    type="number"
                    placeholder="age"
                    name="age"
                    className="space"
                    onChange={getUserData}
                    />
                </label>
            </div>
            <div className="block">
                <p>Gender</p>
                <label>
                    Male:
                    <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={getUserData}
                    
                    
                    />
                </label>
                <label>
                    Female:
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={getUserData}
                   
                    />


                </label>
            </div>
            <button type="submit" className="btn">Submit</button>
               
            </form>
        </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`
margin: 20px;

.container {
    padding: 30px;
}
.block{
    padding-top: 20px;
    font-size: 20px
}
.space {
    padding: 10px;
    margin-left: 20px
}
.btn{
    padding: 10px;
    
}



`
export default Forms