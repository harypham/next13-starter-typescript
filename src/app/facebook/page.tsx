"use client"

import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button';



const Facebook = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
    }

    return(
        <div>
            facebook
            <Button variant='success'>Home</Button>
            <div><button onClick={() => handleBtn()}>Back to home</button></div>
        </div>
    )
}

export default Facebook