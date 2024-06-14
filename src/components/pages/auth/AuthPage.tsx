'use client';
import Spinner from '@/components/core/spinner/Spinner';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const AuthPage = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status }: any = useSession({ required: true });
  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut(); 
    }
  }, [session]);
  if (status === 'authenticated') {
    // console.log(session)
    return children;
  }
  return (
    <div className="flex items-center justify-center h-screen bg-tmlt-Primary-8 bg-opacity-50">
      <Spinner />
    </div>
  );
};

export default AuthPage;
