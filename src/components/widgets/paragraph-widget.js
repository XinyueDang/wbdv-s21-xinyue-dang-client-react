import React, { useState, useEffect } from 'react'

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
                    </select>
                    <textarea
                        onChange={(e) => {
                            setItemCache({
                                ...itemCache,
                                text: e.target.value,
                            })
                        }}
                        value={itemCache.text}
                    />
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
