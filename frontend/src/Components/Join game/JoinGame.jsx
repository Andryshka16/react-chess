import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalWindow } from './ModalWindow'
import { Room } from './Room'

export default function JoinGame() {
    const { rooms } = useSelector((store) => store)
    const [modal, setModal] = useState(false)

    return (
        <>
            {rooms.map((room) => (
                <Room {...room} setModal={setModal} key={room.id} />
            ))}
            <ModalWindow modalWindow={[modal, setModal]} />
        </>
    )
}
