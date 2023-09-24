import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import { useAddNewCategoryMutation, useGetCategoriesQuery, useGetLanguagesQuery } from '../../all-products/allproductsApi/allProductsApi';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MultilangForm from './MultilangForm';
import { useParams } from 'react-router-dom';


function AddnewCategories() {
  // const [validated, setValidated] = useState(false);

  const [inputval, setInputVal] = useState({ name: '', parent_id: null, order_level: '', type: '1', banner: '', image: '', meta_title: '', meta_description: '', commision_rate: '', filtering_attributes: '', level: '', top: '', featured: '' });
  const token = window.localStorage.getItem('token')

  const [addCategory, response] = useAddNewCategoryMutation();



  const [file, setFile] = useState(null);

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }

  // const onChangeHandler = (e) => {
  //   const inpName = e.target.name;
  //   const inpVal = e.target.value;
  //   const clonedObj = { ...inputval };
  //   clonedObj[inpName] = inpVal;
  //   setInputVal(clonedObj)
  // };

  const addNewCategory = async (event) => {
    event.preventDefault();
    // addCategory(inputval);.

    const clonedObj = { ...inputval };

    const url = 'https://onlineparttimejobs.in/api/category/add_category'
    const formData = new FormData();

    formData.append('name', clonedObj.name);
    formData.append('parent_id', clonedObj.parent_id);
    formData.append('order_level', clonedObj.order_level);
    formData.append('type', clonedObj.type);
    formData.append('banner', clonedObj.banner);
    formData.append('meta_title', clonedObj.meta_title);
    formData.append('meta_description', clonedObj.meta_description);
    formData.append('commision_rate', clonedObj.filtering_attributes);
    formData.append('level', clonedObj.level);
    formData.append('top', clonedObj.top);
    formData.append('featured', clonedObj.featured);
    // formData.append('image', file);
    console.log(file);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Category Request Send Successfully')
      document.getElementById("create-course-form").reset();
    } catch (error) {
      alert('Category Request Send Fail !')
    }

  };


  const toastSuccessMessage = () => {
    toast.success("Category added Successfully", {
      position: "top-center"
    })
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: langData, refetch } = useGetLanguagesQuery(token);
  const [val, setVal] = useState(langData)
  const params = useParams()
  useEffect(() => {
    if (langData) {
      if (!params) {
        const maped = langData.map((item) => {
          return { name: "", language_id: item._id, parent_id: '', lable: item.name, order_level: "", type: "", image: "", meta_title: "", meta_description: '', commision_rate: "", level: "", top: "", featured: '' }
        })
        setVal(maped)
      }else{
        const maped = langData.map((item) => {
          return { name: "", language_id: item._id, parent_id: '', lable: item.name, order_level: "", type: "", image: "", meta_title: "", meta_description: '', commision_rate: "", level: "", top: "", featured: '' }
        })
        setVal(maped)
      }
    }
  }, [langData])
  const onChangeHandler = (e, id, bul) => {

    if (bul) {
      const maped = val.map((item) => {
        if (item.language_id == id) {
          const obj = { ...item, image: e.target.files[0] }
          return obj
        } else {
          return item
        }
      })
      setVal(maped)
    } else {
      const maped = val.map((item) => {
        if (item.language_id == id) {
          const obj = { ...item, [e.target.name]: e.target.value }
          return obj
        } else {
          return item
        }
      })
      setVal(maped);
    }

  }

  const submitEditCategoryData = async (data) => {

    const url = `https://onlineparttimejobs.in/api/category/${params.id}`
    try {
      const res = await axios.put(url, { list: data }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token
        }
      });
      alert('Edit Catagary Successfully')
    } catch (error) {
      alert('Catagary not Edit')
    }
  }

  const addNewAttributeData = async (e) => {
    e.preventDefault();
    const images = new FormData();
    const clone = [...val]
    if (params?.id) {
      submitEditCategoryData(clone)
    } else {
      for (let i = 0; i < clone.length; i++) {
        let element = clone[i];
        if (element?.image) {
          images.append('image', element?.image);
          const res2 = await axios.post(`https://onlineparttimejobs.in/api/cloudinaryImage/addImage`, images)
          images.delete('image');
          const obj = { ...element, image: { public_id: res2.data.public_id, url: res2.data.url } }
          clone.splice(i, 1, obj)
        }
      }
      const url = 'https://onlineparttimejobs.in/api/category/add_category'
      try {
        const res = await axios.post(url, { list: clone }, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        });
        toastSuccessMessage()
      } catch (error) {
        alert('Category Send Fail !')
      }

    }



  };




  const getDetailCat = async () => {
    try {
      const res = await axios.get(`https://onlineparttimejobs.in/api/category/${params.id}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      setVal(res.data);
    } catch (error) {
      alert('Server Error !')
    }
  }


  useEffect(() => {
    if (params.id) {
      getDetailCat()
    }
  }, [params.id])
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-8 mx-auto">

              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      {langData && langData.map((item, i) => {
                        return <Tab label={item?.name} value={i} />
                      })}

                    </TabList>
                  </Box>
                  {val && val.map((item, i) => {
                    return <TabPanel value={i}>
                      <div className="card">
                        <MultilangForm setValue={setValue} data={val} item={item} i={i} addNewAttributeData={addNewAttributeData} onChangeHandler={onChangeHandler} />
                      </div>

                    </TabPanel>
                  })}

                </TabContext>
              </Box>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-3 px-15px px-lg-25px mt-auto">
          {/*p class="mb-0">&copy;  v6.3.3</p*/}
        </div>
      </div>
      <ToastContainer />

    </>
  )
}
export default AddnewCategories