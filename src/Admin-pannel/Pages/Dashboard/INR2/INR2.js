import { GiHamburgerMenu } from "react-icons/gi";
import img4 from "../../../../assets/img/Cashflow.png";

function INR2() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span>Cash flow</span>
          </div>
          <div className="BEnd1 col-md-6">
            <button className="btn" type="button">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src={img4} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default INR2;
