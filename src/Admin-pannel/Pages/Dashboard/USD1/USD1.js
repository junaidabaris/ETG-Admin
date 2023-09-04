import { GiHamburgerMenu } from "react-icons/gi";
import img3 from "../../../../assets/img/income.png";
function USD1() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span>Income</span>
          </div>
          <div className="BEnd1 col-md-6">
            <button className="btn" type="button">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src={img3} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default USD1;
