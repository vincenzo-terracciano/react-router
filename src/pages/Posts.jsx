export default function Posts() {
    return (
        <>
            <header>
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/" aria-current="page">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/chisiamo">Chi siamo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/posts">Posts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

            <main>
                <section>
                    <div className="container">

                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam distinctio quod omnis blanditiis tenetur alias nulla, ipsa similique doloribus temporibus repudiandae porro rerum fugit maiores debitis atque. Perspiciatis, a accusamus!
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam distinctio quod omnis blanditiis tenetur alias nulla, ipsa similique doloribus temporibus repudiandae porro rerum fugit maiores debitis atque. Perspiciatis, a accusamus!
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam distinctio quod omnis blanditiis tenetur alias nulla, ipsa similique doloribus temporibus repudiandae porro rerum fugit maiores debitis atque. Perspiciatis, a accusamus!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}