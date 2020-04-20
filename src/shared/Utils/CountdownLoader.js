import React from 'react'
import { Progress } from 'antd'



const styles = {
    container: {
        width: 300,
        height: 80,
        position:'absolute',
        borderRadius:10,
        bottom:10,
        right:10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "black",
    }
}
function CountdownLoader({value, currentValue,stopTimer}) {
    return (
      <div onClick={stopTimer} style={styles.container}>
         <Progress percent={(currentValue/value) * 100} status="active" />
      </div>
    )
}

export default CountdownLoader
