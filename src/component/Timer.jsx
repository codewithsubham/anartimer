import React, { useContext, useEffect, useState } from 'react'
import useGlobalTimer from '../state/useStore';


const Timer = () =>
{

    let [time, setTime] = useState(0);
    let [stop, stopTimer] = useState(false)
    let globalTimerStatus = useGlobalTimer(state => state.globalTimerStatus)
    let resetTimer = useGlobalTimer(state => state.resetTimer)

    useEffect(() =>
    {
        setTime(0)
    }, [resetTimer])

    useEffect(() =>
    {

        let timer = setInterval(() =>
        {
            if (!globalTimerStatus)
                if (!stop)
                    setTime(time + 1)

        }, 1000);

        return () =>
        {
            clearInterval(timer)
        }

    }, [time, stop, globalTimerStatus])

    return (
        <>
            <div>{time}</div>
            <div>
                <button type="button" onClick={() =>
                {
                    stopTimer(true)
                }}>Stop</button>
                <button type="button" onClick={() =>
                {
                    stopTimer(false)
                }}>Start</button>
            </div>
        </>
    )
}

export default Timer