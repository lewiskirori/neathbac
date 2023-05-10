import "./commentSection.scss"

const CommentSection = () => {
return (
<div className="commentSection">
<h3>Comments</h3>
<div className="comments">
<div className="comment">
<div className="user">
<img src="https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
<p>Snow</p>
</div>
<p className="time">2 hours ago</p>
<p className="commentText">Great tips! I've been struggling to keep my home organized and clean, but these suggestions seem practical and doable. 
I particularly like the idea of creating a cleaning routine and decluttering regularly. Thanks for sharing!
</p>
</div>
<div className="comment">
<div className="user">
<img src="https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
<p>Benjamin Lee</p>
</div>
<p className="time">1 hour ago</p>
<p className="commentText">I love how you emphasized the importance of starting small when it comes to organizing and cleaning. 
It can be overwhelming to tackle an entire room or house all at once, but breaking it down into smaller tasks definitely makes it more manageable. I'll definitely be using these tips in my own home.
</p>
</div>
</div>
</div>
)
}

export default CommentSection