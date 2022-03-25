import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img
              src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
              alt=""
            />
            <div className="content">
              <h3>Super Car</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>

          <div className="box">
            <img
              src="https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp"
              alt=""
            />
            <div className="content">
              <h3>Stylish One</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://www.remaxdoors.com/hubfs/2015_images/Blogging/new_car_showroom.jpg"
              alt=""
            />
            <div className="content">
              <h3>Showroom Overview</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://cdn.motor1.com/images/mgl/2PgYn/s3/ferrari-laferrari.jpg"
              alt=""
            />
            <div className="content">
              <h3>Red Beauty</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2634-genesisunveilsg90exteriorimages-1638281750.jpg"
              alt=""
            />
            <div className="content">
              <h3>Discount</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
              alt=""
            />
            <div className="content">
              <h3>New Arrival</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://www.cupraofficial.com/content/global/cupra-website/en/concept-cars/urbanrebel/_jcr_content/article/richtextwithfloating/singlevideoimage.resizedViewPort.noscale.assetRootXL.jpg"
              alt=""
            />
            <div className="content">
              <h3>Our Megazine</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://img.etimg.com/thumb/width-640,height-480,imgsize-118786,resizemode-1,msid-80420666/wealth/spend/best-cars-for-different-budgets-to-buy-in-2021/covcar.jpg"
              alt=""
            />
            <div className="content">
              <h3>Diamond</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://www.motortrend.com/uploads/sites/5/2020/10/2021-SSC-Tuatara-Reruns-Record-Car-Front-3.4.jpg?fit=around%7C875:492"
              alt=""
            />
            <div className="content">
              <h3>the gorgeous</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://cdn.wealthygorilla.com/wp-content/uploads/2020/05/Most-Expensive-Cars-McLaren-Speedtail.jpg"
              alt=""
            />
            <div className="content">
              <h3>Inside Showroom</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://cdn1.buyacar.co.uk/sites/buyacar/files/aston-martin-dbx-1_0.jpg"
              alt=""
            />
            <div className="content">
              <h3>the classy</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClg8Jv0CIQXDk7hlr1b9X_T5zrK-YzQBA_w&usqp=CAU"
              alt=""
            />
            <div className="content">
              <h3>the superb</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://media.gq-magazine.co.uk/photos/600fea2c3cc0378ecd860823/master/pass/20200127-Car-Awards-08HP.jpg"
              alt=""
            />
            <div className="content">
              <h3>the calm</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://www.cadillac.com/content/dam/cadillac/na/us/english/index/homepage/homepage-scroller/m/homepage-masthead-lyriq-front-m-v3.jpg?imwidth=960"
              alt=""
            />
            <div className="content">
              <h3>the real</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
