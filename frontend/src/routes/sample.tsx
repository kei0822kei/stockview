import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import useAuth, { isLoggedIn } from "@/hooks/useAuth"

export const Route = createFileRoute("/sample")({
  component: Sample,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      })
    }
  },
})

function Sample() {

  return (
    <>
      <p>This is sample page.</p>
    </>
  )
}
