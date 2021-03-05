import React, {useState} from 'react'
import {Link} from 'react-router-dom';

const EditableItem = ({
    to="/",
    deleteItem,
    updateItem,
    item = {title:"some", _id:"ABC"}
}) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return(
        <>
            {
                !editing &&
            <>
                <Link className="nav-link" to={to}>
                    {item.title}
                </Link>
                <i onClick = {() => setEditing(true)} className="fas fa-edit"></i>
            </>
            }
            {editing &&
            <>
                <input 
                    onChange={(e) => 
                        {setItemCache({
                            ...itemCache, 
                            title: e.target.value})}}
                    value={itemCache.title}/>
                <i onClick={()=>
                    {setEditing(false)
                    updateItem(itemCache)
                    }} className="fas fa-check"></i>
                <i onClick={()=>deleteItem(item)} className="fas fa-times"></i>
            </>
            }
        </>
    )
}

export default EditableItem