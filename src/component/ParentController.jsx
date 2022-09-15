import React, { useContext } from 'react'
import useGlobalTimer from '../state/useStore'
import { useTimerContext } from '../state/useTimerContext'

const ParentController = () =>
{
    //let [globalStop, setGlobalStop] = useContext(useTimerContext)
    let setGlobalTimerStatus = useGlobalTimer(state => state.setGlobalTimerStatus)
    let setResetTimer = useGlobalTimer(state => state.setResetTimer)
    return (
        <>
            <div>ParentController</div>
            <button type="button" onClick={() =>
            {
                setGlobalTimerStatus(false)
            }}>Global Start</button>
            <button type="button" onClick={() =>
            {
                setGlobalTimerStatus(true)
            }}>Global Stop</button>
            <button type="button" onClick={() =>
            {
                setResetTimer()
            }}>Reset</button>
        </>
    )
}

export default ParentController