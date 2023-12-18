'use client'

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';


const Facebook = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push("/")
    }
    return ( 
    <>
        Hello Facebook
        <Button variant="success">Back Home</Button>
        <div>
            <button onClick={()=> handleButton()}>Back Home</button>
        </div>
    </> );
}

export default Facebook; 