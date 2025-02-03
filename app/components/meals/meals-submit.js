"use client";

import { useActionState } from "react";

export default function MealsSubmit(){
    const {pending} = useActionState();
    return (
        <>
           <button disabled={pending}>{pending ? "Submitting..." : "Share meal"}</button> 
        </>
    )
}