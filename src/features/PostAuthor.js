import { useSelector } from "react-redux"
import { selectAllUsers } from "./users/usersSlice"

const PostAuthor = ({userId}) => {

 const users=useSelector(selectAllUsers)

const auteur=users.find(user=>user.id === userId)

return <span>
       by {auteur ? auteur.name : 'auteur inconnu'}
        </span>
}
export default PostAuthor