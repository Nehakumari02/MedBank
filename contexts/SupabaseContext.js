import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useSession } from 'next-auth/react';

const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => {
  const [supabaseClient, setSupabaseClient] = useState(null);
  const [supabaseAccessToken, setSupabaseAccessToken] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    if(session && session.supabaseAccessToken && !supabaseAccessToken && session.supabaseAccessToken !== supabaseAccessToken){
      setSupabaseAccessToken(session.supabaseAccessToken);
      const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          global: {
            headers: session ? { Authorization: `Bearer ${session.supabaseAccessToken}` } : {},
          },
        }
      );
      setSupabaseClient(client);
    }
  }, [session]);

  return (
    <SupabaseContext.Provider value={supabaseClient}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => useContext(SupabaseContext);
