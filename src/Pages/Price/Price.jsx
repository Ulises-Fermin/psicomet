import React from "react";
import styles from "./Price.module.css";
import house from '../../Images/House.jpg'
import clinica from '../../Images/clinica.jpg'
import maraca from '../../Images/Maraca.png'
import couple from '../../Images/Couple.png'
import psiquiatra from '../../Images/Psiquiatra.png'

function Price() {
  return (
    <div id={styles.body}>
      <div id={styles.title}>
        <h1>
          <a href="">Precios de consultas</a>
        </h1>
      </div>
      <div class={styles.container}>
        <div class={styles.card1}>
          <div class={styles.card_encabezado1}>
            <img src={clinica} alt="" />
          </div>
          <div class={styles.card_contenido}>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.subtitle}
            >
              Consulta clínica
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.priceConsult}
            >
              30$
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.info}
            >
              <p>Detecta y trata los</p>
              <p>desórdenes y</p>
              <p>patologías </p>
              <p>mentales que </p>
              <p>afectan al día </p>
              <p>a día.</p>
            </div>
          </div>
        </div>

        <div class={styles.card2}>
          <div class={styles.card_encabezado2}>
            <img src={maraca} alt="" />
          </div>
          <div class={styles.card_contenido}>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.subtitle}
            >
              Consulta infantil
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.priceConsult}
            >
              35$
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.info}
            >
              <p >Trata los </p>
              <p>fenómenos e </p> 
              <p>irregularidades   </p>
              <p>del desarrollo  </p>
              <p>psícologico del .</p>
              <p>niño</p>
            </div>
          </div>
        </div>

        <div class={styles.card3}>
          <div class={styles.card_encabezado3}>
            <img src={couple} alt="" />
          </div>
          <div class={styles.card_contenido}>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.subtitle}
            >
              Terapia de parejas
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.priceConsult}
            >
              45$
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.info}
            >
              <p>Intenta</p>
              <p>solucionar  </p>
              <p>problemas de   </p>
              <p>parejas, ya  </p>
              <p>sea para  </p>
              <p>reconciliarse o</p>
              <p>previo a una </p>
              <p>separación</p>
            </div>
          </div>
        </div>

        <div class={styles.card4}>
          <div class={styles.card_encabezado4}>
            <img src={house} alt="" />
          </div>
          <div class={styles.card_contenido}>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.subtitle}
            >
              Terapia de familia
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.priceConsult}
            >
              50$
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.info}
            >
              <p>Trata a varios</p>
              <p>smiembros de una</p>
              <p>familia cuando</p> 
              <p>pasan por</p> 
              <p>dificultades en su</p> 
              <p>convivencia.</p>
              
            </div>
          </div>
        </div>

        <div class={styles.card5}>
          <div class={styles.card_encabezado5}>
            <img src={psiquiatra} alt="" />
          </div>
          <div class={styles.card_contenido}>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.subtitle}
            >
              Psiquiatría
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.priceConsult}
            >
              50$
            </div>
            <div
              class={styles.info_personal}
              class={styles.desplazar}
              id={styles.info}
            >
              <p>Enfocada en el</p>
              <p>tratamiento y</p>
              <p>prevención de los</p>
              <p>trastornos mentales.</p>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
