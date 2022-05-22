import Header from './components/Header/Header.jsx'
import './App.css';
import List from './components/ListOfCards/List.jsx'
import SignMe from './components/Buttons/SignInButton/signin.jsx'
import AddCardButton from './components/Buttons/AddCardButton/AddCard'
import React from 'react'
import { useState, useEffect } from 'react'
function App() {
  const [cards, setCards] = useState([])
  //---------------------------------------------------------------------------------------------------
  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
    }
    getCards()

  }, [])
  //------------------------------------------------------------------------------------------------------
  // Fetch Tasks
  const fetchCards = async () => {
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json()
    setCards(data);
    return data
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
    if (res.status === 200) {
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
    if (res.status === 200) {
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
    if (res.status === 200) {
      // setCards([...cards, newCard])
      await fetchCards();
    }
  }
  //-------------------------------------------------------------------------------------------------
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
    if (res.status === 200) {
      await fetchCards();
    }
    else { alert('Error Deleting This Task'); }
  }
  //-------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <SignMe />
      <Header />
      <AddCardButton addNewCard={addNewCard} />
      {cards.length <= 0 ? 'No CARDS' :
        <List cards={cards}
          deleteCard={deleteCard}
          deleteTaskServer={deleteTask}
          addTaskServer={addTask} />}
    </div>
  );
}

export default App;
