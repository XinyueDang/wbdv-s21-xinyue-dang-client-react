import React, { useState, useEffect } from 'react'
import OptionalElement from './optional-element'

const ListWidget = ({ item, updateWidget, deleteWidget }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {!editing && 
                <>
                    {!!item.widgetOrder && 
                        <>
                            <ol>
                                {item.text.split('\n').map((i) => {
                                    return <li key={i}>{i}</li>
                                })}
                            </ol>
                        </>
                    }
                    {!item.widgetOrder && 
                        <>
                            <ul>
                                {item.text.split('\n').map((i) => {
                                    return <li key = {i}>{i}</li>
                                })}
                            </ul>
                        </>
                    }
                     <i
                        onClick={() => setEditing(true)}
                        className="fas fa-cog"
                    ></i>
                </>
            }
            {editing && (
                <div>
                    <select
                        onChange={(e) => {
                            setItemCache({
                                ...itemCache,
                                type: e.target.value,
                            })
                        }}
                        value={itemCache.type}
                        className="form-control"
                    >
                        <option value={'HEADING'}>Heading</option>
                        <option value={'PARAGRAPH'}>Paragraph</option>
                        <option value={'LISTWIDGET'}>List Widget</option>
                    </select>
                    <OptionalElement item={itemCache} setItem={setItemCache} />
                    <i
                        onClick={() => {
                            setEditing(false)
                            updateWidget(itemCache)
                        }}
                        className="fas fa-check"
                    ></i>
                    <i
                        onClick={() => {
                            deleteWidget(item)
                            setEditing(false)
                        }}
                        className="fas fa-times"
                    ></i>
                </div>
            )}
        </>
    )
}

export default ListWidget
