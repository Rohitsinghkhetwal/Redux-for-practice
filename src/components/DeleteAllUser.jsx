import { styled } from "styled-components"
import { useDispatch } from "react-redux"
import { removeAllUser } from "../store/UserSlice";
const DeleteAllUser = () => {

    const dispatch = useDispatch();

    const ClearAll = () => {
       
        dispatch(removeAllUser())

    }

  return (
    <Wrapper >
        <button className=" btn clear-btn" onClick={() => ClearAll()}>Delete All</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 20px;

}

`

export default DeleteAllUser