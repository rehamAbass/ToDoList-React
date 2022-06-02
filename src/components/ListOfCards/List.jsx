import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'

const GreenColors = [
    'rgba(10, 240, 117, 0.5)',
    'rgba(65, 105, 225, 0.5)', 'rgba(50, 17, 225, 0.5)',
    'rgba(55, 247, 100, 0.5)', 'rgba(10, 110, 247, 0.5)',
    'rgba(92, 200, 205, 0.5)'
]

let colors = [

    // 'rgba(255, 255, 1, 0.65)',
    // 'rgba(65, 105, 225, 0.65)', 'rgba(238, 232, 170, 0.65)',
    'rgba(255, 217, 0, 0.5)',
    'rgba(255, 127, 80, 0.5)', 'rgba(100, 148, 237, 0.5)',
    'rgba(255, 105, 180, 0.5)',
    'rgba(255, 248, 220, 0.5)', 'rgba(30, 143, 255, 0.5)',
    'rgba(184, 135, 11, 0.5)', 'rgba(255, 0, 255, 0.5)',
    'rgba(246, 166, 246, 0.5)', 'rgba(72, 209, 205, 0.5)',
    'rgba(50, 17, 235, 0.5)', 'rgba(60, 179, 114, 0.5)',
    'rgba(221, 160, 221, 0.5)', 'rgba(216, 112, 147, 0.5)',
    'rgba(255, 239, 213, 0.5)', 'rgba(152, 251, 152, 0.5)']

colors = GreenColors;
// colors = ['rgba(118,198,198,0.6)', 'rgba(66, 120, 230,0.6)'];
const Lists = ({ cards, deleteCard, deleteTaskServer, addTaskServer, taggleTaskServer }) => {


    let rand = Math.floor(Math.random(3456789));
    rand = 0;
    return (
        <div className='lists'>
            {cards.map((card, i) => {
                return (
                    <Card
                        key={i}
                        card={card}
                        deleteCard={deleteCard}
                        deleteTaskServer={deleteTaskServer}
                        taggleTaskServer={taggleTaskServer}
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