'use client'

import { useRouter } from "next/navigation";

const Facebook = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push("/")
    }
    return ( 
    <>
        Hello Facebook
        <div>
            <button onClick={()=> handleButton()}>Back Home</button>
        </div>
    </> );
}

export default Facebook; 