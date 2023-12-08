import {useEffect} from "react";
import {authApi} from "../../api/api";

export const ServersColumn = () =>{
    useEffect(() => {
        authApi.get('/user')
    }, [])
    return <></>
}