export default function CancelBtn({ closeModal }) {
    return (
        <button className="btn cancel-btn" onClick={() => closeModal()}>
            Cancel
        </button>
    )
}
