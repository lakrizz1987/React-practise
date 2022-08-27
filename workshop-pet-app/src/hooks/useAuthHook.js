import {useState} from 'react';


const useAuthHook = (key,value) =>{
    const [user,setUser] = useState(()=>{

        const item = localStorage.getItem(key);
        
        if(item){
            return JSON.parse(item);
        }else{
            return value
        }
    });

    const setItem = (value) =>{
        localStorage.setItem(key,JSON.stringify(value));
        setUser(value)
    } 

    return [user,setItem]
    
}

export default useAuthHook;