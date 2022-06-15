import "./app-modal.css";
function AppModal({ title, content, handleModal }) {
    const closeModal = () => handleModal(false, "", "");
    return (
        <div className="modal app-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>{content}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}
                            data-bs-dismiss="modal"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppModal;
