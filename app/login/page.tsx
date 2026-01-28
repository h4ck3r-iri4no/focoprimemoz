"use client"

import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <main>
      <h1>Entrar</h1>
      <button onClick={() => signIn("github")}>
        Entrar com GitHub
      </button>
    </main>
  )
}
