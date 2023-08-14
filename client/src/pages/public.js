import React, {useEffect} from 'react';
import { useAuth } from '../Hooks/AuthHook';

function Home() {
    const { data, home } = useAuth();
    useEffect(()=>{
        home()
    },[])
   

  return (
    <div>
        public
        {JSON.stringify(data)}
    </div>
  )
}

export default Home
