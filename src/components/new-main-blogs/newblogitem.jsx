import './newmainblogs.css'

export default function NewBlogItem(props) {
    return (
        <div className="main-blog">
            <div className="main-blog-img">
                <img src={props.img} alt={props.title} className="blog-img" onError={(e) => e.target.src = 'fallback-image-url'} />
            </div>
            <div className="main-blog-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="main-blog-footer">
                    <p className='footer-p'>{props.category}</p>
                </div>
            </div>
        </div>
    )
}