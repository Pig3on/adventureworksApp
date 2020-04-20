import React from 'react'

function CountdownLoader({value, currentValue,stopTimer}) {
    return (
      <div onClick={stopTimer}>
            <div>{currentValue}</div>
            <div>{value}</div>
      </div>
    )
}

export default CountdownLoader
