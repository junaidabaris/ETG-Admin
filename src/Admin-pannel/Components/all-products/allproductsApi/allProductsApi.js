import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const seller_id = window.localStorage.getItem('isSellerId')
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://onlineparttimejobs.in/api/' }),
    tagTypes: ['allOrders', 'sellers', 'sellerOwn', 'setList', 'purchaseList', 'reqList', 'allProducts', 'getBrand', 'customer', 'catagary', 'attribuits', 'getAffiliateWithdraw', 'getAffiliateLogs', 'getRefferalUsers', 'getaffiliateUsers', 'getaffiliateBasic', 'updateAffilliateUser', 'updateVerificationInfo', 'editAllPointsTable', 'getOTPConfiguration', 'updateOTPConfiguration', 'getOTPCredentialLists', 'updateOtpCredential', 'getPayFastCredentialLists', 'updatePayFastCredential', 'getFlutterCredential', 'updateFlutterCredential', 'getTingoCredential', 'updateTingoCredential', 'getFlutterActivation', 'updateFlutterActivation', 'getPayFastActivation', 'updatePayFastActivation', 'getTingoActivationF', 'updateTingoActivation', 'getRazorPayActivation', 'updateRazorPayActivation', 'getPayuMoneyActivation', 'updatePayumoneyActivation', 'getPayTmActivation', 'updatePayTmActivation', 'getRazorPayCredential', 'updateRazorPayCredential', 'getPayuMoneyCredential', 'updatePayuMoneyCredential', 'getPayTmCredential', 'updatePayTmCredential', 'getDeliveryBoyStatus', 'deliveryBoypaymentconfig', 'pickupLocationForDelivery', 'NotificationConfigurationForDelivery', 'SettingSiteConfiguration', 'MoneyAndNumberFormat', 'weighingScale', 'settingEmail', 'AwardPoint', 'SystemSettingPrefix', 'FacebookCredentail', 'TwitterCredentail', 'LinkedInCredentail', 'InstagramCredentail', 'GoogleCredentail', 'posCategory', 'posBrands', 'timeSlote','timegroup'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (token) => ({
                url: 'product/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }

            }),
            providesTags: ['allProducts']
        }),

        getCategories: builder.query({
            query: (token) => ({
                url: 'category/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            }),
            providesTags: ['catagary']
        }),

        getBrands: builder.query({
            query: (token) => ({
                url: 'brand/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            }),
            providesTags: ['getBrand']
        }),

        getSizes: builder.query({
            query: () => ({
                url: 'size',
                method: 'GET'
            })
        }),

        getBanner: builder.query({
            query: () => ({
                url: 'seller_Banner',
                method: 'GET'
            })
        }),

        getPickupPoint: builder.query({
            query: () => ({
                url: 'pickupPoints',
                method: 'GET'
            })
        }),

        getCustomers: builder.query({
            query: (token) => ({
                url: 'customer',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            }),
            providesTags: ['customer']
        }),

        getSellers: builder.query({
            query: (token) => ({
                url: 'sellerList/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            }),
            providesTags: ['sellers']
        }),
        getTicketLists: builder.query({
            query: () => ({
                url: 'ticketList',
                method: 'GET'
            })
        }),

        getLanguages: builder.query({
            query: (token) => ({
                url: 'language/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
        }),

        getPages: builder.query({
            query: () => ({
                url: 'pages',
                method: 'GET'
            })
        }),

        getCurrency: builder.query({
            query: (token) => ({
                url: 'currency/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
        }),



        getOrders: builder.query({
            query: () => ({
                url: 'order/getallorders',
                method: 'GET'
            }),
            providesTags: ['allOrders']
        }),

        getCoupons: builder.query({
            query: () => ({
                url: 'coupons',
                method: 'GET'
            })
        }),

        getBlogs: builder.query({
            query: (token) => ({
                url: 'blogs',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
        }),

        getAttributes: builder.query({
            query: (token) => ({
                url: 'attributes/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            }),
            providesTags: ['attribuits']
        }),

        getBlogsCategory: builder.query({
            query: () => ({
                url: 'blogsCat',
                method: 'GET'
            })
        }),

        getColors: builder.query({
            query: (token) => ({
                url: 'color',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
        }),

        getFlashDeals: builder.query({
            query: () => ({
                url: 'flashDeal',
                method: 'GET'
            })
        }),


        addNewSize: builder.mutation({
            query: (payload) => ({
                url: 'size/add_size',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewBrand: builder.mutation({
            query: (payload) => ({
                url: 'brand/add',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewCategory: builder.mutation({
            query: (payload) => ({
                url: 'category/add_category',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addPickUpPoint: builder.mutation({
            query: (payload) => ({
                url: 'pickupPoints/add',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getCurrencyById: builder.query({
            query: (id) => ({
                url: `Currency/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getCouponById: builder.query({
            query: (id) => ({
                url: `coupons/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getLanguageById: builder.query({
            query: (id) => ({
                url: `language/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getBrandById: builder.query({
            query: (val) => ({
                url: `brand/admin/${val.id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        getSupportTicketById: builder.query({
            query: (id) => ({
                url: `ticketList/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getBlogPostById: builder.query({
            query: (id) => ({
                url: `blogs/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getCustomerById: builder.query({
            query: (val) => ({
                url: `customer/${val.id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        getAttributeById: builder.query({
            query: (val) => ({
                url: `attributes/${val.id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        getFlashDealById: builder.query({
            query: (id) => ({
                url: `flashDeal/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getProductById: builder.query({
            query: (val) => ({
                url: `product/${val.id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),


        getBlogCategoryById: builder.query({
            query: (id) => ({
                url: `blogsCat/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getSellerBannerById: builder.query({
            query: (id) => ({
                url: `seller_Banner/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getCustomerShippingAdressById: builder.query({
            query: (id) => ({
                url: `shippingAddress/customer/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getColorById: builder.query({
            query: (id) => ({
                url: `color/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        addNewCurrency: builder.mutation({
            query: (payload) => ({
                url: 'currency/add_Currency',
                method: 'POST',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        addNewLanguage: builder.mutation({
            query: (payload) => ({
                url: 'language/add_Language',
                method: 'POST',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        addNewCoupon: builder.mutation({
            query: (payload) => ({
                url: 'coupons/add_Coupons',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewBlogs: builder.mutation({
            query: (payload) => ({
                url: 'blogs/add_Blogs',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addNewAttribute: builder.mutation({
            query: (payload) => ({
                url: 'attributes/add_attributes',
                method: 'POST',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${payload.token}`,
                },
            }),
            invalidatesTags: ['attribuits']
        }),

        addGeneralSetting: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/add_generalSetting',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addBlogCategory: builder.mutation({
            query: (payload) => ({
                url: 'blogsCat/add_blogCat',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addOrderConfiguration: builder.mutation({
            query: (payload) => ({
                url: 'orderConfig/add_OrderConfig',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addColor: builder.mutation({
            query: (payload) => ({
                url: 'color/add_Color',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        addFlasDeal: builder.mutation({
            query: (payload) => ({
                url: 'flashDeal/add_FlashDeal',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        addNewProduct: builder.mutation({
            query: (payload) => {

                return {
                    url: 'product/add_product',
                    method: 'POST',
                    body: {
                        ...payload,
                        abc: JSON.stringify(payload.gallery_image)
                    },
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2NTc5YzQ1NTEwNDQzNDk4MWQ4ZGEiLCJuYW1lIjoiVHVuamkiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaXNTZWxsZXIiOmZhbHNlLCJpc0Jsb2NrZWQiOmZhbHNlLCJpc0FjY291bnRWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTY3NzU1OTU1MCwiZXhwIjoxNjgwMTUxNTUwfQ.UYCx54AJluZkd1YU3S2nOVr5RQzyW1QcGVB7dTEPQ48'
                    },
                }
            },
        }),

        deleteProduct: builder.mutation({
            query: (val) => ({
                url: `product/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
            invalidatesTags: ['allProducts']

        }),

        deleteSize: builder.mutation({
            query: (id) => ({
                url: `size/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteBrand: builder.mutation({
            query: (val) => ({
                url: `brand/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        deleteCategory: builder.mutation({
            query: (val) => ({
                url: `category/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),

        }),

        deleteCustomer: builder.mutation({
            query: (val) => ({
                url: `customer/delete_Customer/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        deleteCurrency: builder.mutation({
            query: (val) => ({
                url: `currency/delete_Currency/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        deleteLanguage: builder.mutation({
            query: (val) => ({
                url: `language/delete_Language/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        deleteSupportTicket: builder.mutation({
            query: (id) => ({
                url: `ticketList/delete_Tickets/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteCoupon: builder.mutation({
            query: (id) => ({
                url: `coupons/delete_Coupons/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteBlogs: builder.mutation({
            query: (id) => ({
                url: `blogs/delete_Blogs/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteAttributes: builder.mutation({
            query: (id) => ({
                url: `attributes/delete_attributes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['attribuits']
        }),

        deleteSellerBanner: builder.mutation({
            query: (id) => ({
                url: `seller_Banner/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteBlogCategory: builder.mutation({
            query: (id) => ({
                url: `blogsCat/delete_blogCat/${id}`,
                method: 'DELETE',
            }),
        }),

        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `order/delete_Order/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['allOrders']
        }),

        deleteColor: builder.mutation({
            query: (id) => ({
                url: `color/delete_Color/${id}`,
                method: 'DELETE',
            }),
        }),


        deleteFlashDeal: builder.mutation({
            query: (id) => ({
                url: `flashDeal/delete_FlashDeal/${id}`,
                method: 'DELETE',
            }),
        }),


        getSellerProduct: builder.query({
            query: (id) => ({
                url: `seller_Product/${id}`,
                method: 'GET'
            }),
            providesTags: ['sellerOwn']
        }),

        addPaymentGet: builder.mutation({
            query: (payload) => ({
                url: 'paymentGate/add_PaymentGates',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        addPages: builder.mutation({
            query: (payload) => ({
                url: 'pages/add_Pages',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getOrderDetail: builder.query({
            query: (id) => ({
                url: `order/getOrderById/${id}`,
                method: 'GET',
            }),
            // providesTags: ['orderDetail']
        }),


        addOrderConfigs: builder.mutation({
            query: (payload) => ({
                url: 'orderConfig/add_OrderConfigs',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),


        }),

        deletePageList: builder.mutation({
            query: (id) => ({
                url: `pages/delete_Pages/${id}`,
                method: 'DELETE',

            })
        }),

        editPageList: builder.mutation({
            query: (id, data) => ({
                url: `pages/update_Pages/${id}`,
                method: 'PUT',
                body: data
            })
        }),

        editCurrency: builder.mutation({
            query: (payload) => ({
                url: `currency/update_Currency/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        editCoupon: builder.mutation({
            query: (payload) => ({
                url: `coupons/update_Coupons/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editLanguage: builder.mutation({
            query: (payload) => ({
                url: `language/update_Language/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editBrand: builder.mutation({
            query: (payload) => ({
                url: `brand/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        editSupportTicket: builder.mutation({
            query: (payload) => ({
                url: `ticketList/update_Tickets/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        updateSupportTicketDetail: builder.mutation({
            query: (payload) => ({
                url: `ticketList/add_Tickets`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editAllBlogsPost: builder.mutation({
            query: (payload) => ({
                url: `blogs/update_Blogs/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editCustomer: builder.mutation({
            query: (payload) => ({
                url: `customer/update_Customer/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        editAttribute: builder.mutation({
            query: (payload) => ({
                url: `attributes/update_attributes/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        editBlogCategory: builder.mutation({
            query: (payload) => ({
                url: `blogsCat/update_blogCat/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editSellerBanner: builder.mutation({
            query: (payload) => ({
                url: `seller_Banner/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        editColor: builder.mutation({
            query: (payload) => ({
                url: `color/update_Color/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editFlashDeal: builder.mutation({
            query: (payload) => ({
                url: `flashDeal/update_FlashDeal/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editProduct: builder.mutation({
            query: (payload) => ({
                url: `product/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        // junaid codes

        deleteSellerList: builder.mutation({
            query: (id) => ({
                url: `sellerList/delete_sellers/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['sellers']
        }),

        addSellerList: builder.mutation({
            query: (payload) => ({
                url: 'sellerList/add_seller',
                method: 'POST',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        editSellerList: builder.mutation({
            query: (data) => ({
                url: `sellerList/update_sellers/${data.id}`,
                method: 'PUT',
                body: data.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + data.token
                },
            })
        }),

        getSellerDetail: builder.query({
            query: (token) => ({
                url: `staff/profile`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            }),
            // providesTags: ['sellers']
        }),
        getSmsTemplate: builder.query({
            query: (id) => ({
                url: `smsTemplate`,
                method: 'GET',
            }),
            providesTags: ['smsTemplate'],
        }),
        addSmsList: builder.mutation({
            query: (payload) => ({
                url: 'smsTemplate/add_smsTemplate',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        editSmsList: builder.mutation({
            query: (data) => ({
                url: `smsTemplate/update_smsTemplate/${data.id}`,
                method: 'PUT',
                body: data.data
            })
        }),
        smsDelete: builder.mutation({
            query: (id) => ({
                url: `smsTemplate/delete_smsTemplate/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['smsTemplate']
        }),

        deletePickupPoint: builder.mutation({
            query: (id) => ({
                url: `pickupPoints/${id}`,
                method: 'DELETE',

            })
        }),

        getPickupPointById: builder.query({
            query: (id) => ({
                url: `pickupPoints/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editPickupPoint: builder.mutation({
            query: (data) => ({
                url: `pickupPoints/${data.id}`,
                method: 'PUT',
                body: data.data
            })
        }),

        addStaff: builder.mutation({
            query: (payload) => ({
                url: 'staff/add_Staff',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),

        }),

        getAllStaffs: builder.query({
            query: () => ({
                url: 'staff',
                method: 'GET'
            })
        }),

        deleteStaff: builder.mutation({
            query: (id) => ({
                url: `staff/delete_Staff/${id}`,
                method: 'DELETE',

            })
        }),

        getRoles: builder.query({
            query: () => ({
                url: 'roles',
                method: 'GET'
            })
        }),

        deleteRole: builder.mutation({
            query: (id) => ({
                url: `roles/delete_Roles/${id}`,
                method: 'DELETE',
            })
        }),

        getStaffById: builder.query({
            query: (id) => ({
                url: `staff/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editStaffData: builder.mutation({
            query: (data) => ({
                url: `staff/update_Staff/${data.id}`,
                method: 'PUT',
                body: data.data
            })
        }),

        addRole: builder.mutation({
            query: (payload) => ({
                url: 'roles/add_Roles',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),

        }),

        getRoleById: builder.query({
            query: (id) => ({
                url: `roles/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editRoleData: builder.mutation({
            query: (data) => ({
                url: `roles/update_Roles/${data.id}`,
                method: 'PUT',
                body: data.data
            })
        }),

        addFileSystem: builder.mutation({
            query: (payload) => ({
                url: 'fileSystem/add_FileConfig',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),

        }),

        addShareReward: builder.mutation({
            query: (payload) => ({
                url: 'socialShareReward/add_SocialShareReward',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),

        }),

        addLikeReward: builder.mutation({
            query: (payload) => ({
                url: 'socialLikeReward/add_socialLikeReward',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),

        }),

        addBulkImportFile: builder.mutation({
            query: (payload) => ({
                url: 'bulkimport/products',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),

        }),

        getOrderStartById: builder.query({
            query: () => ({
                url: "orderStatusMaster",
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            // providesTags: ['orderStatus']
        }),

        addOrderStatus: builder.mutation({
            query: (payload) => ({
                url: 'orderStatusTransaction/add_OrderStatusTrans',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            // invalidatesTags: ['orderStatus']
        }),

        getClubPointUserPoint: builder.query({
            query: () => ({
                url: `clubPointsUser`,
                method: 'GET',
            }),

        }),

        addSetProductPointWithinRange: builder.mutation({
            query: (payload) => ({
                url: 'clubPointsProductMulti/add_clubPointsProductMulti',
                method: 'POST',
                body: payload
            }),

        }),

        addPointForAllProducts: builder.mutation({
            query: (payload) => ({
                url: 'setClubPointForAllProduct/add_setPointForAllProduct',
                method: 'POST',
                body: payload
            }),

        }),

        getPointToWalletData: builder.query({
            query: () => ({
                url: 'setClubPointToWallet',
                method: 'GET',
            }),

        }),

        editPointToWallet: builder.mutation({
            query: (payload) => ({
                url: 'setClubPointToWallet/update_setPointForAllProduct',
                method: 'PUT',
                body: payload
            }),

        }),

        getClubSetAllPointsTableData: builder.query({
            query: () => ({
                url: 'clubPointsProduct',
                method: 'GET',
            }),

        }),

        deleteSetAllPoints: builder.mutation({
            query: (id) => ({
                url: `clubPointsProduct/delete_clubPointsProduct/${id}`,
                method: 'DELETE',
            })
        }),

        addNewSellerPackage: builder.mutation({
            query: (payload) => ({
                url: 'sellerPackage/add_SellerPackages',
                method: 'POST',
                body: payload
            }),

        }),

        getAllPointsTableById: builder.query({
            query: (id) => ({
                url: `clubPointsProduct/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editAllPointsTable: builder.mutation({
            query: (payload) => ({
                url: `clubPointsProduct/update_clubPointsProduct/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            providesTags: ['editAllPointsTable']
        }),

        deleteUserPoints: builder.mutation({
            query: (id) => ({
                url: `clubPointsUser/delete_clubPointsUser/${id}`,
                method: 'DELETE',
            })
        }),

        getSellerPackage: builder.query({
            query: () => ({
                url: 'sellerPackage',
                method: 'GET'
            })
        }),

        deleteSellerPackage: builder.mutation({
            query: (id) => ({
                url: `sellerPackage/delete_SellerPackages/${id}`,
                method: 'DELETE',
            })
        }),

        getSellerPackageById: builder.query({
            query: (id) => ({
                url: `sellerPackage/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editSellerPackage: builder.mutation({
            query: (payload) => ({
                url: `sellerPackage/update_SellerPackages/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getUserPointsById: builder.query({
            query: (id) => ({
                url: `clubPointsUser/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        editUserPoint: builder.mutation({
            query: (payload) => ({
                url: `clubPointsUser/update_clubPointsUser/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        // atribuits
        form_variatio: builder.mutation({
            query: (payload) => ({
                url: `product/form_variation`,
                method: 'POST',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
        }),

        getListPurchase: builder.query({
            query: () => ({
                url: 'purchase',
                method: 'GET'
            }),
            providesTags: ['purchaseList']
        }),

        // delete List
        deleteRowPurchase: builder.mutation({
            query: (id) => ({
                url: `purchase/delete_purchase/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['purchaseList']
        }),

        addSellerProduct: builder.mutation({
            query: (payload) => ({
                url: 'seller_product/admin_add_product_seller',
                method: 'POST',
                body: payload
            }),

        }),

        // all status

        getAllStatusOrders: builder.query({
            query: () => ({
                url: 'orderStatusMaster',
                method: 'GET'
            })
        }),

        // get order by order status 

        getOrderByStatus: builder.query({
            query: (id) => ({
                url: `orderStatusTransaction/orderStatus/${id}`,
                method: 'GET'
            })
        }),

        // get order by pickupPoints 

        getOrdersByPickups: builder.query({
            query: () => ({
                url: `order/getOrderPickup`,
                method: 'GET'
            })
        }),

        getPickupOrderData: builder.mutation({
            query: (status) => ({
                url: `order/orderPickupPointList/filter`,
                method: 'POST',
                body: status
            })
        }),

        //staff login 
        loginStaffs: builder.mutation({
            query: (data) => ({
                url: `staff/login`,
                method: 'POST',
                body: data
            })
        }),

        // get staff Detail
        getstaffDetail: builder.query({
            query: (id) => ({
                url: `staff/${id}`,
                method: 'GET',
            })
        }),

        // get unitMasterList
        getUnitMaster: builder.query({
            query: (token) => ({
                url: `unitMaster/admin`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
        }),

        //seller login  

        sellerLogin: builder.mutation({
            query: (data) => ({
                url: `sellerList/login`,
                method: 'POST',
                body: data
            })
        }),
        ownSellerProduct: builder.query({
            query: (id) => ({
                url: `order/seller_list/${id}`,
                method: 'GET',
            }),
            providesTags: ['sellerOwn']
        }),

        deleteSellerProduct: builder.mutation({
            query: (id) => ({
                url: `seller_product/seller_delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['sellerOwn']
        }),


        // sellerDetail update  
        updateSeller: builder.mutation({
            query: (val) => ({
                url: `staff/profile`,
                method: 'PUT',
                body: val.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        // add Seller Product 
        addSellerProductNew: builder.mutation({
            query: (data) => ({
                url: `seller_product/seller_add_product`,
                method: 'POST',
                body: data

            }),
        }),


        // product search

        getProductSearch: builder.query({
            query: (paylode) => ({
                url: `product/admin/search/${paylode.paylode}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + paylode.token
                },
            })
        }),

        // getProductSearch: builder.query({
        //     query: (paylode) => ({
        //         url: `/${paylode}`,
        //         method: 'GET'
        //     })
        // }),



        // Purchase-Product
        addPurchaseCart: builder.mutation({
            query: (val) => ({
                url: `purchase/purchaseCart/${val.id}`,
                method: 'POST',
                body: val.data
            }),
            invalidatesTags: ['setList']
        }),

        deleteCartRow: builder.mutation({
            query: (val) => ({
                url: `purchase/deletePurchase/${val.index}`,
                method: 'DELETE',
                body: val.data
            }),
            invalidatesTags: ['setList']
        }),

        // delete CartList 

        // Purchase -List
        getPurchaseLists: builder.query({
            query: (paylode) => ({
                url: `purchase/cart`,
                method: 'GET'
            }),
            providesTags: ['setList']
        }),

        // purchase - add_Purchase

        addPurchaseList: builder.mutation({
            query: (data) => ({
                url: `purchase/addPurchase`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['purchaseList']
        }),

        updateListProducts: builder.mutation({
            query: (data) => ({
                url: `purchase/updatePurchase/${data.index}`,
                method: 'PUT',
                body: data.data
            }),
            invalidatesTags: ['setList']
        }),

        // Combo ProductAdd 

        addComboProducts: builder.mutation({
            query: (data) => ({
                url: `comboDeal/add_ComboDeal`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['ComboProduct']
        }),

        getComboProductsById: builder.query({
            query: (id) => ({
                url: `comboDeal/update/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),


        // /transaction/order

        addTransaction: builder.mutation({
            query: (data) => ({
                url: `transaction/order`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['allOrders']
        }),

        // delivery/add_Delivery

        addDelevery: builder.mutation({
            query: (data) => ({
                url: `delivery/add_Delivery`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['allOrders']
        }),

        // delete Payment

        deletePayment: builder.mutation({
            query: (id) => ({
                url: `transaction/delete_Transaction/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['allOrders']
        }),

        deleteDelevery: builder.mutation({
            query: (id) => ({
                url: `delivery/delete_Delivery/${id}`,
                method: 'DELETE',
            }),
        }),

        // update delevery
        updateDelevery: builder.mutation({
            query: (val) => ({
                url: `delivery/update_Delivery/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
        }),


        // get SellerReq List
        getReqList: builder.query({
            query: (paylode) => ({
                url: `brandSeller`,
                method: 'GET'
            }),
            providesTags: ['reqList']
        }),


        updateBrandReq: builder.mutation({
            query: (val) => ({
                url: `brandSeller/updateApproval/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
            invalidatesTags: ['reqList']
        }),


        // seller Avtive 

        sellerActive: builder.mutation({
            query: (val) => ({
                url: `sellerList/sellerApprovalStatus/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
            invalidatesTags: ['sellers']
        }),


        // allProducts Avtive 

        ProductActive: builder.mutation({
            query: (val) => ({
                url: `product/approveStatus/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
            invalidatesTags: ['allProducts']
        }),


        // category/updateStatus Avtive 

        catagaryActive: builder.mutation({
            query: (val) => ({
                url: `category/updateStatus/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
            invalidatesTags: ['catagary']
        }),

        // getBrands Avtive 

        brandActive: builder.mutation({
            query: (val) => ({
                url: `brand/activeStatus/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
            invalidatesTags: ['getBrand']
        }),


        // customer Avtive 

        customerActive: builder.mutation({
            query: (val) => ({
                url: `customer/updateCustomerStatus/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
            invalidatesTags: ['customer']
        }),


        // add Popups

        postPopup: builder.mutation({
            query: (data) => ({
                url: `popup/add_Popup`,
                method: 'POST',
                body: data
            }),
        }),

        // update Popups

        updatePopups: builder.mutation({
            query: (val) => ({
                url: `popup/update_Popup/${val.id}`,
                method: 'PUT',
                body: val.data
            }),
        }),

        getAffiliateWithdrawRequest: builder.query({
            query: () => ({
                url: 'affiliateWithdraw',
                method: 'GET'
            }),
            providesTags: ['getAffiliateWithdraw']
        }),

        getAffiliateLogs: builder.query({
            query: () => ({
                url: 'affiliatelogs',
                method: 'GET'
            }),
            providesTags: ['getAffiliateLogs']
        }),

        getRefferalUsers: builder.query({
            query: () => ({
                url: 'affiliateReferal',
                method: 'GET'
            }),
            providesTags: ['getRefferalUsers']
        }),

        getAffiliateUsers: builder.query({
            query: () => ({
                url: 'affiliateUser',
                method: 'GET'
            }),
            providesTags: ['getaffiliateUsers']
        }),

        getBasicAffiliate: builder.query({
            query: () => ({
                url: 'affiliateBasic/1',
                method: 'GET'
            }),
            providesTags: ['getaffiliateBasic']
        }),

        updateAffiliateBasic: builder.mutation({
            query: (val) => ({
                url: `affiliateBasic/updateBasicAffiliate`,
                method: 'PUT',
                body: val
            }),
        }),

        updateProductsSharingAffiliate: builder.mutation({
            query: (val) => ({
                url: `affiliateBasic/updateProductSharingAffiliate`,
                method: 'PUT',
                body: val
            }),
        }),

        updateLinkValidationTime: builder.mutation({
            query: (val) => ({
                url: `affiliateBasic/updateLinkAffiliate`,
                method: 'PUT',
                body: val
            }),
        }),

        updateCategoryWiseAffilliate: builder.mutation({
            query: (val) => ({
                url: `affiliateBasic/updateCategoryWiseAffiliate`,
                method: 'PUT',
                body: val
            }),
        }),

        getAffilliateUserVerificationById: builder.query({
            query: (id) => ({
                url: `affiliateUser/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        updateAffilliateUserVerification: builder.mutation({
            query: (payload) => ({
                url: `affiliateUser/update_affiliateUserStatus/${payload.id}`,
                method: 'PUT',
                body: payload.data,
                // headers: {
                //     'Content-type': 'application/json; charset=UTF-8',
                // },
            }),
            providesTags: ['updateAffilliateUser']
        }),

        postQuotation: builder.mutation({
            query: (data) => ({
                url: `quotation/addQuotation`,
                method: 'POST',
                body: data
            }),
        }),


        postQuotation: builder.mutation({
            query: (data) => ({
                url: `quotation/addQuotation`,
                method: 'POST',
                body: data
            }),
        }),

        getOtpConfigurationList: builder.query({
            query: () => ({
                url: 'otpconfig',
                method: 'GET'
            }),
            providesTags: ['getOTPConfiguration']
        }),

        updateOTPConfiguration: builder.mutation({
            query: (payload) => ({
                url: `otpcredential/update_otpCredential/${payload.id}`,
                method: 'PUT',
                body: payload,

            }),
            providesTags: ['updateOTPConfiguration']
        }),

        postQuotation: builder.mutation({
            query: (data) => ({
                url: `quotation/addQuotation`,
                method: 'POST',
                body: data
            }),
        }),
        addWholeSale: builder.mutation({
            query: (data) => ({
                url: `wholesale/add_wholesales`,
                method: 'POST',
                body: data.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + data.token
                }
            }),
        }),

        getWholsaleProductsById: builder.query({
            query: (id) => ({
                url: `wholesale/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getOTPCredentialLists: builder.query({
            query: () => ({
                url: 'otpCredential',
                method: 'GET'
            }),
            providesTags: ['getOTPCredentialLists']
        }),

        updateOtpCredential: builder.mutation({
            query: (payload) => ({
                url: `otpCredential/update_otpCredential/${payload.id}`,
                method: 'PUT',
                body: payload,
                // headers: {
                //     'Content-type': 'application/json; charset=UTF-8',
                // },
            }),
            providesTags: ['updateOtpCredential']
        }),

        getPayFastCredential: builder.query({
            query: () => ({
                url: 'africanCredential/payfast',
                method: 'GET'
            }),
            providesTags: ['getPayFastCredentialLists']
        }),

        updatePayFastCredential: builder.mutation({
            query: (payload) => ({
                url: 'africanCredential/payfast',
                method: 'PUT',
                body: payload,
                // headers: {
                //     'Content-type': 'application/json; charset=UTF-8',
                // },
            }),
            providesTags: ['updatePayFastCredential']
        }),

        getFlutterCredential: builder.query({
            query: () => ({
                url: 'africanCredential/flutter',
                method: 'GET'
            }),
            providesTags: ['getFlutterCredential']
        }),

        updateFlutterCredential: builder.mutation({
            query: (payload) => ({
                url: 'africanCredential/flutter',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updateFlutterCredential']
        }),

        getTingoCredential: builder.query({
            query: () => ({
                url: 'africanCredential/tingg',
                method: 'GET'
            }),
            providesTags: ['getTingoCredential']
        }),

        updateTingoCredential: builder.mutation({
            query: (payload) => ({
                url: 'africanCredential/tingg',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updateTingoCredential']
        }),

        getFlutterActivation: builder.query({
            query: () => ({
                url: 'africanConfig/flutter',
                method: 'GET'
            }),
            providesTags: ['getFlutterActivation']
        }),

        updateFlutterActivation: builder.mutation({
            query: (payload) => ({
                url: 'africanConfig/flutter',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updateFlutterActivation']
        }),

        getPayFastActivation: builder.query({
            query: () => ({
                url: 'africanConfig/payfast',
                method: 'GET'
            }),
            providesTags: ['getPayFastActivation']
        }),

        updatePayFastActivation: builder.mutation({
            query: (payload) => ({
                url: 'africanConfig/payfast',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updatePayFastActivation']
        }),

        getTingoActivation: builder.query({
            query: () => ({
                url: 'africanConfig/tingg',
                method: 'GET'
            }),
            providesTags: ['getTingoActivation']
        }),

        updateTingoActivation: builder.mutation({
            query: (payload) => ({
                url: 'africanConfig/tingg',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updateTingoActivation']
        }),

        getRazorPayActivation: builder.query({
            query: () => ({
                url: 'africanConfig/razorpay',
                method: 'GET'
            }),
            providesTags: ['getRazorPayActivation']
        }),

        updateRazorPayActivation: builder.mutation({
            query: (payload) => ({
                url: 'africanConfig/razorpay',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updateRazorPayActivation']
        }),

        getPayuMoneyActivation: builder.query({
            query: () => ({
                url: 'africanConfig/payUMoney',
                method: 'GET'
            }),
            providesTags: ['getPayuMoneyActivation']
        }),

        updatePayumoneyActivation: builder.mutation({
            query: (payload) => ({
                url: 'africanConfig/payUMoney',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updatePayumoneyActivation']
        }),

        getPayTmActivation: builder.query({
            query: () => ({
                url: 'africanConfig/paytm',
                method: 'GET'
            }),
            providesTags: ['getPayTmActivation']
        }),

        updatePayTmActivation: builder.mutation({
            query: (payload) => ({
                url: 'africanConfig/paytm',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updatePayTmActivation']
        }),

        getRazorPayCredential: builder.query({
            query: () => ({
                url: 'africanCredential/razorpay',
                method: 'GET'
            }),
            providesTags: ['getRazorPayCredential']
        }),

        updateRazorPayCredential: builder.mutation({
            query: (payload) => ({
                url: 'africanCredential/razorpay',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updateRazorPayCredential']
        }),

        getPayuMoneyCredential: builder.query({
            query: () => ({
                url: 'africanCredential/payU',
                method: 'GET'
            }),
            providesTags: ['getPayuMoneyCredential']
        }),

        updatePayuMoneyCredential: builder.mutation({
            query: (payload) => ({
                url: 'africanCredential/payU',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updatePayuMoneyCredential']
        }),

        getPayTmCredential: builder.query({
            query: () => ({
                url: 'africanCredential/paytm',
                method: 'GET'
            }),
            providesTags: ['getPayTmCredential']
        }),

        updatePayTmCredential: builder.mutation({
            query: (payload) => ({
                url: 'africanCredential/paytm',
                method: 'PUT',
                body: payload,
            }),
            providesTags: ['updatePayTmCredential']
        }),

        getDeliveryBoyStatus: builder.query({
            query: () => ({
                url: 'orderStatusMaster',
                method: 'GET'
            }),
            providesTags: ['getDeliveryBoyStatus']
        }),

        updateDeliveryBoyStatus: builder.mutation({
            query: (payload) => ({
                url: `orderstatusmaster/update_deliveryOrderStatusMaster/${payload.id}`,
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['getDeliveryBoyStatus']
        }),

        getDeliveryboyPaymentConfiguration: builder.query({
            query: () => ({
                url: 'deliveryConfig/payment',
                method: 'GET'
            }),
            providesTags: ['deliveryBoypaymentconfig']
        }),

        updateDeliveryboyPaymentConfiguration: builder.mutation({
            query: (payload) => ({
                url: 'deliveryConfig/payment',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['deliveryBoypaymentconfig']
        }),

        getPickupLocationForDelivery: builder.query({
            query: () => ({
                url: 'deliveryConfig/pickup',
                method: 'GET'
            }),
            providesTags: ['pickupLocationForDelivery']
        }),

        updatePickupLocationForDelivery: builder.mutation({
            query: (payload) => ({
                url: 'deliveryConfig/pickup',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['deliveryBoypaymentconfig']
        }),

        getNotificationConfigurationForDelivery: builder.query({
            query: () => ({
                url: 'deliveryConfig/notification',
                method: 'GET'
            }),
            providesTags: ['NotificationConfigurationForDelivery']
        }),

        updateNotificationConfigurationForDelivery: builder.mutation({
            query: (payload) => ({
                url: 'deliveryConfig/notification',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['deliveryBoypaymentconfig']
        }),

        getSettingSiteConfiguration: builder.query({
            query: (token) => ({
                url: 'generalSetting/siteConfig',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },

            }),
            providesTags: ['SettingSiteConfiguration']
        }),

        updateSettingSiteConfiguration: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/siteConfig',
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
            invalidatesTags: ['SettingSiteConfiguration']
        }),

        getSettingSalesData: builder.query({
            query: (token) => ({
                url: 'generalSetting/sales',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            }),
            providesTags: ['SettingSalesData']
        }),

        updateSettingSales: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/sales',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['SettingSalesData']
        }),

        getSettingProducts: builder.query({
            query: (token) => ({
                url: 'generalSetting/product',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            }),
            providesTags: ['SettingProducts']
        }),

        updateSettingProducts: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/product',
                method: 'PUT',
                body: payload.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + payload.token
                },
            }),
            invalidatesTags: ['SettingProducts']
        }),

        getSettingMoneyAndNumberFormat: builder.query({
            query: () => ({
                url: 'generalSetting/moneyAndNumberFormat',
                method: 'GET'
            }),
            providesTags: ['MoneyAndNumberFormat']
        }),

        updateMoneyFormat: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/moneyAndNumberFormat',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['MoneyAndNumberFormat']
        }),

        getSystemSettingPrefix: builder.query({
            query: () => ({
                url: 'generalSetting/prefix',
                method: 'GET'
            }),
            providesTags: ['SystemSettingPrefix']
        }),

        updateSystemSettingPrefix: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/prefix',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['SystemSettingPrefix']
        }),

        getSettingWeighingScale: builder.query({
            query: () => ({
                url: 'generalSetting/weight',
                method: 'GET'
            }),
            providesTags: ['weighingScale']
        }),

        updateSettingWeighingScale: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/weight',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['weighingScale']
        }),

        getSettingEmail: builder.query({
            query: () => ({
                url: 'generalSetting/email',
                method: 'GET'
            }),
            providesTags: ['settingEmail']
        }),

        updateSettingEmail: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/email',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['settingEmail']
        }),

        getSettingAwardPoint: builder.query({
            query: () => ({
                url: 'generalSetting/award',
                method: 'GET'
            }),
            providesTags: ['AwardPoint']
        }),

        updateAwardPoint: builder.mutation({
            query: (payload) => ({
                url: 'generalSetting/award',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['AwardPoint']
        }),

        getFacebookCredentail: builder.query({
            query: () => ({
                url: 'socialMediaCredential/facebook',
                method: 'GET'
            }),
            providesTags: ['FacebookCredentail']
        }),

        updateFacebookCredentail: builder.mutation({
            query: (payload) => ({
                url: 'socialMediaCredential/facebook',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['FacebookCredentail']
        }),

        getTwitterCredentail: builder.query({
            query: () => ({
                url: 'socialMediaCredential/twitter',
                method: 'GET'
            }),
            providesTags: ['TwitterCredentail']
        }),

        updateTwitterCredentail: builder.mutation({
            query: (payload) => ({
                url: 'socialMediaCredential/twitter',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['TwitterCredentail']
        }),

        getLinkedInCredentail: builder.query({
            query: () => ({
                url: 'socialMediaCredential/linkedin',
                method: 'GET'
            }),
            providesTags: ['LinkedInCredentail']
        }),

        updateLinkedInCredentail: builder.mutation({
            query: (payload) => ({
                url: 'socialMediaCredential/linkedin',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['LinkedInCredentail']
        }),

        getInstagramCredentail: builder.query({
            query: () => ({
                url: 'socialMediaCredential/instagram',
                method: 'GET'
            }),
            providesTags: ['InstagramCredentail']
        }),

        updateInstagramCredentail: builder.mutation({
            query: (payload) => ({
                url: 'socialMediaCredential/instagram',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['InstagramCredentail']
        }),

        getGoogleCredentail: builder.query({
            query: () => ({
                url: 'socialMediaCredential/google',
                method: 'GET'
            }),
            providesTags: ['GoogleCredentail']
        }),

        updateGoogleCredentail: builder.mutation({
            query: (payload) => ({
                url: 'socialMediaCredential/google',
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['GoogleCredentail']
        }),

        getPOSCategory: builder.query({
            query: () => ({
                url: 'category/public',
                method: 'GET'
            }),
            providesTags: ['posCategory']
        }),

        getPOSBrands: builder.query({
            query: () => ({
                url: 'brand/public',
                method: 'GET'
            }),
            providesTags: ['posBrands']
        }),

        getPOSCategoryById: builder.query({
            query: (id) => ({
                url: `product/category/${id}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),

        getPOSBrandById: builder.query({
            query: (id) => ({
                url: `product/brand/${id}`,
                method: 'GET',
            }),
        }),

        getPOSSubCategoryId: builder.query({
            query: (id) => ({
                url: `category/child/${id}`,
                method: 'GET',
            }),
        }),

        addPOSCustomer: builder.mutation({
            query: (data) => ({
                url: 'pos/userRegister',
                method: 'POST',
                body: data
            }),
        }),

        getPOSCustomerGroup: builder.query({
            query: () => ({
                url: 'customerRole',
                method: 'GET',
            }),
        }),

        getPOSUserDetailId: builder.query({
            query: (id) => ({
                url: `customer/${id}`,
                method: 'GET',
            }),
        }),

        getCustomerRole: builder.query({
            query: () => ({
                url: 'customerrole',
                method: 'GET',
            }),
        }),

        getTimeFormat: builder.query({
            query: () => ({
                url: 'timeformat',
                method: 'GET',
            }),
        }),

        addDCustomer: builder.mutation({
            query: (pay) => ({
                url: `customer/add_Customer`,
                method: 'POST',
                body: pay.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + pay.token
                },
            }),
            invalidatesTags: ['customer']
        }),

        getCustomerSelectedShippingAddressById: builder.query({
            query: (id) => ({
                url: `user/shipAddress/${id}`,
                method: 'GET',
            }),
        }),

        getCustomerSelectedBillingAddressById: builder.query({
            query: (id) => ({
                url: `user/billAddress/${id}`,
                method: 'GET',
            }),
        }),

        addPosPayment: builder.mutation({
            query: (data) => ({
                url: `pos/order`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Pos']
        }),
        getTicketBuildingD: builder.query({
            query: () => ({
                url: 'building/public',
                method: 'GET',
            }),
        }),
        getTicketBlockD: builder.query({
            query: () => ({
                url: 'block/public',
                method: 'GET',
            }),
        }),
        getTicketFloorD: builder.query({
            query: () => ({
                url: 'floor/public',
                method: 'GET',
            }),
        }),
        getTicketWardD: builder.query({
            query: () => ({
                url: 'ward/public',
                method: 'GET',
            }),
        }),
        getTicketOfficeRoomD: builder.query({
            query: () => ({
                url: 'office/public',
                method: 'GET',
            }),
        }),
        getTicketareaD: builder.query({
            query: () => ({
                url: 'area/public',
                method: 'GET',
            }),
        }),
        getTicketCompaintTypeD: builder.query({
            query: () => ({
                url: 'complaintType/public',
                method: 'GET',
            }),
        }),
        getTicketCompaintNatureD: builder.query({
            query: () => ({
                url: 'complaintNature/public',
                method: 'GET',
            }),
        }),
        getTicketAssignToD: builder.query({
            query: () => ({
                url: 'staff',
                method: 'GET',
            }),
        }),
        addSupportTicketD: builder.mutation({
            query: (data) => ({
                url: `ticket_ccm/add_Tickets`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Pos']
        }),
        getTicketListingD: builder.query({
            query: (tokenn) => ({
                url: 'ticket_ccm',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + tokenn
                },
            }),

        }),
        getTicketListingFilledD: builder.query({
            query: () => ({
                url: 'ticket_ccm/generateToken',
                method: 'GET',
            }),
        }),
        getTicketRoleD: builder.query({
            query: () => ({
                url: 'roles',
                method: 'GET',
            }),
        }),
        getModalAssignToData: builder.query({
            query: (id) => ({
                url: `staff/role/${id}`,
                method: 'GET',
            }),
        }),
        getTicketMessageData: builder.query({
            query: (id) => ({
                url: `ccm_ticketReply/ticket/${id}`,
                method: 'GET',
            }),
        }),
        getTicketDataById: builder.query({
            query: (id) => ({
                url: `ticket_ccm/${id}`,
                method: 'GET',
            }),
        }),
        getTicketStatus: builder.query({
            query: () => ({
                url: 'ticketstatusmaster',
                method: 'GET',
            }),
        }),

        updateTicketDaata: builder.mutation({
            query: (payload) => ({
                url: `ticket_ccm/update_Tickets/${payload.id}`,
                method: 'PUT',
                body: payload,
            }),
        }),

        getTComplaintType: builder.query({
            query: () => ({
                url: 'complainttype',
                method: 'GET',
            }),
        }),

        deleteComplaintType: builder.mutation({
            query: (id) => ({
                url: `complainttype/delete_ComplaintType/${id}`,
                method: 'DELETE',
            }),
        }),

        addComplaintType: builder.mutation({
            query: (data) => ({
                url: `complainttype/add_ComplaintType`,
                method: 'POST',
                body: data
            }),
        }),
        getTComplaintTypeById: builder.query({
            query: (id) => ({
                url: `complainttype/${id}`,
                method: 'GET',
            }),
        }),



        getTComplaintNature: builder.query({
            query: () => ({
                url: 'complaintNature',
                method: 'GET',
            }),
        }),

        deleteComplaintNature: builder.mutation({
            query: (id) => ({
                url: `complaintNature/delete_ComplainNature/${id}`,
                method: 'DELETE',
            }),
        }),

        addComplaintNature: builder.mutation({
            query: (data) => ({
                url: `complaintNature/add_ComplainNature`,
                method: 'POST',
                body: data
            }),
        }),
        getTComplaintNatureById: builder.query({
            query: (id) => ({
                url: `complaintNature/${id}`,
                method: 'GET',
            }),
        }),
        addQuatationV: builder.mutation({
            query: (data) => ({
                url: `serviceQuotation/addQuotation`,
                method: 'POST',
                body: data
            }),
        }),

        addDeleveryChallan: builder.mutation({
            query: (val) => ({
                url: `serviceDeliveryChalan/addDeliveryChallan`,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.tokenn
                },
                body: val.data
            }),
        }),

        addpurchaseVcart: builder.mutation({
            query: (data) => ({
                url: `servicePurchaseProduct/addCart`,
                method: 'POST',
                body: data
            }),
        }),
        addchallanVcart: builder.mutation({
            query: (data) => ({
                url: `serviceProductStock/addToCart`,
                method: 'POST',
                body: data
            }),
        }),
        postpurchaseVcart: builder.mutation({
            query: (data) => ({
                url: `servicePurchaseProduct/addPurchase`,
                method: 'POST',
                body: data
            }),
        }),
        getCounter: builder.query({
            query: (token) => ({
                url: 'country/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
        }),
        getCountry: builder.query({
            query: (token) => ({
                url: 'country/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            })
        }),
        postCountry: builder.mutation({
            query: (val) => ({
                url: `country/add_Country`,
                method: 'POST',
                body: val.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),
        deleteCountry: builder.mutation({
            query: (val) => ({
                url: `country/delete_country/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),
        editCountry: builder.mutation({
            query: (val) => ({
                url: `country/update_country/${val.id}`,
                method: 'PUT',
                body: val.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        getUnit: builder.query({
            query: (token) => ({
                url: 'unitMaster/admin',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            })
        }),
        postUnit: builder.mutation({
            query: (val) => ({
                url: `unitMaster/add_unit`,
                method: 'POST',
                body: val.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),
        deleteUnit: builder.mutation({
            query: (val) => ({
                url: `unitmaster/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
        }),

        postTimeSlote: builder.mutation({
            query: (val) => ({
                url: `timeslot/add_Timeslot`,
                method: 'POST',
                body: val.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
            providesTags: ['timeSlote']
        }),
        getTimeSlote: builder.query({
            query: (token) => ({
                url: 'timeslot',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            }),
            providesTags: ['timeSlote']
        }),
        deletetimeSlote: builder.mutation({
            query: (val) => ({
                url: `timeslot/delete_timeslot/${val.id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
            invalidatesTags: ['timeSlote']
        }),

        getArea: builder.query({
            query: (token) => ({
                url: 'area/public',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            }),
        }),
        getChallanList: builder.query({
            query: (token) => ({
                url: 'serviceDeliveryChalan',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                }
            }),
        }),
        getTimegroup: builder.query({
            query: (token) => ({
                url: 'timeGroup',
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + token
                },
            }),
            providesTags: ['timegroup']
        }),
        postTimeGroup: builder.mutation({
            query: (val) => ({
                url: `timegroup/add_timegroup`,
                method: 'POST',
                body: val.data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + val.token
                },
            }),
            providesTags: ['timegroup']
        }),

    })

})

export const { useGetCounterQuery,useGetTimegroupQuery,useGetChallanListQuery,useGetCountryQuery, useGetAreaQuery, useDeletetimeSloteMutation, useGetTimeSloteQuery, usePostTimeSloteMutation,usePostTimeGroupMutation, useDeleteUnitMutation, usePostUnitMutation, useGetUnitQuery, useEditCountryMutation, useDeleteCountryMutation, usePostCountryMutation, useAddchallanVcartMutation, usePostpurchaseVcartMutation, useAddpurchaseVcartMutation, useAddDeleveryChallanMutation, useAddQuatationVMutation, useDeleteRowPurchaseMutation, useDeleteCartRowMutation, useUpdatePopupsMutation, usePostPopupMutation, useCustomerActiveMutation, useBrandActiveMutation, useCatagaryActiveMutation, useProductActiveMutation, useSellerActiveMutation, useGetReqListQuery, useUpdateBrandReqMutation, useUpdateDeleveryMutation, useDeleteDeleveryMutation, useDeletePaymentMutation, useAddDeleveryMutation, useAddTransactionMutation, useAddComboProductsMutation, useUpdateListProductsMutation, useAddPurchaseListMutation, useGetPurchaseListsQuery, useAddPurchaseCartMutation, useGetProductSearchQuery, useAddSellerProductNewMutation, useUpdateSellerMutation, useDeleteSellerProductMutation, useOwnSellerProductQuery, useGetUnitMasterQuery, useSellerLoginMutation, useGetPickupOrderDataMutation, useGetstaffDetailQuery, useLoginStaffsMutation, useGetOrdersByPickupsQuery, useForm_variatioMutation, useGetOrderByStatusQuery, useGetAllStatusOrdersQuery, useGetAllProductsQuery, useGetCategoriesQuery, useGetBrandsQuery, useGetSizesQuery, useAddNewSizeMutation, useAddNewBrandMutation, useAddNewCategoryMutation, useAddNewProductMutation, useGetBannerQuery, useDeleteProductMutation, useDeleteSizeMutation, useDeleteBrandMutation, useDeleteCategoryMutation, useGetPlaceByIdQuery, useGetPickupPointQuery, useGetCustomersQuery, useGetSellersQuery, useGetTicketListsQuery, useGetLanguagesQuery, useAddPickUpPointMutation, useGetPagesQuery, useDeleteCustomerMutation, useGetCurrencyQuery, useGetOrdersQuery, useAddNewCurrencyMutation, useGetCouponsQuery, useDeleteCurrencyMutation, useDeleteLanguageMutation, useDeleteSupportTicketMutation, useDeleteCouponMutation, useAddNewLanguageMutation, useAddNewCouponMutation, useEditCurrencyMutation, useGetCurrencyByIdQuery, useGetCouponByIdQuery, useEditCouponMutation, useGetSellerProductQuery, useAddPaymentGetMutation, useGetOrderDetailQuery, useAddOrderConfigsMutation, useAddPagesMutation, useDeletePageListMutation, useEditPageListMutation, useGetLanguageByIdQuery, useEditLanguageMutation, useGetBrandByIdQuery, useEditBrandMutation, useGetBlogsQuery, useDeleteBlogsMutation, useDeleteAttributesMutation, useEditSupportTicketMutation, useGetSupportTicketByIdQuery, useGetAttributesQuery, useAddNewBlogsMutation, useGetBlogPostByIdQuery, useEditAllBlogsPostMutation, useGetCustomerByIdQuery, useEditCustomerMutation, useAddNewAttributeMutation, useGetAttributeByIdQuery, useEditAttributeMutation, useAddGeneralSettingMutation, useDeleteSellerBannerMutation, useGetBlogsCategoryQuery, useDeleteBlogCategoryMutation, useAddBlogCategoryMutation, useGetBlogCategoryByIdQuery, useEditBlogCategoryMutation, useDeleteOrderMutation, useGetSellerBannerByIdQuery, useEditSellerBannerMutation, useAddOrderConfigurationMutation, useGetCustomerShippingAdressByIdQuery, useGetColorsQuery, useDeleteColorMutation, useAddColorMutation, useGetColorByIdQuery, useEditColorMutation, useGetFlashDealsQuery, useDeleteFlashDealMutation, useAddFlasDealMutation, useGetFlashDealByIdQuery, useEditFlashDealMutation, useGetProductByIdQuery, useEditProductMutation, useDeleteSellerListMutation, useAddSellerListMutation, useEditSellerListMutation, useGetSellerDetailQuery, useGetSmsTemplateQuery, useAddSmsListMutation, useEditSmsListMutation, useSmsDeleteMutation, useDeletePickupPointMutation, useGetPickupPointByIdQuery, useEditPickupPointMutation, useAddStaffMutation, useGetAllStaffsQuery, useDeleteStaffMutation, useGetRolesQuery, useDeleteRoleMutation, useGetStaffByIdQuery, useEditStaffDataMutation, useAddRoleMutation, useGetRoleByIdQuery, useEditRoleDataMutation, useAddFileSystemMutation, useAddShareRewardMutation, useAddLikeRewardMutation, useAddBulkImportFileMutation, useGetOrderStartByIdQuery, useAddOrderStatusMutation, useGetClubPointUserPointQuery, useAddSetProductPointWithinRangeMutation, useAddPointForAllProductsMutation, useGetClubSetAllPointsTableDataQuery, useAddNewSellerPackageMutation, useGetPointToWalletDataQuery, useEditPointToWalletMutation, useEditAllPointsTableMutation, useGetSellerPackageQuery, useDeleteSellerPackageMutation, useGetSellerPackageByIdQuery, useEditSellerPackageMutation, useGetAllPointsTableByIdQuery, useDeleteSetAllPointsMutation, useDeleteUserPointsMutation, useGetUserPointsByIdQuery, useEditUserPointMutation, useGetListPurchaseQuery, useAddSellerProductMutation, useGetBasicAffiliateQuery, useUpdateLinkValidationTimeMutation, useUpdateAffiliateBasicMutation, useUpdateProductsSharingAffiliateMutation, useUpdateCategoryWiseAffilliateMutation, useGetAffiliateLogsQuery, useGetAffiliateWithdrawRequestQuery, useGetAffiliateUsersQuery, useUpdateAffilliateUserVerificationMutation, useGetAffilliateUserVerificationByIdQuery, useGetRefferalUsersQuery, usePostQuotationMutation, useGetOtpConfigurationListQuery, useUpdateOTPConfigurationMutation, useAddWholeSaleMutation, useGetOTPCredentialListsQuery, useUpdateOtpCredentialMutation, useGetPayFastCredentialQuery, useUpdatePayFastCredentialMutation, useGetFlutterCredentialQuery, useUpdateFlutterCredentialMutation, useGetTingoCredentialQuery, useUpdateTingoCredentialMutation, useGetFlutterActivationQuery, useUpdateFlutterActivationMutation, useGetPayFastActivationQuery, useUpdatePayFastActivationMutation, useGetTingoActivationQuery, useUpdateTingoActivationMutation, useGetRazorPayActivationQuery, useUpdateRazorPayActivationMutation, useGetPayuMoneyActivationQuery, useUpdatePayumoneyActivationMutation, useGetPayTmActivationQuery, useUpdatePayTmActivationMutation, useGetRazorPayCredentialQuery, useUpdateRazorPayCredentialMutation, useGetPayuMoneyCredentialQuery, useUpdatePayuMoneyCredentialMutation, useGetPayTmCredentialQuery, useUpdatePayTmCredentialMutation, useGetDeliveryBoyStatusQuery, useUpdateDeliveryBoyStatusMutation, useGetDeliveryboyPaymentConfigurationQuery, useUpdateDeliveryboyPaymentConfigurationMutation, useGetPickupLocationForDeliveryQuery, useGetNotificationConfigurationForDeliveryQuery, useUpdateNotificationConfigurationForDeliveryMutation, useGetSettingSiteConfigurationQuery, useUpdateSettingSiteConfigurationMutation, useGetSettingSalesDataQuery, useUpdateSettingSalesMutation, useGetSettingProductsQuery, useUpdateSettingProductsMutation, useGetSettingMoneyAndNumberFormatQuery, useUpdateMoneyFormatMutation, useGetSystemSettingPrefixQuery, useUpdateSystemSettingPrefixMutation, useGetSettingWeighingScaleQuery, useUpdateSettingWeighingScaleMutation, useGetSettingEmailQuery, useUpdateSettingEmailMutation, useGetSettingAwardPointQuery, useUpdateAwardPointMutation, useGetFacebookCredentailQuery, useUpdateFacebookCredentailMutation, useGetTwitterCredentailQuery, useUpdateTwitterCredentailMutation, useGetLinkedInCredentailQuery, useUpdateLinkedInCredentailMutation, useGetInstagramCredentailQuery, useUpdateInstagramCredentailMutation, useGetGoogleCredentailQuery, useUpdateGoogleCredentailMutation, useGetPOSCategoryQuery, useGetPOSBrandsQuery, useGetPOSCategoryByIdQuery, useGetPOSBrandByIdQuery, useGetPOSSubCategoryIdQuery, useAddPOSCustomerMutation, useGetPOSCustomerGroupQuery, useGetPOSUserDetailIdQuery, useGetWholsaleProductsByIdQuery, useGetCustomerRoleQuery, useGetTimeFormatQuery, useAddDCustomerMutation, useGetCustomerSelectedShippingAddressByIdQuery, useGetCustomerSelectedBillingAddressByIdQuery, useGetComboProductsByIdQuery, useAddPosPaymentMutation, useGetTicketBuildingDQuery, useGetTicketBlockDQuery, useGetTicketFloorDQuery, useGetTicketWardDQuery, useGetTicketOfficeRoomDQuery, useGetTicketareaDQuery, useAddSupportTicketDMutation, useGetTicketCompaintTypeDQuery, useGetTicketCompaintNatureDQuery, useGetTicketAssignToDQuery, useGetTicketListingDQuery, useGetTicketListingFilledDQuery, useGetTicketRoleDQuery, useGetModalAssignToDataQuery, useGetTicketMessageDataQuery, useGetTicketDataByIdQuery, useGetTicketStatusQuery, useUpdateTicketDaataMutation, useUpdateSupportTicketDetailMutation, useGetTComplaintTypeQuery, useDeleteComplaintTypeMutation, useAddComplaintTypeMutation, useGetTComplaintNatureQuery, useDeleteComplaintNatureMutation, useAddComplaintNatureMutation, useGetTComplaintTypeByIdQuery, useGetTComplaintNatureByIdQuery } = productsApi