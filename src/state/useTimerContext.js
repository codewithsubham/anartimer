import { createContext, useState } from 'react';

//create a context, with createContext api
export const useTimerContext = createContext();

const UseTimerContextProvider = (props) =>
{
    // this state will be shared with all components 
    const [globalStop, setGlobalStop] = useState(true);

    return (
        // this is the provider providing state
        <useTimerContext.Provider value={[globalStop, setGlobalStop]}>
            {props.children}
        </useTimerContext.Provider>
    );
};

export default UseTimerContextProvider;