import React from 'react';
import ProtectRoute from '@/components/ProtectRoute';
import Head from 'next/head';

function Account(props) {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>
            <ProtectRoute>
               <></> 
            </ProtectRoute>
        </>
        
    );
}

export default Account;