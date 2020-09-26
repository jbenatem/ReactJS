import React from 'react';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

const Proyectos = () => {
    return(
        <div>
            <h2>Mis Proyectos Personales</h2>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="01/2020 - Presente"
                    style={{color: '#e86971'}}
                >
                    <h3>Proyecto de investigación para obtener el título profesional</h3>
                    <ol>
                        <li>Chatbot pediátrico para la orientación sobre Apendicitis Aguda basado en NLP y Árboles de Decisión.</li>
                    </ol>
                    <ul>
                        <li>Conocimientos aplicados: Inteligencia Artificial, Machine Learning, Azure, Microsoft Bot Builder Framework, C# / .NET, Python.</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </div>
    )  
}

export default Proyectos;