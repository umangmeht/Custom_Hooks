import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-brand'>

                    <h4 className='color'>Carousel</h4> </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Disabled</a></li>
                </ul>


                <div className='justify-content-end'>

                    <form>
                        <input type="text" placeholder="Search" size={20}></input>

                    </form>
                    <button class="btn btn-success">Search</button>

                </div>
            </nav>
            <div className=''>
                <div className='m-5'>

                    <div className='row'>
                        <div className='flex'>
                            <div className='col'>
                                <img class="rounded-circle" width={150} height={150} src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&h=305" />

                                <h1>Heading</h1>
                                <p>

                                    Donec sed odio dui. Etiam porta sem<br></br>
                                    malesuada magna mollis euismod. Nullam id dolor id<br></br>
                                    nibh ultricies vehicula ut id elit. Morbi <br></br>
                                    leo risus, porta ac consectetur ac, vestibulum at eros.<br></br>
                                    Praesent commodo cursus magna.<br></br>
                                </p>
                                <button class="btn btn-secondary">View Details</button>
                            </div>
                            <div className='col'>

                                <img class="rounded-circle" width={150} height={150} src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&h=305" />


                                <h1>Heading</h1>
                                <p>
                                    Donec sed odio dui. Etiam porta sem<br></br>
                                    malesuada magna mollis euismod. Nullam id dolor id<br></br>
                                    nibh ultricies vehicula ut id elit. Morbi <br></br>
                                    leo risus, porta ac consectetur ac, vestibulum at eros.<br></br>
                                    Praesent commodo cursus magna.<br></br>

                                </p>

                                <button class="btn btn-secondary">View Details</button>
                            </div>
                            <div className='col'>


                                <img class="rounded-circle" width={150} height={150} src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&h=305" />



                                <h1>Heading</h1>
                                <p>
                                    Donec sed odio dui. Etiam porta sem<br></br>
                                    malesuada magna mollis euismod. Nullam id dolor id<br></br>
                                    nibh ultricies vehicula ut id elit. Morbi <br></br>
                                    leo risus, porta ac consectetur ac, vestibulum at eros.<br></br>
                                    Praesent commodo cursus magna.<br></br>
                                </p>
                                <button class="btn btn-secondary">View Details</button>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div>
                        <div className='row'>
                            <div className='col-md-8'>

                                <b>First featurette heading.
                                    It'll blow your mind.<br></br></b>

                                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>
                                Fusce dapibus, tellus ac cursus commodo.

                            </div>
                            <div className='col-md-4'>

                                <div className='loc'>
                                    <img width={400} src="https://www.researchgate.net/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div>
                        <div className='row'>
                            <div className='col-md-4'>

                                <div className='loc'>
                                    <img width={400} src="https://www.researchgate.net/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png" />
                                </div>
                            </div>
                            <div className='col-md-8'>

                                <b>Oh yeah, it's that good.See <br></br>
                                    for yourself.<br></br></b>

                                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                                ligula porta felis euismod semper.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>
                                Fusce dapibus, tellus ac cursus commodo.




                            </div>




                        </div>
                        <hr />
                        <div>
                            <div className='row'>
                                <div className='col-md-8'>

                                    <b>First featurette heading.
                                        It'll blow your mind.<br></br></b>

                                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                                    ligula porta felis euismod semper.
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br></br>
                                    Fusce dapibus, tellus ac cursus commodo.

                                </div>
                                <div className='col-md-4'>

                                    <div className='loc'>
                                        <img width={400} src="https://www.researchgate.net/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <hr />

                        <div>
                        © 2017-2018 Company, Inc. · Privacy · Terms
                        </div>


                    </div>

                </div>
            </div>


        </>
    );
};

export default App;

