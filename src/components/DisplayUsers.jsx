import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components'
import { removeUser } from '../store/UserSlice';



const DisplayUsers = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => (
        state.userReducer
    ));


    const deleteuser = (id) => {
        dispatch(removeUser(id))
        console.log(id);


    }



  return (
    <Wrapper>
        {
            userData.map((items, id) => (
                <li key={id}>
                    {items}
                    <button className='btn btn-delete' onClick={() => deleteuser(id)}> Delete</button>
                </li>

            ))

        }


    </Wrapper>
  )
}

const Wrapper = styled.section`
margin: 20px;
padding-right: 20px;
    
`

export default DisplayUsers