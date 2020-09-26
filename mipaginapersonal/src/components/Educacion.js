import React from 'react';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

const Educacion = () => {
    return(
        <div>
            <h2>Educación</h2>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="04/2014 - 12/2019"
                    style={{color: '#e86971'}}
                >
                    <h3>Universidad de Lima</h3>
                    <h4>Bachiller de Ingeniería de Sistemas</h4>
                    <ul>
                        <li>Orden de mérito: Tercio Superior</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </div>
    )  
}

export default Educacion;