import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CountdownLoader from './CountdownLoader';


const DelayTriggerContext = React.createContext()
export const DelayTriggerProvider = DelayTriggerContext.Provider
export const DelayTriggerConsumer = DelayTriggerContext.Consumer
function DelayActionWrapper({children}) {
    const dispatch = useDispatch();
    const [count,setCount] = useState(0);
    const [maxValue,setMaxValue]= useState(0);
    const [isTicking, setIsTicking] = useState(false)
    const [actionToExecute,setActionToExecute] = useState(null);
    const [params, setActionParams] = useState(null);

    useEffect(()=> {
      const interval = setInterval(()=> {
        if(isTicking){
          
            setCount(count + 1);
            if(count === maxValue && actionToExecute) {
                dispatch(actionToExecute(...params)); 
                clearInterval(interval);
                setIsTicking(false);
            }
        }else {
            clearInterval(interval)
        }
      },1000)
      return () => {
          clearInterval(interval);
      }
    },[actionToExecute, count, dispatch, isTicking, maxValue, params])

    
    const executeActionAfter = (action,params,delay) => {
      setCount(0);
      setMaxValue(delay);
      setIsTicking(true)
      setActionToExecute(()=>{return action});
      setActionParams(params);
    }

    const stopTimer = () => {
        setIsTicking(false)
        setCount(0);
        setMaxValue(0);
        setActionToExecute(null)
        setActionParams(null);
    }
    return (
        <div>
            {isTicking && <CountdownLoader stopTimer={stopTimer} value={maxValue} currentValue={count}/>}
            <DelayTriggerProvider value={executeActionAfter}>
            {children}
            </DelayTriggerProvider>
        </div>
    )
}
export {DelayTriggerContext}
export default DelayActionWrapper
