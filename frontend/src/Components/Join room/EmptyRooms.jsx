import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './ModalWindow/Modal.jsx'
import JoinBtn from './JoinBtn'
import RemoveBtn from './RemoveBtn'

function Room({ name, password, user, id, setModal }) {
    const props = { id, password, setModal }
    const { myRoom } = useSelector((store) => store.room)

    return (
        <div className="room">
            <div className="room-info">
                <h2>{name}</h2>
                <h3>{user}</h3>
            </div>
            {myRoom !== id ? <JoinBtn id={id} /> : <RemoveBtn {...props} />}
        </div>
    )
}

export default function Rooms() {
    const { rooms } = useSelector((store) => store)
    const [modal, setModal] = useState(false)

    return (
        <>
            {rooms.length ? (
                rooms.map((room) => (
                    <Room {...room} setModal={setModal} key={room.id} />
                ))
            ) : (
                <h1 className="h1-info">No empty rooms found.</h1>
            )}

            <Modal state={[modal, setModal]} />
        </>
    )
}
