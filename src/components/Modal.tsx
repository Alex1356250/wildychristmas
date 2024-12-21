import '../index.css';
import vignette from '../images/vignette.jpg';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ show, onClose, children }: ModalProps) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>Fermer</button>
                <a className="modal-download" href={vignette} download={vignette}>Telecharger</a>
                {children}
            </div>
        </div>
    );
}

export default Modal;