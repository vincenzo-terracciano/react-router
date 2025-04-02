import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Post() {

    const [post, setPost] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setPost(data)
            })
            .catch(err => {
                console.error('ERROR', err);

            })
    }, [])

    return (
        <main>
            {
                !post ? ('Loading...') : (
                    <>
                        <section id="post-details" className="mt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-5">
                                        <img className="img-fluid" src={`http://localhost:3000${post.image}`} alt={post.title} />
                                    </div>
                                    <div className="col-7">
                                        <h1>{post.title}</h1>
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </main>
    )
}