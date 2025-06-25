import React from "react";
import ImageLgn from "../components/ImageLgn";
import './Login.css'
import BoasVindas from "../components/BoasVindas";
import InsData from "../components/InsData";
import BotaoLg from "../components/BotaoLg";
import SemConta from "../components/SemConta";

function Login()
{
    return(
        <>
            <div id="sides">
                <div id="insdt">
                    <BoasVindas/>
                    <InsData className="InsertData"/>
                    <BotaoLg/>

                    
                    <SemConta/>
                </div>
                <ImageLgn/>
            </div>
            
        </>

    )
}

export default Login;