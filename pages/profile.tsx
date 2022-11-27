import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
// import { Database } from '../utils/database.types'
// type Profiles = Database['public']['Tables']['profiles']['Row']

export default function Profile({ session }: { session: Session }) {
    const user = useUser();
    const supabase = useSupabaseClient();

    const [profile, setProfile] = useState<any>(null);

    const fetchProfileData = async () => {
        const { data, error,  } = await supabase
            .from('profiles')
            .select('id, username, avatar_url')
            .eq('id', user?.id)
            .single()
        if (error) {
            alert(error)
        } else {
            setProfile(data)
        }
    }
    useEffect(() => {
        fetchProfileData()
    }, [user])
    return (
        <div>
            {JSON.stringify(profile)}
        </div>
    )
}