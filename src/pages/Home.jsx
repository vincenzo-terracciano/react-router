export default function Home() {
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
                        <div className="row align-items-md-stretch my-5">
                            <div className="col-md-6">
                                <div
                                    className="h-100 p-5 text-white bg-primary border rounded-3">
                                    <h2>Change the background</h2>
                                    <p>
                                        Swap the background-color utility and add a `.text-*` color
                                        utility to mix up the jumbotron look. Then, mix and match with
                                        additional component themes and more.
                                    </p>
                                    <button
                                        className="btn btn-outline-light"
                                        type="button">
                                        Example button
                                    </button>
                                </div>
                            </div>
                        </div>

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

            <footer className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Home</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Chi siamo</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Contacts</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h3>FAQ</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                        <li><a href="">Ciao</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}