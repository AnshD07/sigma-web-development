import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counterKey.value) 
    //! accesing value of store from useSelector Hook simple bro

    return (
        <div>This is value in Navbar : {count}</div>
    )
}

export default Navbar