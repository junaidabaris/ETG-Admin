import AddNewAttributesAdmin from "../../Components/attributesComponents/AddNewAttributes";
import AttributesAdmin from "../../Components/attributesComponents/Attributes";

function AttributeAdminPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        <div className="align-items-center">
                            <h1 className="h3">All Attributes</h1>
                        </div>
                    </div>
                    <div className="row">
                        <AddNewAttributesAdmin />
                    </div>
                    <div className="row">
                        <AttributesAdmin />
                    </div>
                   
                </div>
                <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
                    {/*p class="mb-0">&copy;  v6.3.3</p*/}
                </div>
            </div>

        </>
    )
}
export default AttributeAdminPage;