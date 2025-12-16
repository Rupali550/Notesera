import { useState } from 'react'


const CommentBox = ({ comments }) => {
const [commentList, setCommentList] = useState(comments)
const [text, setText] = useState('')


const addComment = () => {
if (text.trim()) {
setCommentList([...commentList, text])
setText('')
}
}


return (
<div>
<h4>Comments</h4>
{commentList.map((c, i) => <p key={i}>• {c}</p>)}
<textarea value={text} onChange={e => setText(e.target.value)} />
<button onClick={addComment}>Post</button>
</div>
)
}


export default CommentBox