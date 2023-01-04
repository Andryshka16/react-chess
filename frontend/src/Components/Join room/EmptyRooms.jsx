import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal.jsx'
import Button from './Button'

function Room({ name, password, user, id, setModal }) {
    const props = { id, password, setModal }

    return (
        <div className="room">
            <div className="room-info">
                <h2>{name}</h2>
                <h3>{user}</h3>
            </div>
            <Button {...props} />
        </div>
    )
}

export default function Rooms() {
    const { rooms } = useSelector((store) => store)
    const [modal, setModal] = useState(false)

    return (
        <>
            {rooms.map((room) => (
                <Room {...room} setModal={setModal} key={room.id} />
            ))}
            {!rooms.length && (
                <h1 className="h1-info">No empty rooms found.</h1>
            )}
            <Modal state={[modal, setModal]} />
        </>
    )
}
