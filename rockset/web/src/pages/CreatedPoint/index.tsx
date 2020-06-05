import React from 'react';
import { FiCheckCircle, FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import { Link } from 'react-router-dom';

const CreatedPoint = () => {
    return (
        <div id="page-created-point">
            <header id="page-created-point-header">
                <Link to="/">
                    <span>
                        <FiArrowLeft/>
                    </span>
                    <strong>Voltar</strong>
                    </Link>
            </header>
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