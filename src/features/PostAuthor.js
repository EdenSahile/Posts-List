import { useSelector } from "react-redux"
import { selectAllUsers } from "./users/usersSlice"

const PostAuthor = ({userId}) => {

    const users=useSelector(selectAllUsers)
    console.log(users)

 const auteur=users.find(user=>user.id === userId)

console.log(auteur)
    
    return <span>
       by {auteur ? auteur.name : 'auteur inconnu'}
        </span>
}
export default PostAuthor