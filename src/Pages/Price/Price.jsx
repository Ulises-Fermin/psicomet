import React from "react";
import styles from "./Price.module.css";

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
            <img src="logoTwitter.jpg" alt="" />
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
              <p>
                Detecta y trata los desórdenes y patologías mentales que afectan
                al día a día.
              </p>
            </div>
          </div>
        </div>

        <div class={styles.card2}>
          <div class={styles.card_encabezado2}>
            <img src="logoTwitter.jpg" alt="" />
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
              <p>
                Trata los fenómenos e irregularidades del desarrollo psíquico
                del niño.
              </p>
            </div>
          </div>
        </div>

        <div class={styles.card3}>
          <div class={styles.card_encabezado3}>
            <img src="logoTwitter.jpg" alt="" />
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
              <p>
                Intenta solucionar problemas de parejas, ya sea para
                reconciliarse o previo a una separación.
              </p>
            </div>
          </div>
        </div>

        <div class={styles.card4}>
          <div class={styles.card_encabezado4}>
            <img src="logoTwitter.jpg" alt="" />
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
              <p>
                Trata a varios miembros de una familia cuando pasan por
                dificultades en su convivencia.
              </p>
            </div>
          </div>
        </div>

        <div class={styles.card5}>
          <div class={styles.card_encabezado5}>
            <img src="logoTwitter.jpg" alt="" />
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
              <p>
                Enfocada en el tratamiento y prevención de los trastornos
                mentales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
