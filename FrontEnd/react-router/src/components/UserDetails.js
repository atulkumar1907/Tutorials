import { useParams } from "react-router-dom"

export function UserDetails(){

   const { userId } = useParams()

   return <div>User Details {userId}</div>
}