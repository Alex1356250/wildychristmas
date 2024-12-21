import '../index.css';
import { useState } from 'react';
import vignette from '../images/vignette.jpg';
import Modal from './Modal';

function Gift() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='christmas'>
            <div className = " container">

            <h2>✨🎨 C’est officiel : mon portfolio est en ligne ! 🎉🖥️</h2>
            <p> 📂💾 Après des heures de code, de design et de passion, je suis super fier de vous présenter mon portfolio : un espace dédié à mes projets, mes compétences et un peu de ma personnalité ! 🌟💻</p>
            <p>👾✨ Entrez dans mon univers : <a href="https://myportfolio-jade-mu.vercel.app" target="_blank" rel="noreferrer"> Viens voir mon portfolio </a>✨👾</p>
            <p>💡 Que trouverez-vous ?</p>
            <p>🎯 Mes projets web : explorations de JavaScript, frameworks modernes et plus encore.</p>
            <p>🛠️ Mes compétences techniques : toujours prêtes à évoluer !</p>
            <p>🌈 Une touche personnelle : parce que chaque développeur est unique !</p>
            <p>👉 Votre avis compte : dites-moi ce que vous en pensez, vos feedbacks sont les bienvenus !</p>
            <p>🎉🎮 Merci à tous ceux qui m’ont soutenu(e) dans cette aventure. C’est une nouvelle étape dans mon parcours, et je suis impatient de la partager avec vous. 🚀✨</p>
            <p>📬 Curieux ou en recherche d’un collaborateur pour vos projets web ? Échangeons !</p>
            

            <button type="button" className="buttongift" onClick={handleOpenModal}>Obtiens ton petit cadeau!</button>
            
            <p>#Portfolio #WebDevelopment #Créativité #Innovation</p>
        </div>
        <Modal show={showModal} onClose={handleCloseModal}>
            <img src={vignette} alt="vignette" id="vignette" />
        </Modal>
    </div>
    );
}

export default Gift;