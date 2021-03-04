import React, {useState} from 'react'


const EditableItem = ({
    deleteItem,
    item = {title:"some", _id:"ABC"}
}) => {
    const [editing, setEditing] = useState(false)

    return(
        <>
            {
                !editing &&
            <>
                <a className="nav-link" href="#">
                    {item.title}
                </a>
                <i onClick = {() => setEditing(true)} className="fas fa-edit"></i>
            </>
            }
            {editing &&
            <>
                <input/>
                <i onClick={()=>setEditing(false)} className="fas fa-check"></i>
                <i onClick={()=>deleteItem(item), setEditing(false)} className="fas fa-times"></i>
            </>
            }
        </>
    )
}

export default EditableItem