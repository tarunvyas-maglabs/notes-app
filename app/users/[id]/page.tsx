import Link from "next/link"
import { getUserById } from "@/app/services/users"
import { notFound } from "next/navigation"

const UserPage = async ({ params }: { params: Promise<{id: string}>}) => {
  const { id } = await params
  const user = await getUserById(Number(id))

  if (!user) {
    notFound()
  }

  return(
    <div>
      <h2>{user.name}</h2>
      <p>username: {user.username}</p>
      <h3>Notes</h3>
      <ul>
        {user.notes.map(note => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.content}</Link>
            {note.important && <strong> (important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage