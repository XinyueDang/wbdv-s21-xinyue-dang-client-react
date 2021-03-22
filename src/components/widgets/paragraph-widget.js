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
                    {itemCache.type == 'HEADING' && (
                        <>
                            <input
                                onChange={(e) => {
                                    setItemCache({
                                        ...itemCache,
                                        text: e.target.value,
                                    })
                                }}
                                value={itemCache.text}
                                className="form-control"
                            />
                            <select
                                onChange={(e) => {
                                    setItemCache({
                                        ...itemCache,
                                        size: parseInt(e.target.value),
                                    })
                                }}
                                value={itemCache.size}
                                className="form-control"
                            >
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                        </>
                    )}
                    {itemCache.type == 'PARAGRAPH' && (
                        <>
                            <textarea
                                onChange={(e) => {
                                    setItemCache({
                                        ...itemCache,
                                        text: e.target.value,
                                    })
                                }}
                                value={itemCache.text}
                            />
                        </>
                    )}
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
