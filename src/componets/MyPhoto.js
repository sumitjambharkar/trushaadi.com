import UseNav from './UseNav'
import Footer from './Footer'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function MyPhoto() {
  return (
      <>
      <UseNav/>
        <div className="con">
          <div className='container cono'>
            <div className='row'>
              <div className='col-md-11 sm-12 mt-5'>
                <div className="photo mt-4">
                  <div className='row' width="90%">
                  
                    <div className="col-md-3">
                      <div className="img mt-5">

                      </div>
                    </div>

                    <div className="col-md-9">

                      <div className="row mt-4">
                        <div className="text">
                          <strong>Add your photo and</strong>
                          <h2>get 5 times more responses!</h2>
                        </div>
                      </div>

                      <div className="row text-center mt-5">
                        <div className="col-md-5">
                          <div className="textt">
                        <input type="file"/>
                        <a><UploadFileIcon/>Uplod</a>
                          </div>
                        </div>

                        <div className="col-md-1">
                          <strong>OR</strong>
                        </div>

                        <div className="col-md-5">
                          <div className="textt">
                            <a>Photo at</a>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-5">
                      <div className=" col-md-12  textta">
                        <p>Note : Only Image formats allowed. Image size should be upto 10MB</p>
                       </div>
                      </div>





                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default MyPhoto;
