import React, { useState, useEffect } from 'react'
import OptionalElement from './optional-element'

const ParagraphWidget = ({ item, updateWidget, deleteWidget }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {!editing && (
                <>
                    <p>{item.text}</p>
                    <i
                        onClick={() => setEditing(true)}
                        className="fas fa-cog"
                    ></i>
                </>
            )}
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

export default ParagraphWidget
