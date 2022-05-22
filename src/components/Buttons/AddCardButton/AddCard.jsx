import './AddCard.css'
import React from 'react'
import { useState } from 'react'
import '../../input.css'

const AddCardButton = ({ addNewCard }) => {

    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Please add a title')
            return
        }
        addNewCard(title)
        setTitle('')
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                type='text'
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type='submit' className='addList'>add Card</button>
        </form >
    )
}


export default AddCardButton;