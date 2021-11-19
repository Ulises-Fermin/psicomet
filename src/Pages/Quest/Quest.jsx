import React from "react";
import styles from "./Quest.module.css";


function Quest() {
    return (
        <div id={styles.body}>
            <h1 id={styles.title}>Buscar especialista</h1>
            <div id={styles.containerQuest}>
                <input type="text" placeholder="Introduzca nombre del especialista" id={styles.name}></input>
                <button id={styles.button}>Buscar</button>
            </div>    
            <div id={styles.container}>
                <p>aqui va aja</p>
            </div>
          
        </div>
    );
  }
  
export default Quest;