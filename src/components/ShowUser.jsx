import { styled } from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { DeleteData, UpdateUser, showdata } from "../store/ApiOperation";

const ShowUser = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.apis)

  const usersData = () => {
    dispatch(showdata(show))

  }

  const Delete = (id) => {
    dispatch(DeleteData(id))
    

  }

  const update = (data) => {
    dispatch(UpdateUser(data));
    console.log("This is updated successfully --+++++++");


  }
  
  
  return (
    <Wrapper>
        <div>
            <h1>User Data</h1>
            <button onClick={() => usersData()}>Show Data</button>
            {
              show.data.map((item) => (
                
                <div key={item.id} className="myblock">
                  Name:{item.name}
                  <br/>
                 Email: {item.email}
                  <br/>
                  Age:{item.age}
                  <br/>
                  Gender: {item.gender}
                  <br/>
                  MYID: {item.id}
                  <button onClick={() => Delete(item.id)}>Delete User</button>
                  <button onClick={() => update(item)}>Update User</button>
                  
                  </div>
                
              ))
            }
            
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`



    

`

export default ShowUser