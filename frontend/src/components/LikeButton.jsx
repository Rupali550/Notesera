import { useState } from 'react'


const LikeButton = ({ initialLikes }) => {
const [likes, setLikes] = useState(initialLikes)


return (
<button onClick={() => setLikes(likes + 1)}>
❤️ {likes}
</button>
)
}


export default LikeButton