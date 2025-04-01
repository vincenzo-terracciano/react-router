import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Header />

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

            <Footer />
        </>
    )
}