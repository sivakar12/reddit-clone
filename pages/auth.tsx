import React from "react"


import { Auth as SuperBaseAuth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Auth() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div>
        <SuperBaseAuth 
            supabaseClient={supabase} 
            providers={['google']} 
            appearance={{ theme: ThemeSupa }} 
        />
    </div>
  )
}