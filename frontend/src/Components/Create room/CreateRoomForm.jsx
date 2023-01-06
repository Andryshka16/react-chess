import { useState } from 'react'
import { CreateButton } from './CreateButton'
import { NameInput } from './NameInput'
import { PasswordInput } from './PasswordInput'

export default function Form() {
    const globalState = useState({ name: '', password: '' })

    return (
        <div className='form-div'>
            <NameInput globalState={globalState} />
            <PasswordInput globalState={globalState} />
            <CreateButton globalState={globalState} />
        </div>
    )
}
