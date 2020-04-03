import React, { useRef } from 'react';
import { Input } from 'antd';
import { setSearchTerm } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';


const SearchFilter = () => {
    const dispatch = useDispatch();
    const input = useRef(null);

    return (
        <Input ref={input} placeholder={"enter search"} onChange={debounce(()=> {dispatch(setSearchTerm(input.current.state.value))},1000)} />
    )
}

export default SearchFilter