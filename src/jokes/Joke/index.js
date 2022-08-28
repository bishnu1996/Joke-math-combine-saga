import './style.css';
import {useEffect} from 'react';
import Action from "../store/action";
import {useSelector,useDispatch} from 'react-redux'

const Joke = () => {

const joke = useSelector((state)=>state.joke.joke);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch({type:Action.FETCH_JOKE_REQUEST,payload:{joke:joke}})
},[])
const onGetGenrate = ()=>{
  dispatch({type:Action.FETCH_JOKE_REQUEST,payload:{joke:joke}})
}
  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick = {onGetGenrate} >
        Get Another Fact
      </button>
    </div>
  );
};
export default Joke;
