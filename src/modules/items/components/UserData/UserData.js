import React from 'react'
import { Spin } from 'antd'

function UserData({customer,isLoading,billId}) {
    if(isLoading || !customer) {
        return (
            <Spin/>
        )
    }

    return (
       <div>
        <div>{customer.Name}</div>
        <div>{billId}</div>
        <div>{customer.Telephone}</div>
        <div>{customer.Email}</div>
       </div>
    )
}

export default UserData
