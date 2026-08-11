"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

const NavBar = () => {
  const { data: session }  = useSession()

  return(
    <nav>
      <Link href="/">home</Link>
      {" | "}
      <Link href="/notes">notes</Link>
      {" | "}
      <Link href="/users">users</Link>
      {" | "}
      {session ? (
        <>
          <Link href="/notes/new">create new</Link>
          {" | "}
          <em>{session.user?.name} logged in</em>{" "}
          <button onClick={() => signOut()}>logout</button>
        </>
        ) : (
          <Link href="/login">login</Link>
        )
      }
    </nav>
  )
}

export default NavBar