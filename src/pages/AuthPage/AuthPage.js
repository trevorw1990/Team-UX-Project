import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx"
import { useState } from "react";

export default function AuthPage({ user, setUser }){
    
    return(
        <main>
            <div>
           <SignUpForm />
            </div>

        </main>
    )

}