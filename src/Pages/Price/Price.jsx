import React from "react";
import styles from "./Price.module.css";

function Price() {
    return(
        <div id={styles.body}>
            <div id={styles.title}>
                <h1><a href="">Precios de Consultas</a></h1>
            </div>
            <div class={styles.container}>
                <div class={styles.card1}>
                    <div class={styles.card_encabezado1}>
                        <img src="logoTwitter.jpg" alt=""/>
                    </div>   
                    <div class={styles.card_contenido}>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.subtitle}>Traumatologia</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.priceConsult}>30$</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.info}>
                            <p>Se encarga de afrontar traumas por problemas personales o laborales</p>
                        </div>
                    </div>
                </div>

                <div class={styles.card2}>
                    <div class={styles.card_encabezado2}>
                        <img src="logoTwitter.jpg" alt=""/>
                    </div>   
                    <div class={styles.card_contenido}>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.subtitle}>Consulta infantil</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.priceConsult}>35$</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.info}>
                            <p>Trata cualquier tipo de tema escala infantil</p>
                        </div>
                    </div>
                </div>

                <div class={styles.card3}>
                    <div class={styles.card_encabezado3}>
                        <img src="logoTwitter.jpg" alt=""/>
                    </div>   
                    <div class={styles.card_contenido}>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.subtitle}>Terpia en pareja</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.priceConsult}>45$</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.info}>
                            <p>Busca recomendar como solucionar problemas o terminar de la mejor forma</p>
                        </div>
                    </div>
                </div>

                <div class={styles.card4}>
                    <div class={styles.card_encabezado4}>
                        <img src="logoTwitter.jpg" alt=""/>
                    </div>   
                    <div class={styles.card_contenido}>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.subtitle}>Terapia en familia</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.priceConsult}>50$</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.info}>
                            <p>Si limite de miembros, da recomendaciones sobre la convivencia</p>
                        </div>
                    </div>
                </div>

                <div class={styles.card5}>
                    <div class={styles.card_encabezado5}>
                        <img src="logoTwitter.jpg" alt=""/>
                    </div>   
                    <div class={styles.card_contenido}>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.subtitle}>Hipnosis</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.priceConsult}>80$</div>
                        <div class={styles.info_personal} class={styles.desplazar} id={styles.info}>
                            <p>Investiga sobre los problemas a traves de los suenos</p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Price;