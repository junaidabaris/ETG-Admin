import AddnewBrandsAdmin from "../../Components/brandsComponents/AddNewBrands";
import Brands from "../../Components/brandsComponents/Brands";

function BrandPageAdmin() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">All Brands</h1>
                        </div>
                    </div>
                    <div className="row">
                        <AddnewBrandsAdmin />
                    </div>
                    <div className="row">
                        <Brands />
                    </div>
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>
        </>
    )
}
export default BrandPageAdmin;