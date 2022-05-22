import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'

const colors = [
    'rgba(255, 105, 180, 0.45)', 'rgba(255, 217, 0, 0.451)',
    'rgba(255, 127, 80, 0.45)', 'rgba(100, 148, 237, 0.557)',
    'rgba(255, 248, 220, 0.44)', 'rgba(30, 143, 255, 0.4539)',
    'rgba(184, 135, 11, 0.4623)', 'rgba(255, 0, 255, 0.4562)',
    'rgba(246, 166, 246, 0.4689)', 'rgba(72, 209, 205, 0.4541)',
    'rgba(50, 17, 235, 0.454)', 'rgba(60, 179, 114, 0.477)',
    'rgba(255, 228, 181, 0.479)', 'rgba(188, 143, 143, 0.42)',
    'rgba(65, 105, 225, 0.42)', 'rgba(238, 232, 170, 0.42)',
    'rgba(221, 160, 221, 0.4505)', 'rgba(216, 112, 147, 0.4514)',
    'rgba(255, 239, 213, 0.507)', 'rgba(152, 251, 152, 0.498)']

const Lists = ({ cards, deleteCard, deleteTaskServer, addTaskServer }) => {
    let rand = Math.floor(Math.random(100000));
    return (
        <div className='lists'>
            {cards.map((card, i) => {
                return (
                    <Card
                        key={i}
                        card={card}
                        deleteCard={deleteCard}
                        deleteTaskServer={deleteTaskServer}
                        addTaskServer={addTaskServer}
                        background={colors[(rand + i) % colors.length]}
                    />
                )
            })
            }
        </div >

    )
}

export default Lists;