import React, { useState } from 'react'

const OptionalElement = ({ item, setItem }) => {
    return (
        <>
            {item.type == 'HEADING' && (
                <>
                    <input
                        onChange={(e) => {
                            setItem({
                                ...item,
                                text: e.target.value,
                            })
                        }}
                        value={item.text}
                        className="form-control"
                    />
                    <select
                        onChange={(e) => {
                            setItem({
                                ...item,
                                size: parseInt(e.target.value),
                            })
                        }}
                        value={item.size}
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
            {item.type == 'PARAGRAPH' && (
                <>
                    <textarea
                        onChange={(e) => {
                            setItem({
                                ...item,
                                text: e.target.value,
                            })
                        }}
                        value={item.text}
                    />
                </>
            )}
            {item.type == 'LISTWIDGET' && 
                <>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    widgetOrder: e.target.checked ? 1 : 0
                                })
                            }}
                            checked = {item.widgetOrder=== 1? true: false}
                        />
                        <label
                            className="form-check-label"
                        >
                            Ordered
                        </label>
                    </div>
                    <h6>List Items</h6>
                    <textarea
                        onChange={(e) => {
                            setItem({
                                ...item,
                                text: e.target.value,
                            })
                        }}
                        value={item.text}
                    />
                </>
            }
        </>
    )
}

export default OptionalElement
