import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PhotoGallery = () => {
    return (
        <>
            <h1 className="text-center text-danger text-capitalize my-5">Welcome to my Gallery</h1>
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" >
                        <img src="https://picsum.photos/201/301" className="card-img-top" alt="" height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src="https://picsum.photos/201/302" className="card-img-top" alt="" height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src="https://picsum.photos/201/303" className="card-img-top" alt="" height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

            <div  className="row p-5">
                <div className="col">
                    <div className="card" >
                        <img src="https://picsum.photos/201/304" className="card-img-top" alt="" height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src="https://picsum.photos/201/305" className="card-img-top" alt="" height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src="https://picsum.photos/201/306" className="card-img-top" alt="" height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default PhotoGallery
