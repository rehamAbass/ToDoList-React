import Header from './components/Header/Header.jsx'
import './App.css';
import List from './components/ListOfCards/List.jsx'
import SignInButton from './components/SignInButton/signin.jsx'
import AddCardButton from './components/Buttons/AddCardButton/AddCard'
import React from 'react'
import { useState, useEffect } from 'react'
import Head from './components/Head/Head.jsx';
import hh from './hh.mp4'

function App() {
  const [cards, setCards] = useState([
    {
      "id": 189689,
      "title": "ספר ארץ מובטחת",
      "tasks": [
        {
          "id": 14687,
          "completed": false,
          "text": "הנשיא של ארצות הברית"
        },
        {
          "id": 18185,
          "completed": false,
          "text": "we trust only GOD"
        }
      ]
    }, {
      "id": 166589,
      "title": "I love CHE$$",
      "tasks": [{
        "id": 14487,
        "completed": false,
        "text": "I am gonna play with Ahmad"
      },
      {
        "id": 19999,
        "completed": false,
        "text": "I am gonna play with Salah"
      },
      {
        "id": 122229,
        "completed": false,
        "text": "I am gonna play in level three"
      }, {
        "id": 11119,
        "completed": false,
        "text": "mmmmmmm....."
      }]
    },
    {
      "id": 177779,
      "title": "React",
      "tasks": [
        {
          "id": 14666,
          "completed": false,
          "text": "Hooks"
        },
        {
          "id": 22225,
          "completed": false,
          "text": "UseState and ... UseEffect"
        }
      ]
    }
  ])
  //---------------------------------------------------------------------------------------------------
  useEffect(() => {
    const getCards = async () => {
      let cardsFromServer = await fetchCards();
      console.log("cards from server = ", cardsFromServer);
    }
    getCards()

  }, [])
  //------------------------------------------------------------------------------------------------------
  // Fetch Tasks
  const fetchCards = async () => {
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json();
    if (res.status < 300 && res.status >= 200) {
      setCards(data);
      return data
    }
    else {
      alert("can not fetch data! ");
    }
  }
  //---------------------------------------------------------------------
  const deleteCard = async (id) => {
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    });
    let data = await res.json();
    if (res.status < 300 && res.status >= 200) {
      await fetchCards();
    }
  }
  //---------------------------------------------------------------------------------------------------
  //fetch card
  const getCard = async (id) => {
    const res = await fetch(`http://localhost:5000/cards/${id}`);
    const data = await res.json()
    return data
  }
  //-------------------------------------------------------------------------------
  //Fetch Task
  const getTask = async (id_card, id_task) => {
    const res = await fetch(`http://localhost:5000/cards/${id_card}/tasks/${id_task}`)
    const data = await res.json()
    return data
  }
  //-------------------------------------------------------------------------------------------------
  const addTask = async (id, text) => {
    let card = cards.filter(c => c.id === id);
    card = card[0];
    let updatedTasks = card.tasks;
    let newTask = {
      id: Math.floor(Math.random() * 20000) + 1,
      completed: false,
      text: text
    }
    updatedTasks = [...updatedTasks, newTask];
    const updatedCard = { id: id, title: card.title, tasks: updatedTasks }
    let ourCards = cards.map(c => c.id === id ? updatedCard : c);
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      // setCards(ourCards);
      await fetchCards();
    }
  }
  //-----------------------------------------------------------------------------------------------
  const addNewCard = async (title) => {
    let newId = Math.floor(Math.random() * 17890) * 31;
    let newCard = { id: newId, title: title, tasks: [] }
    const res = await fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      await fetchCards();
    }
    else { alert('Error Adding new card'); }
  }
  //-------------------------------------------------------------------------------------------------
  const toggleTask = async (id, id_task) => {
    let card = cards.filter(c => c.id === id);
    card = card[0];
    console.log("in toggle , card name = ", card.title);
    let task = card.tasks.filter(t => t.id === id_task);
    task = task[0];
    console.log("in toggle , task id = ", task.id, " - completed = ", task.completed);
    task.completed = !task.completed;

    let updatedTasks = card.tasks.map(t => t.id === id_task ? task : t);

    let updatedCard = {
      id: id,
      title: card.title,
      tasks: updatedTasks
    }

    console.log("task.id = ", task.id, " , changed to completed =", task.completed);

    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      await fetchCards();
    }
    else { alert('Error change completed for task :', task.id); }
  }
  //========================================================================
  // Delete Task
  const deleteTask = async (id, id_task) => {
    let card = cards.filter(c => c.id === id);
    card = card[0];
    let updatedTasks = card.tasks.filter(t => t.id !== id_task);

    let updatedCard = {
      id: id,
      title: card.title,
      tasks: updatedTasks
    }
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      await fetchCards();
    }
    else { alert('Error Deleting This Task'); }
  }
  //-------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <SignInButton />
      <Head />
      <Header />
      <AddCardButton addNewCard={addNewCard} />
      <video autoplay={true} controls loop
        // src={hh}
        src='https://prod-streaming-video-msn-com.akamaized.net/e908e91f-370f-49ad-b4ce-775b7e7a05b4/a6287f74-46f0-42f9-b5d9-997f00585696.mp4'
        style={{
          width: '100%',
          height: '100%',
          opacity: '0.95',
          zIndex: "-1",
          position: "fixed",
          right: "0",
          bottom: "0.4"
        }} />
      {cards.length <= 0 ? 'No CARDS' :
        <List
          cards={cards}
          deleteCard={deleteCard}
          deleteTaskServer={deleteTask}
          toggleTaskServer={toggleTask}
          addTaskServer={addTask} />}
    </div>
  );
}

export default App;
