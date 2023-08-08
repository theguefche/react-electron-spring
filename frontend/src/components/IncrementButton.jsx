import React from 'react'
import "./increment.css"

import { useDispatch } from "react-redux"
import { incCounter } from '../features/CounterSlice'

export const IncrementButton = () => {

    const dispatch = useDispatch()

    return (
        <div className="button" onClick={()=> {dispatch(incCounter())}} data-tooltip="Increment Counter !">
            <div classNameName="button-wrapper">
                <div className="text">Increment</div>
                <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h7m7 0h-7m0 0V5m0 7v7" /></svg>
                </span>
            </div>
        </div>
    )
}
