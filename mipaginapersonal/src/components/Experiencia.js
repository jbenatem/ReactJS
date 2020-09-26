import React from 'react';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

const Experiencia = () => {
    return(
        <div>
            <h2>Experiencia Laboral</h2>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="02/2018 - 11/2018"
                    style={{color: '#e86971'}}
                >
                    <h3>Xperta Gestión Empresarial SAC</h3>
                    <h4>Practicante Pre-Profesional</h4>
                    <ol>
                        <li>Consultoría sobre Automatización de Procesos utilizando herramienta BPMS.</li>
                    </ol>
                    <ul>
                        <li>Conocimientos aplicados: Automatización de procesos, Notación BPMN, Processmaker, Javascript, SQL Server.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="12/2018 - 08/2019"
                    style={{color: '#e86971'}}
                >
                    <h3>Xperta Gestión Empresarial SAC</h3>
                    <h4>Analista de TI</h4>
                    <ol>
                        <li>Consultoría sobre desarrollo de un Chatbot para preguntas frecuentes sobre reclamos en SUNASS.</li>
                    </ol>
                    <ul>
                        <li>Conocimientos aplicados: Azure, Microsoft Bot Builder, C# / .NET, Inteligencia Artificial, Automatización de procesos, 
                            Notación BPMN, Bizagi Studio, Processmaker, Frontend, SQL Server.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="08/2019 - 12/2019"
                    style={{color: '#e86971'}}
                >
                    <h3>Instituto de Investigación Científica - IDIC</h3>
                    <h4>Practicante Pre-Profesional</h4>
                    <ol>
                        <li>Diseño de prototipo de reconocimiento de imágenes de bajo costo para estimulación en niños con discapacidad visual.</li>
                    </ol>
                    <ul>
                        <li>Conocimientos aplicados: Inteligencia Artificial, Deep Learning, Python, Raspberry Pi, Raspbian.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="01/2020 - 08/2020"
                    style={{color: '#e86971'}}
                >
                    <h3>Organismo Nacional de Sanidad Pesquera - SANIPES</h3>
                    <h4>Analista de Inteligencia Artificial</h4>
                    <ol>
                        <li>Desarrollo de Chatbot "Sanito Sabe" para página web de SANIPES.</li>
                        <li>Proyecto de Automatización en Bizagi Studio del procesos de emisión de protocolos técnicos para habilitación sanitaria de 
                            embarcaciones artesanales pesqueras y acuícolas.</li>
                        <li>Implementación de Casilla Electrónica.</li>
                    </ol>
                    <ul>
                        <li>Conocimientos aplicados: Inteligencia Artificial, Automatización de Procesos, Azure, Microsoft Bot Builder, C# / .NET, Frontend
                            Bizagi Studio, SQL Server, Power BI, Procesamiento de datos, Office 365, GIT, Scrum.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="005"
                    dateText="10/2020 - Presente"
                    style={{color: '#e86971'}}
                >
                    <h3>Everis Peru SAC</h3>
                    <h4>Solution Analyst - Nivel 1</h4>
                    <ol>
                        <li>Desarrollo de Chatbot para página web del Banco de Crédito del Perú - BCP.</li>
                    </ol>
                    <ul>
                        <li>Conocimientos aplicados: Inteligencia Artificial, Azure, Microsoft Bot Builder, C# / .NET, Frontend, Office 365.</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </div>
    )  
}

export default Experiencia;