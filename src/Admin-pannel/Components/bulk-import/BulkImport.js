
import FileUploadCom from "../../common/FileUploadCom";

function BulkImport() {


  // const [UploadedFile, response] = useAddBulkImportFileMutation();

  const submitFileData = (e) => {
    // e.preventDefault();
    // console.log(handleFile)
    // let formData = new FormData();

    // formData.append('product', handleFile);
    // console.log('handle file', handleFile)
    // console.log('form data', formData?.get('product'))

    // axios({
    //   url: "https://etg-backend-project-node-abarisapp.vercel.app/api/bulkimport/products",
    //   method: 'POST',
    //   headers: { 'content-type': 'multipart/form-data' },
    //   body: formData
    // }).then(response => {
    //   console.log(response);
    // })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6">Product Bulk Upload</h5>
            </div>
            <div className="card-body">
              <div className="alert alert-pragraph" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                <strong>Step 1:</strong>
                <p >1. Download the skeleton file and fill it with proper data.</p>
                <p>2. You can download the example file to understand how the data must be filled.</p>
                <p>3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.</p>
                <p>4. After uploading products you need to edit them and set product's images and choices.</p>
              </div>
              <br />
              <div>
                <a href="https://onlineparttimejobs.in/api/bulkimport/productFormat" download>
                  <button className="btn btn-info">Download CSV</button>
                </a>
              </div>
              <div className="alert alert-pragraph" style={{ color: '#004085', backgroundColor: '#cce5ff', borderColor: '#b8daff', marginBottom: 0, marginTop: 10 }}>
                <strong>Step 2:</strong>
                <p>1. Category and Brand should be in numerical id.</p>
                <p>2. You can download the pdf to get Category and Brand id.</p>
              </div>
              <br />
              <div>
                <a href="https://mmslfashions.in/admin/bulk-upload/download/category" className="mr-2">
                  <button className="btn btn-info">Download Category</button>
                </a>
                <a href="https://mmslfashions.in/admin/bulk-upload/download/brand">
                  <button className="btn btn-info">Download Brand</button>
                </a>
              </div>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 h6"><strong>Upload Product File</strong></h5>
            </div>
            <div className="card-body">
              <FileUploadCom url={"https://onlineparttimejobs.in/api/bulkimport/product_revise"} />


            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>

    </>
  )
}
export default BulkImport;