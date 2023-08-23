import React from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/AuthContext';

const ProtectRoute = ({children}) => {
    const {user} = UserAuth()
    const router = useRouter()

    if (!user) {
        return router.push('/')
    }else{
        return children
    }

   
}

export default ProtectRoute;