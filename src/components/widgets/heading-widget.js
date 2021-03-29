import React, { useState } from 'react'
import OptionalElement from './optional-element'

const HeadingWidget = ({
    item,
    updateWidget,
    deleteWidget,
}) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    const handleChange = (e) => {
        const new_type = {
            ...itemCache,
            type: e.target.value,
        }
        setItemCache(new_type)
    }
    return (
        <>
            {!editing && (
                <>
                    {item.size === 1 && <h1>{item.text}</h1>}
                    {item.size === 2 && <h2>{item.text}</h2>}
                    {item.size === 3 && <h3>{item.text}</h3>}
                    {item.size === 4 && <h4>{item.text}</h4>}
                    {item.size === 5 && <h5>{item.text}</h5>}
                    {item.size === 6 && <h6>{item.text}</h6>}
                    <i
                        onClick={() => setEditing(true)}
                        className="fas fa-cog"
                    ></i>
                </>
            )}

            {editing && (
                <div>
                    <select
                        onChange={handleChange}
                        value={itemCache.type}
                        className="form-control"
                    >
                        <option value={'HEADING'}>Heading</option>
                        <option value={'PARAGRAPH'}>Paragraph</option>
                        <option value={'LISTWIDGET'}>List Widget</option>
                        <option value={'IMAGEWIDGET'}>Image Widget</option>
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

export default HeadingWidget
