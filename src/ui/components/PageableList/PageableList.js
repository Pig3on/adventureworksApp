import React, { useState, useCallback, useEffect } from 'react'
import { Button } from 'antd';




export const PageableList = ({items, renderItem, itemsPerPage}) => {
    const [page,setCurentPage] = useState(0);
    const [pagedItems, setPagedItems] = useState([])
    
    const calculatePagedItems = useCallback(()=> {
        const tempArray = []
        for (let i = 0; i < items.length; i+= itemsPerPage) {
           const temparray = items.slice(i,i+itemsPerPage);
           console.log(temparray)
           tempArray.push(temparray);
        }
        setPagedItems(tempArray);
    },[items, itemsPerPage])

    useEffect(() => {
        calculatePagedItems();
    },[calculatePagedItems, items, itemsPerPage])
    
    if(pagedItems.length <= 0) {
        return null;
    }
    
    return (
            <div>
            {
            pagedItems[page].map((item)=> {
                return renderItem(item);
            })
            }
            <div>
                {pagedItems.map((item,index)=> {
                    return (
                    <Button onClick={()=> setCurentPage(index)}>{index}</Button>
                    )
                })}
            </div>
            </div> 
    )
}