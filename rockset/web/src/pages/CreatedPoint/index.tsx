import React from 'react';
import { FiCheckCircle} from 'react-icons/fi';
import './styles.css';

const CreatedPoint = () => {
    return (
        <div id="page-created-point">
            <div className="content-created-point">
                <main>
                    <FiCheckCircle/>
                    <h1>Cadastro concluído!</h1>
                </main>
            </div>
        </div>
    )
}

export default CreatedPoint;