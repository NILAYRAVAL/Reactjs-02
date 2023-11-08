import React, { createContext, useState } from 'react'
import UseContext01 from './UseContext01'


export const NameContext =  createContext()
export const changeContext = createContext()

function MainContext() {
    const [first, setfirst] = useState("Frontend")
  return (
    <>

    <NameContext.Provider value={first}>
       <changeContext.Provider value={"Technology"}>
            <UseContext01/>
       </changeContext.Provider>        
    </NameContext.Provider>
    </>
  )
}

export default MainContext