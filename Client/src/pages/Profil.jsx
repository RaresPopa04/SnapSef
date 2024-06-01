import React, { useEffect, useState } from "react";

const Profil = () => {


    const [username,setUsername] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("username"))
            setUsername(localStorage.getItem("username"));
    },[])

    return (
        <div>
            Profil {username}
        </div>
    );
}

export default Profil;