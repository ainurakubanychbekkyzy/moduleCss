import CommentDate from "./CommentDate";
import UserInfo from "./UserInfo";
import Card from "./ui/Card";
import './Comment.css'

const Comment = (props) => {
    
    return (
        <Card className="comment">
            <UserInfo author={props.author}/>
            <div className="commentText">{props.text}</div>
            <CommentDate date={props.date}/>
        </Card>
    )
}

export default Comment;