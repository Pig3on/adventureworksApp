import React from 'react'
import { Spin, Card } from 'antd'

function UserData({customer,isLoading,billId}) {
    if(isLoading || !customer) {
        return (
            <Spin/>
        )
    }

    return (
    <Card title="Customer info" bordered={false}>
        <div>{customer.Name}</div>
        <div>{billId}</div>
        <div>{customer.Telephone}</div>
        <div>{customer.Email}</div>
      </Card>
    )
}

export default UserData
