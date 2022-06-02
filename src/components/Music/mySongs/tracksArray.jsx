import React from 'react'
import alof from './alof.mp3'
import indila from './indila.mp3'
import relax from './relaxMusic.mp3'
import mat5afesh from './mat5afesh.mp3'
import narkis1 from './narkis1.mp3'
import narkis2 from './blylot.mp3'
import newYork from './newYork.mp3'
import nwantiti from './nwantiti.mp3'
import sama1 from './sama1.mp3'
import bl2lb from './sama2.mp3'
import Wenk from './wenk.mp3'
import z3etr from './z3etr.mp3'

let tracksArray = [
    { audio: new Audio(relax), name: 'Relax', id: 1 },
    { audio: new Audio(newYork), name: 'newYork', id: 7 },
    { audio: new Audio(nwantiti), name: 'nwantiti', id: 8 },
    { audio: new Audio(indila), name: 'Indela', id: 3 },
    { audio: new Audio(alof), name: 'אלוף העולם', id: 2 },
    { audio: new Audio(narkis1), name: 'הולכת איתך', id: 5 },
    { audio: new Audio(narkis2), name: 'נרקיס לא עוזבת', id: 6 },
    { audio: new Audio(sama1), name: 'حبيتك', id: 9 },
    { audio: new Audio(bl2lb), name: 'بلقلب', id: 10 },
    { audio: new Audio(mat5afesh), name: 'متخافيش', id: 4 },
    { audio: new Audio(Wenk), name: 'وينك', id: 11 },
    { audio: new Audio(z3etr), name: 'زعيتر', id: 12 },
];

export default tracksArray;