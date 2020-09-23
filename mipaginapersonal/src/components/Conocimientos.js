import React from 'react';
import ProgressBar from './Progressbar';

const Conocimientos = () => {
    return(
        <div>
            <h2>Inteligencia Artificial y Machine Learning</h2>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Chatbots</th>
                    </tr>
                    <tr className="table-active">
                        <td>Microsoft Bot Builder Framework</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>Microsoft LUIS</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>Microsoft QnaMaker</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>ManyChat</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Algoritmos de Clasificación y Predicción</th>
                    </tr>
                    <tr className="table-active">
                        <td>Python (pandas, numpy, scikit-learn, matplotlib)</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Deep Learning</th>
                    </tr>
                    <tr className="table-active">
                        <td>Python (Tensorflow, Keras)</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Visión Computacional</th>
                    </tr>
                    <tr className="table-active">
                        <td>Python (OpenCV)</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr> 
                </tbody>
            </table>
            <h2>Cloud Computing</h2>
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <td>Microsoft Azure</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>Google Cloud Platform</td>
                        <td>
                            <ProgressBar
                                value={25}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Gestión por procesos</h2>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Modelado de procesos</th>
                    </tr>
                    <tr className="table-active">
                        <td>Notación BPMN</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>Bizagi Modeler</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>Visio</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Automatización de procesos</th>
                    </tr>
                    <tr className="table-active">
                        <td>Bizagi Studio</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>Processmaker</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                    </tr>   
                </tbody>
            </table>
            <h2>Análisis de datos</h2>
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <td>Transformación de datos</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>Power BI</td>
                        <td>
                            <ProgressBar
                                value={25}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Desarrollo Web</h2>
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Frontend</th>
                    </tr>
                    <tr className="table-active">
                        <td>HTML</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>CSS / Bootstrap</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>Javascript</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>ReactJS</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Backend</th>
                    </tr>
                    <tr className="table-active">
                        <td>Python (Django, Flask)</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                        <td>.NET Core</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>.NET Framework</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <h2>Lenguajes de Programación</h2>
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <td>Python</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>.NET / C#</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>Java</td>
                        <td>
                            <ProgressBar
                                value={25}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <h2>Bases de Datos</h2>
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <td>SQL Server</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>CosmosDB</td>
                        <td>
                            <ProgressBar
                                value={25}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>MongoDB</td>
                        <td>
                            <ProgressBar
                                value={25}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <h2>Otros</h2>
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <td>Office 365</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                        <td>Excel (Macros, VBA)</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>Metodología Ágil SCRUM</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                        <td>Gestión de versiones GIT</td>
                        <td>
                            <ProgressBar
                                value={50}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Idiomas</h2>
            <table className="table table-hover">
                <tbody>
                    <tr className="table-active">
                        <td>Español</td>
                        <td>
                            <ProgressBar
                                value={100}
                            />
                        </td>
                        <td>Inglés</td>
                        <td>
                            <ProgressBar
                                value={75}
                            />
                        </td>
                    </tr>
                    <tr className="table-active">
                        <td>Alemán</td>
                        <td>
                            <ProgressBar
                                value={25}
                            />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )  
}

export default Conocimientos;