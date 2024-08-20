'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Inputs } from './components/Login'
import { headers } from 'next/headers'

// import { createClient } from '@/utils/supabase/server'

const headersList = headers();
const host = headersList.get("host");
const protocol = host?.includes("localhost") ? "http" : "https";
const redirectUrl = `${protocol}://${host}/auth/callback`;
export async function login(formData: Inputs) {
  const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOtp({
        email: formData.email,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: false,
          emailRedirectTo: redirectUrl,
        },
      })
      console.log(error)
    

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
}

export async function signup(formData: Inputs) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: '234444'
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}