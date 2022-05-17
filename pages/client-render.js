import { useEffect, useState } from "react";
import Link from 'next/link'

export default function ClientRender(){ 
    const [catFact, setCatFact]= useState("");
    const getCatFact = async () =>{
        const {fact} =  await fetch("https://catfact.ninja/fact")
        .then(async (res) => await res.json())
        .catch(() => {});
        setCatFact(fact);
    }
    useEffect( () => {
        getCatFact();
    }, []);
    return (
        <div>
            <h1>{catFact}</h1>
            <Link href="/">
                <a>Para a home</a>
            </Link>
        </div>
    )
}