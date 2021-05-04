import React, { useState } from "react";
// import {useForm} from "react-hook-form";
import axios from 'axios';


function MessageMe(){
    const [msg, setMsg] = useState("")
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    function sendToDiscord(){
  axios.post('https://discord.com/api/webhooks/830847704225284108/C6uwMW2WQxvZ-fbHJmh2t4ZvZSzgQh7ttBiuHB5yQFoQ3N5sqQ_qwIyB0TIqQbxb-arQ', {
    content: `${name} wants to say: '${msg}' Their contact info is ${contact}.`
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
    return(
        <form onSubmit = {sendToDiscord}>
            <label>Name</label>
            <input type = "text" value = {name} onChange = {e => setName(e.target.value)}></input>
            <label>Message</label>
            <textarea  value = {msg} onChange = {e => setMsg(e.target.value)}></textarea>
            <label>Contact info</label>
            <input type = "text" value = {contact} onChange = {e => setContact(e.target.value)}></input>
            <input type = "submit"></input>
        </form>
        )
}

export default MessageMe;