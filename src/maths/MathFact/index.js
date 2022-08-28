import './style.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Action from "../store/action";
const MathFact = ()=>{
  const fact = useSelector((state)=>state.math.fact);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:Action.MATH_REQUEST_FACT,payload:{fact:fact}})
  },[])
  const onGetFact = ()=>{
    dispatch({type:Action.MATH_REQUEST_FACT,payload:{fact:fact}})
  }
    return(
        <div className='container'>
      <h3>Number Fact Challenge</h3>
      <div className='joke'>{fact}</div>
      <button className='btn' onClick={onGetFact}>
        Get Another Fact
      </button>
    </div>
    );
}
export default MathFact;