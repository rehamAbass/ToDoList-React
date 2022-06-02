import Header from './components/Header/Header.jsx'
import './App.css';
import List from './components/ListOfCards/List.jsx'
import SignInButton from './components/SignInButton/signin.jsx'
import AddCardButton from './components/Buttons/AddCardButton/AddCard'
import React from 'react'
import { useState, useEffect } from 'react'
// import Music from './components/Music/Music.jsx';
import Head from './components/Head/Head.jsx';

import './myDataBase.json' 

function App() {
  const [cards, setCards] = useState([])
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
    // const res = await fetch('./myDataBase.json')

    const data = await res.json();
    if (res.status === 200) {
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
    // const res = await fetch(`./myDataBase.json/cards/${id}`, {
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
    // const res = await fetch(`./myDataBase.json/cards/${id}`);
    const res = await fetch(`http://localhost:5000/cards/${id}`);
    const data = await res.json()
    return data
  }
  //-------------------------------------------------------------------------------
  //Fetch Task
  const getTask = async (id_card, id_task) => {
    const res = await fetch(`http://localhost:5000/cards/${id_card}/tasks/${id_task}`)
    // const res = await fetch(`./myDataBase.json/cards/${id_card}/tasks/${id_task}`)
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
    const res = await fetch(`http://localhost:5000/cards/${id}`, {//./myDataBase.json/
    // const res = await fetch(`./myDataBase.json/cards/${id}`, {
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
    const res = await fetch('http://localhost:5000/cards', {//./ myDataBase.json
    // const res = await fetch('./ myDataBase.json/cards', {//./ myDataBase.json
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
    const data = await res.json()
    if (res.status === 200) {
      await fetchCards();
    }
    else { alert('Error Adding new card'); }
  }
  //-------------------------------------------------------------------------------------------------
  const taggleTask = async (id, id_task) => {
    let card = cards.filter(c => c.id === id);
    card = card[0];
    let myTask = card.tasks.filter(t => t.id === id_task);
    myTask = myTask[0];
    // myTask.completed = !myTask.completed;
    if (myTask.completed === true) { myTask.completed = false }
    else { myTask.completed = true; }

    let updatedTasks = card.tasks.filter(t =>
      t.id !== id_task ?
        t : myTask);

    let updatedCard = {
      id: id,
      title: card.title,
      tasks: updatedTasks
    }

    console.log("task.text = ", myTask.text, " , changed to completed =", myTask.completed);

    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      // const res = await fetch(`./myDataBase.json/cards/${id}`, {
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
    else { alert('Error change completed for task :', myTask.text); }
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

    // const res = await fetch(`./myDataBase.json/cards/${id}`, {
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
      <SignInButton />
      <Head />
      <Header />
      <AddCardButton addNewCard={addNewCard} />
      {cards.length <= 0 ? 'No CARDS' :
        <List
          cards={cards}
          deleteCard={deleteCard}
          deleteTaskServer={deleteTask}
          taggleTaskServer={taggleTask}
          addTaskServer={addTask} />}
    </div>
  );
}

export default App;
