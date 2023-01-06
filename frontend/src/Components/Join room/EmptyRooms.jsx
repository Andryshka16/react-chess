import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './ModalWindow/Modal.jsx'
import JoinBtn from './JoinBtn'
import RemoveBtn from './RemoveBtn'

function Room({ name, password, user, id, setModal }) {
    const props = { id, password, setModal }
    const { id: ID } = useSelector((store) => store.thisRoom)

    return (
        <div className="room">
            <div className="room-info">
                <h2>{name}</h2>
                <h3>{user}</h3>
            </div>
            {ID !== id ? <JoinBtn {...props} /> : <RemoveBtn id={id} />}
        </div>
    )
}

export default function Rooms() {
    const { emptyRooms } = useSelector((store) => store)
    const [modal, setModal] = useState(false)

    return (
        <>
            {emptyRooms.length ? (
                emptyRooms.map((room) => (
                    <Room {...room} setModal={setModal} key={room.id} />
                ))
            ) : (
                <h1 className="h1-info">No empty rooms found.</h1>
            )}

            <Modal state={[modal, setModal]} />
        </>
    )
}
