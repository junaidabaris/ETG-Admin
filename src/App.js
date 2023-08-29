
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media.css";
import "./assets/css/style.css";

import Header from "./common/header/Header";
import "./assets/all-pannel-css/css/vendors.css";
import "./assets/all-pannel-css/css/stylesheets.css";
import "./assets/all-pannel-css/css/aiz-core.css";
import "./assets/all-pannel-css/css/custom-style.css";

// import "./Admin-pannel/Components/crmNew/assets/styles/main.css";
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import Footer from './common/footer/Footer';
import { useState } from 'react';
import DashboardRightSectionAdmin from "./Admin-pannel/Pages/dashboardRightSection";
import DashboardAdminPage from "./Admin-pannel/Pages/dashboardPage";
import AddNewProductsPage from "./Admin-pannel/Pages/addnewProductsPage";
import SellerProductsPage from "./Admin-pannel/Pages/sellerProducts";
import BrandPageAdmin from "./Admin-pannel/Pages/brandAdmin";
import AttributeAdminPage from "./Admin-pannel/Pages/attributeAdminPage";
import CategoriesPageAdmin from "./Admin-pannel/Pages/categoriesPageAdmin";
import PosConfigurationPage from "./Admin-pannel/Pages/posConfigurationPage";
import AllProductsPage from "./Admin-pannel/Pages/all-productsPage";
import ProductsReviewPage from "./Admin-pannel/Pages/productsReviewPage";
import ColorsPage from "./Admin-pannel/Pages/colors";
import AddNewWholesaleProductsPage from "./Admin-pannel/Pages/addNewWholsaleProducts";
import AllWholsaleProductsPage from "./Admin-pannel/Pages/allWholsaleProducts";
import AllOrdersPage from "./Admin-pannel/Pages/allOrders/Index";
import OrdersDetailsPage from "./Admin-pannel/Pages/OrderDetails/Index";
import InHouseOrderPage from "./Admin-pannel/Pages/inhouseOrder/Index";
import SellerOrdersPage from "./Admin-pannel/Pages/sellerOrders/Index";
import PickUpPointOrderPage from "./Admin-pannel/Pages/pickUpPointOrder/Index";
import CustomerListPage from "./Admin-pannel/Pages/customerList/Index";
import AllSellerPage from "./Admin-pannel/Pages/allSeller/Index";
import InHouseProductsSalePage from "./Admin-pannel/Pages/inHouseProductsSale";
import SellerProductsSalePage from "./Admin-pannel/Pages/sellerproductsSalePage";
import ProductsStockPage from "./Admin-pannel/Pages/productsStockPage";
import ProductWhislistPage from "./Admin-pannel/Pages/productWishlistPage";
import UserSearchesPage from "./Admin-pannel/Pages/userSearchesPage";
import ComissionHistoryPage from "./Admin-pannel/Pages/comissionHistoryPage";
import WalletRechargeHistoryPage from "./Admin-pannel/Pages/walletRechargeHistory";
import PayoutsPage from "./Admin-pannel/Pages/payout/Index";
import PayoutRequestPage from "./Admin-pannel/Pages/payoutRequest/Index";
import PaymentShowPage from "./Admin-pannel/Pages/payoutRequest/paymentShow/Index";
import SellerCommissionPage from "./Admin-pannel/Pages/sellerCommission/Index";
import SellerPackagePage from "./Admin-pannel/Pages/sellerPackage/Index";
import CreatePackagePage from "./Admin-pannel/Pages/sellerPackage/createPackage/Index";
import FlashDealsPage from "./Admin-pannel/Pages/flashDealsPage";
import FlashDealsInformationPage from "./Admin-pannel/Pages/flashDealsInformation";
import NewsLetterPage from "./Admin-pannel/Pages/newsLetter";
import BulkSMSPage from "./Admin-pannel/Pages/bulkSMS";
import SubscribersPage from "./Admin-pannel/Pages/subscribersPage";
import UpdateInfo from "./Admin-pannel/common/UpdateInfo";
import VerificationFormPage from "./Admin-pannel/Pages/varification-form/Index";
import SellerBannerPage from "./Admin-pannel/Pages/sellerBanner/Index";
import UploadedFilePages from "./Admin-pannel/Pages/uploadedFile/Index";
import AffiliatePage from "./Admin-pannel/Pages/affliated/Index";
import CouponPage from "./Admin-pannel/Pages/couponPage";
import CouponInformationAddingPage from "./Admin-pannel/Pages/couponInformationAdding";
import TicketPage from "./Admin-pannel/Pages/ticketPage";
import SupportTicketDetailPage from "./Admin-pannel/Pages/supportTicketDetailPage";
import ProductsConversationPage from "./Admin-pannel/Pages/productsConversation";
import ProductsQuerriesPage from "./Admin-pannel/Pages/productsQuerries";
import AfiliatedConfigurationPage from "./Admin-pannel/Pages/affiliatedConfiguration/Index";
import AffiliateUserPage from "./Admin-pannel/Pages/affiliateUser/Index";
import AffiliateUserDetailsPage from "./Admin-pannel/Pages/affiliateUserDetails/AffiliateUserDetails";
import UploadCreate from "./Admin-pannel/Components/uploadedFile/uploadCreate/UploadCreate";
import AffiliateWithdrowPage from "./Admin-pannel/Pages/affiliateWithdrowRequest/Index";
import AffliateLogsPage from "./Admin-pannel/Pages/affliateLogs/Index";
import OfflineWalletRechargePage from "./Admin-pannel/Pages/offlineWalletRecharge/Index";
import OfflineSellerPackagePaymentRequestPage from "./Admin-pannel/Pages/offlineSellerPackage/Index";
import RefundRequestPage from "./Admin-pannel/Pages/refund-request-page";
import ApprovedRefundsPage from "./Admin-pannel/Pages/approved-RefundsPage";
import RejectedRefundsPage from "./Admin-pannel/Pages/rejected-refunds-page";
import DigitalProductsPage from "./Admin-pannel/Pages/digital-products-page";
import BulkImportPage from "./Admin-pannel/Pages/bulkImport-page";
import NewDigitalProducts from "./Admin-pannel/Components/digitalProducts/new-digital-products/NewDigitalProducts";
import RefundConfigurationPage from "./Admin-pannel/Pages/refund-configurationPage";
import AllPostPage from "./Admin-pannel/Pages/all-post-page";
import AddNewPost from "./Admin-pannel/Components/all-post/add-new-post/AddNewPost";
import BlogCategoriesPage from "./Admin-pannel/Pages/blogCategoriesPage";
import AddCategories from "./Admin-pannel/Components/blogCategories/addCategories/AddCategories";
import ShareRewardPointsPage from "./Admin-pannel/Pages/ShareRewardPointsPage";
import RefferalUsersPage from "./Admin-pannel/Pages/refferalUsers/Index";
import ManualPaymentMethordPage from "./Admin-pannel/Pages/manualPaymentMethord/Index";
import ManualPaymentMethordCreate from "./Admin-pannel/Components/manualPaymentMethord/ManualPaymentMethordCreate";
import ManualPaymentMethordInformation from "./Admin-pannel/Components/manualPaymentMethord/ManualPaymentMethordInformation";
import OtpConfigurationPage from "./Admin-pannel/Pages/otpConfigurationPage";
// import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import SetOtpCredentialPage from "./Admin-pannel/Pages/setOtpCredentialPage";
import ClubPointConfigurationPage from "./Admin-pannel/Pages/clubPointConfiguration/Index";
import UserPointPage from "./Admin-pannel/Pages/userPonts/Index";
import UsrPointsDetails from "./Admin-pannel/Components/userPoint/UserPointDetails";
import AfricanPgConfigurationPage from "./Admin-pannel/Pages/africanPgConfigurationPage";
import PaymentMethodPage from "./Admin-pannel/Pages/paymentMethodPage";
import AfricanPgCredentialPage from "./Admin-pannel/Pages/africanPgCredentialPage";
import HeaderPage from "./Admin-pannel/Pages/websiteSetup/headerPage";
import WebsitePagesPage from "./Admin-pannel/Pages/websiteSetup/wbsitePagesPage";
import AllPages from "./Admin-pannel/Components/websiteSetup/websitePage/AllPages";
import AddNewPage from "./Admin-pannel/Pages/websiteSetup/wbsitePagesPage/AddNewPage";
import FooterPage from "./Admin-pannel/Pages/websiteSetup/footerPage";
import AppearancesPage from "./Admin-pannel/Pages/websiteSetup/appearancesPage";
import GeneralSettingPage from "./Admin-pannel/Pages/setup&Configuration/generalSettingPage";
import FeaturesActivationPage from "./Admin-pannel/Pages/setup&Configuration/featuresActivationPage";
import LikeRewardPointsPage from "./Admin-pannel/Pages/likeRewardPointPage";
import AllStaffsPage from "./Admin-pannel/Pages/allStaffsPage";
import StaffPermissionPage from "./Admin-pannel/Pages/staffPermissionsPage";
import StaffInformation from "./Admin-pannel/Components/allStaffs/staffInformation/StaffInformation";
import RoleInformation from "./Admin-pannel/Components/staffPermissionRole/RoleInformation";
import LanguagesPage from "./Admin-pannel/Pages/setup&Configuration/languagePage";
import AddNewLanguagePage from "./Admin-pannel/Pages/addnewLanguagePage";
import LanguageTranslationPage from "./Admin-pannel/Pages/languageTranslationPage";
import AppTranslationPage from "./Admin-pannel/Pages/appTranslationPage";
import LanguageEditPage from "./Admin-pannel/Pages/languageEditPage";
import CurrencyPage from "./Admin-pannel/Pages/setup&Configuration/currencyPage";
import SystemUpdatePage from "./Admin-pannel/Pages/systemUpdatePage";
import ServerStatusPage from "./Admin-pannel/Pages/serverStatusPage";
import PaymentsMethodPage from "./Admin-pannel/Pages/setup&Configuration/paymentsMethod";
import OrderConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/orderConfigurationPage";
import FileSystemCacheConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/fileSystem&CacheConfiguration";
import SocialMediaLoginPage from "./Admin-pannel/Pages/setup&Configuration/socialMediaLoginPage";
import PickupPointsPage from "./Admin-pannel/Pages/setup&Configuration/pickupPointsPage";
import AddnewPickupPoint from "./Admin-pannel/Components/setup&Configuration/pickupPoints/addNewPickupPoint/AddnewPickupPoint";
import SmtpSettingsPage from "./Admin-pannel/Pages/setup&Configuration/smtpSettingPage";
import FacebookChatPage from "./Admin-pannel/Pages/setup&Configuration/facebook/facebookCahtPage";
import FacebookCommentPage from "./Admin-pannel/Pages/setup&Configuration/facebook/facebookCommentPage";
import AnalyticalPage from "./Admin-pannel/Pages/setup&Configuration/google/analyticalToolsPage";
import GoogleRecaptchaPage from "./Admin-pannel/Pages/setup&Configuration/google/googleRecaptchaPage";
import GoogleMapPage from "./Admin-pannel/Pages/setup&Configuration/google/googlemapPage";
import GoogleFirebasePage from "./Admin-pannel/Pages/setup&Configuration/google/googleFirebasePage";
import ShippingConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingConfigurationPage";
import ShippingCountriesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCountriesPage";
import ShippingStatePage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingStatesPage";
import ShippingCitiesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCitiesPage";
import ShippingZonesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingZonesPage";
import ShippingCarrierPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCarrierPage";
import AddnewCategories from "./Admin-pannel/Components/categories/addnewCategories/AddnewCategories";
import EditCategories from "./Admin-pannel/Components/categories/editCategories/EditCategories";
import SizePage from "./Admin-pannel/Pages/sizePage";
import EditBrand from "./Admin-pannel/Components/brandsComponents/EditBrand";
import EditSize from "./Admin-pannel/Components/size/editSize/EditSize";
import AddNewCurrency from "./Admin-pannel/Components/setup&Configuration/currency/addNewCurrency/AddNewCurrency";
import EditCurrency from "./Admin-pannel/Components/setup&Configuration/currency/editCurrency/EditCurrency";
import EditCoupon from "./Admin-pannel/Components/couponInformation/editCoupon/EditCoupon";
import EditSupportTicket from "./Admin-pannel/Components/supportTicketDesk/EditSupportTicket";
import EditAllBlogsPost from "./Admin-pannel/Components/all-post/EditAllBlogsPost";
import EditCustomer from "./Admin-pannel/Components/customerList/EditCustomer";
import EditAttribute from "./Admin-pannel/Components/attributesComponents/EditAttribute";
import EditBlogCategory from "./Admin-pannel/Components/blogCategories/addCategories/EditBlogCategory";
import CustomerShippingAddress from "./Admin-pannel/Components/customerList/customerShippingAddress/CustomerShippingAddress";
import EditSellerBanner from "./Admin-pannel/Components/sellerBanner/EditSellerBanner";
import CustomerShippingAddList from "./Admin-pannel/Components/customerList/customerShippingAddList/CustomerShippingAddList";
import CustomerShippingAdressDetail from "./Admin-pannel/Components/customerList/customerShippingAddress/CustomerShippingAdressDetail";
import EditColor from "./Admin-pannel/Components/colors/EditColor";
import EditFlashDeal from "./Admin-pannel/Components/flashDeals/EditFlashDeal";

// junaid import 
import SellerAddEditForm from "./Admin-pannel/Pages/allSeller/SellerAddEditForm";
import SellerDetail from "./Admin-pannel/Pages/allSeller/SellerDetail";
// import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import SmsList from "./Admin-pannel/Components/smsTemplates/SmsList";
import SmsForm from "./Admin-pannel/Components/smsTemplates/SmsForm";
import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import EditProducts from "./Admin-pannel/Components/all-products/EditProducts";
import EditPickUpPoint from "./Admin-pannel/Components/setup&Configuration/pickupPoints/EditPickUpPoint";
import EditRole from "./Admin-pannel/Components/allStaffs/allRoles/EditRole";
import AddRole from "./Admin-pannel/Components/allStaffs/allRoles/AddRole";
import EditStaff from "./Admin-pannel/Components/allStaffs/EditStaff";
import SetProductPointPage from "./Admin-pannel/Pages/setProductPoint";
import EditAllPointsTable from "./Admin-pannel/Components/clubPoints/setAllPointsTable/EditAllPointsTable";
import EditUserPoint from "./Admin-pannel/Components/userPoint/EditUserPoint";
import ListPurchasePage from "./Admin-pannel/Pages/listPurchasePage";
import AddPurchaseListPage from "./Admin-pannel/Pages/addPurChaseListPage";
import AddsellerProductPage from "./Admin-pannel/Pages/addSellerProductPage";
import OrderByStatus from "./pages/orderByStatus/OrderByStatus";
import OrderByPickupPoints from "./pages/orderByPickups/OrderByPickupPoints";
import LoginSection from "./loginPage/LoginAdmin";
import SellerAllOrder from "./Admin-pannel/Components/allOrders/SellerAllOrder";
import Profile from "./Admin-pannel/Pages/Profile/Profile";
import AddComboProduct from "./Admin-pannel/Pages/addComboProduct/Index";
import StockReport from "./Admin-pannel/Pages/reportStock/StockReport";
import SalesReport from "./Admin-pannel/Pages/reportStock/SalesReport";
import ListComboProdust from "./Admin-pannel/Pages/addComboProduct/ListComboProdust";
import BrandRequest from "./Admin-pannel/Pages/BrandRequest/BrandRequest";
import SellerBrnadList from "./Admin-pannel/Pages/BrandListRequest/SellerBrnadList";
import AddSellerBrnad from "./Admin-pannel/Pages/BrandListRequest/AddSellerBrnad";

import RegisterReport from "./Admin-pannel/Pages/reportStock/registerReport";
import ProductsQuantityAlerts from "./Admin-pannel/Pages/reportStock/productsQuantityAlerts";
import ProductsReport from "./Admin-pannel/Pages/reportStock/productsReport";
import AdjustmentsReport from "./Admin-pannel/Pages/reportStock/adjustmentsReport";
import CategoriesReport from "./Admin-pannel/Pages/reportStock/categoriesReport";
import BrandsReport from "./Admin-pannel/Pages/reportStock/brandsReport";
import Dailysales from "./Admin-pannel/Pages/reportStock/dailysales";
import MonthlySales from "./Admin-pannel/Pages/reportStock/monthlySales";
import PaymentsReport from "./Admin-pannel/Pages/reportStock/paymentsReport";
import TaxReport from "./Admin-pannel/Pages/reportStock/taxReport";
import DailyPurchase from "./Admin-pannel/Pages/reportStock/dailyPurchase";
import MonthlyPurchase from "./Admin-pannel/Pages/reportStock/monthlyPurchase";
import PurchasesReport from "./Admin-pannel/Pages/reportStock/purchasesReport";
import ExpensesReport from "./Admin-pannel/Pages/reportStock/expensesReport";
import CustomerReport from "./Admin-pannel/Pages/reportStock/customerReport";
import SuppliersReport from "./Admin-pannel/Pages/reportStock/suppliersReport";
import StaffsReport from "./Admin-pannel/Pages/reportStock/staffsReport";
import ProfitLossReport from "./Admin-pannel/Pages/reportStock/profitLossReport";
import MostViewedProducts from "./Admin-pannel/Pages/reportStock/mostViewedProducts";
import LoginDeviceHistory from "./Admin-pannel/Pages/reportStock/loginDeviceHistory";
import POSSales from "./Admin-pannel/Pages/sales/posSales";
import ReportedProducts from "./Admin-pannel/Pages/reportStock/reportedProducts";
import RequestedBrands from "./Admin-pannel/Pages/reportStock/requestedBrands";
import AllReviewsRatings from "./Admin-pannel/Pages/reportStock/allReviewsRatings";
import SizeChart from "./Admin-pannel/Pages/reportStock/sizeChart";
import SalesTaxReport from "./Admin-pannel/Pages/reportStock/salesTaxReport";
import SalesEntry from "./Admin-pannel/Pages/salesModuls/SalesEntry";
import ProductDamage from "./Admin-pannel/Pages/productDamageList/ProductDamage";
import MaterialReorders from "./Admin-pannel/Pages/material-Re-Order-List/MaterialReorders";
import DamageProEntry from "./Admin-pannel/Pages/productDamageList/DamageProEntry";
import ProductTransferEntry from "./Admin-pannel/Pages/product-transfer/ProductTransferEntry";
import ProductTransferList from "./Admin-pannel/Pages/product-transfer/ProductTransferList";
import AddNewBanner from "./Admin-pannel/Pages/Banner/AddNewBanner";
import ListBanner from "./Admin-pannel/Pages/Banner/ListBanner";
import BulkInventry from "./Admin-pannel/Pages/bulkInventry/BulkInventry";
import TrackingOrderPage from "./Admin-pannel/Pages/trackingOrder/Index";
import AssignOrder from "./Admin-pannel/Pages/assign_order/AssignOrder";
import AssighOrderStatus from "./Admin-pannel/Pages/assighStatusOrder/AssighOrderStatus";
import PickupProfile from "./Admin-pannel/Pages/pickupProfile/PickupProfile";
import AddPopups from "./Admin-pannel/Pages/add_popup/AddPopups";
import ListPopups from "./Admin-pannel/Pages/add_popup/ListPopups";

import SystemSettingsPage from "./Admin-pannel/Pages/settings/systemSettings/Index";
import AddPrinterPage from "./Admin-pannel/Pages/addPrinter/Index";
import ListPopUpPage from "./Admin-pannel/Pages/listPopUp/Index";
import AddPopUp from "./Admin-pannel/Components/listPopUp/addPopup/AddPopUp";
import EmailTempletePage from "./Admin-pannel/Pages/settings/systemSettings/emailTemplete/Index";
import OfficialSalePage from "./Admin-pannel/Pages/settings/officialSale/Index";
import PodListPage from "./Admin-pannel/Pages/settings/podList/Index";
import BookingListPage from "./Admin-pannel/Pages/booking/BookingList/BookingList";
import BookingEntryPage from "./Admin-pannel/Pages/booking/bookingEntry/Index";
import ManiListPage from "./Admin-pannel/Pages/booking/menifestList/Index";
import ManifestPage from "./Admin-pannel/Pages/booking/manifest/Index";
import DeliveryRunListPage from "./Admin-pannel/Pages/booking/deliveryRunList/Index";
import DeliveryRunSheetPage from "./Admin-pannel/Pages/booking/deliveryRunSheet/Index";
import AllCancelOrders from "./Admin-pannel/Pages/allCancelOrder/AllCancelOrders";
import AffilliateUserVerification from "./Admin-pannel/Components/affliateUser/AffilliateUserVerification";
import Add_quotation from "./Admin-pannel/Pages/quotation/Add_quotation";
import ListQuatation from "./Admin-pannel/Pages/quotation/ListQuatation";
import EtgAddMember from "./Admin-pannel/Pages/etgmembers/EtgAddMember";
import ListEtgMember from "./Admin-pannel/Pages/etgmembers/ListEtgMember";
import AllReviewsProducts from "./Admin-pannel/Pages/allReviews/AllReviewsProducts";
import AllDeliveryBoys from "./Admin-pannel/Pages/deliveryBoy/allDeliveryBoys/AllDeliveryBoys";
import AddNewDeliveryBoy from "./Admin-pannel/Pages/deliveryBoy/addNewDeliveryBoys/AddNewDeliveryBoy";
import DeliveryBoyPaymentList from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyPaymentHistory/DeliveryBoyPaymentHistory";
import DeliveryBoyPaymentHistory from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyPaymentHistory/DeliveryBoyPaymentHistory";
import DeliveryCollectionList from "./Admin-pannel/Pages/deliveryBoy/deliveryCollectionList/DeliveryCollectionList";
import DeliveryBoyCancelRequest from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyCancelRequest/DeliveryBoyCancelRequest";
import DeliveryBoyConfiguration from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyConfiguration/DeliveryBoyConfiguration";
import DeliveryBoyStatus from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyStatus/DeliveryBoyStatus";
import ListParchaseList from "./Admin-pannel/Components/sellerPackage/ListParchaseList";
import Seller_packages_purchase_list from "./Admin-pannel/Pages/seller_packages_purchase_list/Seller_packages_purchase_list";
import SocialMediaCredentail from "./Admin-pannel/Components/socialMediaSystem/socialMediaCredential/SocialMediaCredentail";
import AddPos from "./Admin-pannel/Pages/posSystem/addPosPage";
import InputPurchase from "./Admin-pannel/Pages/taxRepo/InputPurchase";
import OutputPurchase from "./Admin-pannel/Pages/taxRepo/OutputPurchase";
import AddStock from "./Admin-pannel/Pages/transfersStock/AddStock";
import ListStock from "./Admin-pannel/Pages/transfersStock/ListStock";
import IndexPages from "./Admin-pannel/Pages/product-attributes/IndexPages";
import PrintBarCode from "./Admin-pannel/Pages/printBarcode/PrintBarCode";
import AddAdjustments from "./Admin-pannel/Pages/adjustmentStock/AddAjustments";
import ListAdjustment from "./Admin-pannel/Pages/adjustmentStock/ListAdjustment";
import AddAssetCategories from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/AddAssetCategories";
import AssetCategorey from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategorey";
import AssetCategoryDetails from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategoryDetails";
import AssetAddCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetAddCategory";
import AssetSubCatecories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/AssetSubCatecories";
import AssetComments from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/AssetComments";
import AssetStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/AssetStatus";
import SubDepartMent from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/SubDepartMent";
import Department from "./Admin-pannel/Components/manageDepartmentmaster/department/Department";
import Desigination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/Desigination";
import EditAssetCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/editAssetsCategory/EditAssetCategory";
import AddSubCategories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/addAssetSubCategories/AddSubCategories";
import EditAssetsSubCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/editAssetsSubCategories/EditAssetsSubCategory";
import DetailsSubCategories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/detailsSubCategories/DetailsSubCategories";
import AddDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/addDepartment/AddDepartment";
import DetailsDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/detailsDepartment/DetailsDepartment";
import DeliveryChalanReportPage from "./Admin-pannel/Pages/deliveryChalan/deliveryChalanReport/Index";
import AddDeliveryChalanPage from "./Admin-pannel/Pages/deliveryChalan/addDeleveryChallan/Index";

import ReportAssetStatus from "./Admin-pannel/Components/assetReport/aseetStatus/AssetStatus";
import ReportAllocation from "./Admin-pannel/Components/assetReport/assetAllocations/AssetAllocation";

import AssetRequest from "./Admin-pannel/Components/requestModule/assetrequest/AssetRequest";
import AssetIssue from "./Admin-pannel/Components/requestModule/assetIssue/AssetIssue";
import AllCustomerPage from "./Admin-pannel/Pages/allCustomer";
// import Shift from "./Admin-pannel/Components/crmNew/components/shift/Shift";
// import EditWholsaleProducts from "./Admin-pannel/Pages/editWholsaleProducts";
import AddCustomer from "./Admin-pannel/Components/customerList/AddCustomer";
import EditComboProducts from "./Admin-pannel/Pages/addComboProduct/EditComboProducts";
// import NewDashboardCard from "./Admin-pannel/Components/crmNew/components/Card/Dashboard/NewDashboardCard";
// import Contacts from "./Admin-pannel/Components/crmNew/components/CRM/Contacts/Contacts";




// import AssetComments from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/AssetComments";
// import AssetStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/AssetStatus";

// import socialMediaSystemCredentialPage from "./Admin-pannel/Pages/socialMediaSystemCredentialPage";

// shoaib code

// import AddAssetCategories from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/AddAssetCategories";
// import AssetAddCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetAddCategory";
// import AssetCategorey from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategorey";
// import AssetCategoryDetails from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategoryDetails";
// import AssetSubCatecories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/AssetSubCatecories";
// import AssetComments from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/AssetComments";
// import AssetStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/AssetStatus";
// import Department from "./Admin-pannel/Components/manageDepartmentmaster/department/Department";
// import SubDepartMent from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/SubDepartMent";
// import Desigination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/Desigination";

// {Shoaib and Mustafa Imports start}

// import ReportAssetStatus from "./Admin-pannel/Components/assetReport/aseetStatus/AssetStatus";
// import ReportAllocation from "./Admin-pannel/Components/assetReport/assetAllocations/AssetAllocation";
import AssetsAddComment from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/assetsAddComment/AssetsAddComment";
import AssetsList from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/assetsList/AssetsList";
import DetailsAssets from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/detailsAssets/DetailsAssets";
import EditAssets from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/editAssets/EditAssets";
import Allocate from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/allocate/Allocate";

import AddAssetsStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/addAssetsStatus/AddAssetsStatus";
import EditAssetsStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/editAssetsStatus/EditAssetsStaus";
import DetailsAssetsStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/detailsAssetsStatus/DetailsAssetsStatus";

// import EditDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/editDepartment/EditDepartment";
import EditDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/editDepartment/EditDepartment"
import AddSubDepartment from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/addSubDepaetment/AddSubDepartment";
import EditSubDepartment from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/editSubDepartment/EditSubDepartment";
import DetailsSubDepartment from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/detailsSubDepartment/DetailsSubDepartment";

import AddDesigination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/addDesgination/AddDesgination";
import EditDesgination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/editDesgination/EditDesgination";
import DetailsDesgination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/detailsDesgination/DetailsDesgination";
import AssetsDashboardAdminComp from "./Admin-pannel/Components/assetsDashboard/AssetsDashboard";
import AddTicket from "./Admin-pannel/Components/asideAdim/AddTicket";
import ComplaintType from "./Admin-pannel/Components/ComplaintType";
import ComplaintNature from "./Admin-pannel/Components/ComplaintNature";
import StaffTicketList from "./Admin-pannel/Components/StaffTicketList";
import EditStaffTicket from "./Admin-pannel/Components/EditStaffTicket";

import ComplaintsDashboardPages from "./Admin-pannel/Pages/complaintsDashboardPages";
import ComplaintDetail from "./Admin-pannel/Components/complaintsDashboard/complaintDashboardDetails/ComplaintDetail";

// {Shoaib and Mustafa Imports end}

// {Nizam import start}
// import EtsyAccList from "./pages/etsyAccList";
import EtsyAccList from "./Admin-pannel/Pages/etsyAccList/index";
// import NewEtsyAccount from "./components/etsyAccountList/NewEtsyAccount/newEtsyAcc";
import NewEtsyAccount from "./Admin-pannel/Components/etsyAccountList/NewEtsyAccount/newEtsyAcc";
import GeneralSetting from "./Admin-pannel/Components/setting&Configuration/generalSetting/GeneralSetting";
import EtsySettings from "./Admin-pannel/Components/etsyGeneralSettings/EtsySettings";
import AmazonAccountListPage from "./Admin-pannel/Pages/amazonAccount-list";
import AmazonAccountInformation from "./Admin-pannel/Components/amazon-account/amazonAccountList/amazonAccount-information/AmazonAccountInformation";
import NewAmazonAccountPage from "./Admin-pannel/Pages/newAmazon-account";
import AddAmazonAccount from "./Admin-pannel/Components/amazon-account/amazonAccountList/addAmazonAccount/AddAmazonAccount";
import NewAmazonAcInfo from "./Admin-pannel/Components/amazon-account/new-amazon-account/new-amazon-acInfo/NewAmazonAcInfo";
import NewAmazonAcEdit from "./Admin-pannel/Components/amazon-account/new-amazon-account/new-amazon-acEdit/NewAmazonAcEdit";
import PricingRulesPage from "./Admin-pannel/Pages/pricingRules";
import AddPricingRules from "./Admin-pannel/Components/amazon-account/pricingRules/add-pricing-rule/AddPricingRule";
import EditPricingRule from "./Admin-pannel/Components/amazon-account/pricingRules/edit-pricing-rule/EditPricingRule";
import CategoryMapPage from "./Admin-pannel/Pages/categoryMap";
import CreateMap from "./Admin-pannel/Components/amazon-account/categoryMap/createMap/CreateMap";

// import DeliverySettings from "./Admin-pannel/pages/deliveryTimeSettings";
import DeliverySettings from "./Admin-pannel/Pages/deliveryTimeSettings";
import MarketPlacePre from "./Admin-pannel/Pages/marketPlacePreOrder";
import MarketTicket from "./Admin-pannel/Pages/marketTicket";
import MarketplaceValidator from "./Admin-pannel/Pages/marketplaceValidater";
import MyAssets from "./Admin-pannel/Components/myAssests/MyAssets";


// {Nizam import end}
// {Shhaz import start}

// import Drop from "./pages/dropship";
// import Drop from "./Admin-pannel/Pages/dropship";
import DropshipOrders from "./Admin-pannel/Pages/dropshipOrder";
import NewWarehouse from "./Admin-pannel/Components/dropship/newWarehouse/NewWarehouse";
import ManageShoppingRules from "./Admin-pannel/Components/manageShoppingRule/ManageShoppingRule";
import AddNewShoppingRule from "./Admin-pannel/Components/manageShoppingRule/addNewShoppingRule/AddNewShoppingRule";
import ManageDropshipProductUpload from "./Admin-pannel/Components/manageDropshipProductUpload/ManageDropshipProductUpload";
import RunDropshipProductProfile from "./Admin-pannel/Components/runDropshipProductProfile/RunDropshipProductProfile";
import DropshipDataFlowProfile from "./Admin-pannel/Components/dropshipDataFlowProfile/DropshipDataFlowProfile";
import Dropships from "./Admin-pannel/Pages/dropship";
import AddAssestsRequest from "./Admin-pannel/Components/addAssestsRequest/AddAssestsRequest";
import MyAssetsRequestList from "./Admin-pannel/Components/myAssestsRequestList/MyAssetsRequestList";
import AssestsRequestList from "./Admin-pannel/Components/assestsRequestList/AssestsRequestList";
import EditAssetsRequestList from "./Admin-pannel/Components/editAssetsRequestList/EditAssetsRequestList";
import AddVtechQuotation from "./Admin-pannel/Components/vtechQuotation/AddVtechQuotation";
import ListVtechQuotation from "./Admin-pannel/Components/vtechQuotation/ListVtechQuotation";
import Addnewcalls from "./Admin-pannel/Pages/addNewcalls";
import CallOverView from "./Admin-pannel/Pages/callOverView";
import EditComplaintType from "./Admin-pannel/Components/EditComplaintType";
import EditComplaintNature from "./Admin-pannel/Components/EditComplaintNature";
import AddUser from "./Admin-pannel/Components/user/addUser";



import "../src/assets2/styles/main.css";
import "../src/assets2/styles/responsive.css";
import AddAgreement from "./Admin-pannel/Pages/addAgreement/AddAgreement";
import VtechRentProductAdd from "./Admin-pannel/Pages/VtechRentProduct/VtechRentProductAdd";
import RentProductList from "./Admin-pannel/Pages/rentProductList/RentProductList";
import VtechPurchase from "./Admin-pannel/Pages/vtech-Purchase/VtechPurchase.";
import AddVtechStockac from "./Admin-pannel/Pages/add-v-tech-Transfer-stock/AddVtechStockac";
import Leadfilter from "./Admin-pannel/Pages/leadsFilters/LeadfiltersV";
import LeadFilters from "./Admin-pannel/Pages/leadFiltersTemp/LeadFilters";
import Lead from "./Admin-pannel/Pages/leads";
import Customer from "./Admin-pannel/Pages/customer";
import ImportCustomers from "./Admin-pannel/Components/coustomer/importCustomers/importCust";
import ListVPurchaseStock from "./Admin-pannel/Pages/list-v-tech-Transfer-stock/ListVPurchaseStock";
import KnowledgeBase from "./Admin-pannel/Pages/knowledgeBaseCrm";
import AddNewArtical from "./Admin-pannel/Components/knowledgeBaseCrm/AddNewArtical";
import Group from "./Admin-pannel/Components/knowledgeBaseCrm/Group";
import AddPrice from "./Admin-pannel/Pages/addPrices";
import ImportLeads from "./Admin-pannel/Pages/importLeads";
import Reminder from "./Admin-pannel/Pages/reminder";
import Proposal from "./Admin-pannel/Pages/salescrm/index";
import NewProposal from "./Admin-pannel/Components/salescrm/NewProposal";
import NewCustomers from "./Admin-pannel/Components/coustomer/newCustomers/newCustomer";
import EstimateSales from "./Admin-pannel/Pages/estimateSales";
import NewEstimate from "./Admin-pannel/Components/estimateSales/NewEstimate";
import Task from "./Admin-pannel/Pages/taskCrm";
import TaskOverview from "./Admin-pannel/Components/taskCrm/TaskOverview";
import Dashboard from "./Admin-pannel/Pages/dashboardCrm";
import RecruitmentDashboard from "./Admin-pannel/Pages/reqcruitmentDashboard";
import Project from "./Admin-pannel/Pages/Projects";
import AddNewProject from "./Admin-pannel/Components/project/AddNewProject";
import RecruitmentDashNew from "./Admin-pannel/Components/RecruitmentDash/RecruitmentDashNew";
import ProjectView from "./Admin-pannel/Pages/project/ProjectView";
import ChartOfAccounts from "./Admin-pannel/Pages/accounts/accounts/ChartOfAccounts";
import ChartOfAccountGroup from "./Admin-pannel/Pages/accounts/accounts/ChartOfAccountsGroup";
// {Shaaz import end}

// {daud import start}
// import AmazonAccountListPage from "./Admin-pannel/Pages/amazonAccount-list/index";
// import AmazonAccountInformation from "./components/amazon-account/amazonAccountList/amazonAccount-information/AmazonAccountInformation";
// import AddAmazonAccount from "./components/amazon-account/amazonAccountList/addAmazonAccount/AddAmazonAccount";
// import NewAmazonAccountPage from "./pages/newAmazon-account";
// import PricingRulesPage from "./pages/pricingRules";
// import NewAmazonAcInfo from "./components/amazon-account/new-amazon-account/new-amazon-acInfo/NewAmazonAcInfo";
// import NewAmazonAcEdit from "./components/amazon-account/new-amazon-account/new-amazon-acEdit/NewAmazonAcEdit";
// import AddPricingRules from "./components/amazon-account/pricingRules/add-pricing-rule/AddPricingRule";
// import EditPricingRule from "./components/amazon-account/pricingRules/edit-pricing-rule/EditPricingRule";
// import CategoryMapPage from "./pages/categoryMap";
// import CreateMap from "./components/amazon-account/categoryMap/createMap/CreateMap";
// {daud import end}


function App() {
  const [show, setshow] = useState(true);

  return (
    <>
      {show && <Header />}
      <Routes>
        <Route path="/loginPage" element={<LoginSection setshow={setshow} />} />
        <Route path="/" element={<Navigate to="/loginPage" />} />
        <Route path="/admin" element={<DashboardRightSectionAdmin setshow={setshow} />}>
          <Route path="" element={<DashboardAdminPage />} />
          <Route path="products/all/products/create" element={<AddNewProductsPage />} />

          <Route path="products/all/products/create/comboProduct" element={<AddComboProduct />} />
          <Route path="products/all/comboProduct" element={<ListComboProdust />} />
          <Route path="products/all/comboProduct/edit/:id" element={<EditComboProducts />} />

          <Route path="stock_report" element={<StockReport />} />
          <Route path="sales_report" element={<SalesReport />} />
          <Route path="register_report" element={<RegisterReport />} />
          <Route path="products_quantity_alerts" element={<ProductsQuantityAlerts />} />
          <Route path="products_report" element={<ProductsReport />} />
          <Route path="adjustments_report" element={<AdjustmentsReport />} />
          <Route path="categories_report" element={<CategoriesReport />} />
          <Route path="brands_report" element={<BrandsReport />} />
          <Route path="daily_sales" element={<Dailysales />} />
          <Route path="monthly_sales" element={<MonthlySales />} />
          <Route path="payments_report" element={<PaymentsReport />} />
          <Route path="tax_report" element={<TaxReport />} />
          <Route path="sales_tax_report" element={<SalesTaxReport />} />
          <Route path="daily_purchase" element={<DailyPurchase />} />
          <Route path="monthly_purchase" element={<MonthlyPurchase />} />
          <Route path="purchases_report" element={<PurchasesReport />} />
          <Route path="expenses_report" element={<ExpensesReport />} />
          <Route path="customer_report" element={<CustomerReport />} />
          <Route path="suppliers_report" element={<SuppliersReport />} />
          <Route path="staffs_report" element={<StaffsReport />} />
          <Route path="profit_loss" element={<ProfitLossReport />} />
          <Route path="mostViewed_products" element={<MostViewedProducts />} />
          <Route path="device_logs" element={<LoginDeviceHistory />} />
          <Route path="reported_products" element={<ReportedProducts />} />
          <Route path="requested-brands" element={<RequestedBrands />} />
          <Route path="all_reviews_ratings" element={<AllReviewsRatings />} />
          <Route path="sizechart" element={<SizeChart />} />
          <Route path="pos/sales" element={<POSSales />} />
          <Route path="damage-product-entry" element={<DamageProEntry />} />
          <Route path="product-damage-list" element={<ProductDamage />} />
          <Route path="material-re-order-list" element={<MaterialReorders />} />
          <Route path="product-transfer-entry" element={<ProductTransferEntry />} />
          <Route path="product-transfer-list" element={<ProductTransferList />} />
          <Route path="bulk_import_inventory" element={<BulkInventry />} />

          {/* sales_Modules */}
          <Route path="sales_entry" element={<SalesEntry />} />


          {/* <Route path="products/all/products/edit/:id" element={<AddNewProductsPage />} /> */}
          <Route path="products/seller" element={<SellerProductsPage />} />
          <Route path="brands" element={<BrandPageAdmin />} />
          <Route path="brands_requested" element={<BrandRequest />} />


          <Route path="sellerBrand_List" element={<SellerBrnadList />} />
          <Route path="add_Seller_brand" element={<AddSellerBrnad />} />

          {/* Front Ui */}
          <Route path="add_banner" element={<AddNewBanner />} />
          <Route path="list_banner/bannerEdit/:id" element={<AddNewBanner />} />
          <Route path="list_banner" element={<ListBanner />} />


          <Route path="brands/edit/:id" element={<EditBrand />} />

          <Route path="attributes" element={<AttributeAdminPage />} />
          <Route path="product_attributes" element={<IndexPages />} />

          <Route path="attributes/edit/:id" element={<EditAttribute />} />
          <Route path="pos-activation" element={< PosConfigurationPage />} />
          <Route path="products/all" element={< AllProductsPage />} />
          <Route path="products/all/edit/:id" element={< EditProducts />} />
          <Route path="list-purchase" element={< ListPurchasePage />} />
          <Route path="add-purchase-list" element={< AddPurchaseListPage />} />

          <Route path="reviews" element={<ProductsReviewPage />} />
          <Route path="colors" element={<ColorsPage />} />
          <Route path="colors/edit/:id" element={<EditColor />} />
          <Route path="size" element={<SizePage />} />
          <Route path="size/edit/:id" element={<EditSize />} />
          <Route path="wholesale-product/create" element={<AddNewWholesaleProductsPage />} />
          <Route path="wholesale/all-products" element={<AllWholsaleProductsPage />} />
          {/* <Route path="wholesale/all-products/edit/:id" element={<EditWholsaleProducts />} /> */}
          <Route path="all_orders" element={<AllOrdersPage />} />

          <Route path="seller/all_orders" element={<SellerAllOrder />} />

          <Route path="assign_orders/status/:id" element={<AssighOrderStatus />} />

          <Route path="orders/status/:id" element={<OrderByStatus />} />

          <Route path="all_cancel_orders" element={<AllCancelOrders />} />


          <Route path="orders/PickupPints/:id" element={<OrderByPickupPoints />} />


          <Route path="all_orders/order-Details/:id" element={<OrdersDetailsPage />} />
          <Route path="inhouse-orders" element={<InHouseOrderPage />} />
          <Route path="seller-orders" element={<SellerOrdersPage />} />
          <Route path="orders_by_pickup_point" element={<PickUpPointOrderPage />} />
          <Route path="customer-list" element={<CustomerListPage />} />
          <Route path="customer-create" element={<AddCustomer />} />
          <Route path="customer-shippingAddress" element={<CustomerShippingAddress />} />
          <Route path="customer-shippingAddress/detail/:id" element={<CustomerShippingAdressDetail />} />
          {/* <Route path="customer-shippingAddress/create" element={<CustomerShippingAddList />} /> */}
          {/* <Route path="customer-list/edit/:id" element={<EditCustomer />} /> */}
          <Route path="customer-list/edit/:id" element={<NewCustomers />} />
          <Route path="seller" element={<AllSellerPage />} />

          {/* <Route path="customer" element={<AllCustomerPage />} /> */}

          <Route path="in_house_sale_report" element={<InHouseProductsSalePage />} />
          <Route path="seller_sale_report" element={<SellerProductsSalePage />} />
          <Route path="stock_report" element={<ProductsStockPage />} />
          <Route path="wish_report" element={<ProductWhislistPage />} />
          <Route path="user_search_report" element={<UserSearchesPage />} />
          <Route path="commission-log" element={<ComissionHistoryPage />} />
          <Route path="wallet-history" element={<WalletRechargeHistoryPage />} />
          <Route path="Paymets" element={<PayoutsPage />} />
          <Route path="withdraw_requests_all" element={<PayoutRequestPage />} />
          <Route path="seller/payment-show" element={<PaymentShowPage />} />
          <Route path="vendor_commission" element={<SellerCommissionPage />} />
          <Route path="seller_packages" element={<SellerPackagePage />} />
          <Route path="seller_packages/create" element={<CreatePackagePage />} />
          <Route path="flash_deals" element={<FlashDealsPage />} />
          <Route path="flash_deals/edit/:id" element={<EditFlashDeal />} />
          <Route path="flash_deals/create" element={<FlashDealsInformationPage />} />
          <Route path="newsletter" element={<NewsLetterPage />} />
          <Route path="sms" element={<BulkSMSPage />} />
          <Route path="subscribers" element={<SubscribersPage />} />
          <Route path="seller_packages/edit/:id" element={<UpdateInfo />} />
          <Route path="verification/form" element={<VerificationFormPage />} />
          <Route path="seller-banners" element={<SellerBannerPage />} />
          <Route path="seller-banners/edit/:id" element={<EditSellerBanner />} />

          <Route path="affiliate" element={<AffiliatePage />} />
          <Route path="affiliate-cofiguration" element={<AfiliatedConfigurationPage />} />
          <Route path="affiliate-users" element={<AffiliateUserPage />} />
          <Route path="affiliate-users/verification/:id" element={<AffilliateUserVerification />} />
          <Route path="affiliate-users/deatails" element={<AffiliateUserDetailsPage />} />
          <Route path="refferal/users" element={<RefferalUsersPage />} />
          <Route path="uploaded-files" element={<UploadedFilePages />} />
          <Route path="uploaded-files/create" element={<UploadCreate />} />
          <Route path="affiliate/withdraw_requests" element={<AffiliateWithdrowPage />} />
          <Route path="affiliate/logs" element={<AffliateLogsPage />} />

          <Route path="coupon" element={<CouponPage />} />
          <Route path="coupon/create" element={<CouponInformationAddingPage />} />
          <Route path="coupon/edit/:id" element={<EditCoupon />} />
          <Route path="support_ticket" element={<TicketPage />} />
          <Route path="support_ticket/edit/:id" element={<EditSupportTicket />} />
          <Route path="support_ticket/detail/:id" element={<SupportTicketDetailPage />} />
          <Route path="conversations" element={<ProductsConversationPage />} />
          <Route path="product-queries" element={<ProductsQuerriesPage />} />
          <Route path="offline-wallet-recharge-requests" element={<OfflineWalletRechargePage />} />
          <Route path="offline-seller-package-payment-requests" element={<OfflineSellerPackagePaymentRequestPage />} />
          <Route path="digitalproducts" element={<DigitalProductsPage />} />
          <Route path="digitalproducts/create" element={<NewDigitalProducts />} />
          <Route path="product-bulk-upload/index" element={<BulkImportPage />} />
          <Route path="refund-request-all" element={<RefundRequestPage />} />
          <Route path="paid-refund" element={<ApprovedRefundsPage />} />
          <Route path="rejected-refund" element={<RejectedRefundsPage />} />
          <Route path="refund-request-config" element={<RefundConfigurationPage />} />
          <Route path="blog" element={< AllPostPage />} />
          <Route path="blog/edit/:id" element={< EditAllBlogsPost />} />

          <Route path="blog/create" element={< AddNewPost />} />
          <Route path="blog-category" element={< BlogCategoriesPage />} />
          <Route path="blog-category/edit/:id" element={< EditBlogCategory />} />
          <Route path="blog-category/create" element={< AddCategories />} />
          <Route path="set-share-reward-points" element={< ShareRewardPointsPage />} />
          <Route path="set-like-reward-points" element={< LikeRewardPointsPage />} />
          <Route path="manual_payment_methods" element={<ManualPaymentMethordPage />} />
          <Route path="manual_payment_methods/create" element={<ManualPaymentMethordCreate />} />
          <Route path="manual_payment_methods/Information" element={<ManualPaymentMethordInformation />} />
          <Route path="otp-configuration" element={<OtpConfigurationPage />} />
          <Route path="sms-templates" element={<SmsTemplatesPage />} />
          <Route path="otp-credentials-configuration" element={<SetOtpCredentialPage />} />
          <Route path="club-points/configuration" element={<ClubPointConfigurationPage />} />
          <Route path="club-points/index" element={<UserPointPage />} />
          <Route path="club-points/index/edit/:id" element={<EditUserPoint />} />
          <Route path="club-points/Details" element={<UsrPointsDetails />} />
          <Route path="set-club-points" element={<SetProductPointPage />} />
          <Route path="set-club-points/edit/:id" element={<EditAllPointsTable />} />

          <Route path="african/configuration" element={<AfricanPgConfigurationPage />} />
          <Route path="african/configuration/payment-method" element={<PaymentMethodPage />} />
          <Route path="credentials_index" element={<AfricanPgCredentialPage />} />
          <Route path="website/header" element={<HeaderPage />} />
          <Route path="website-pages" element={<WebsitePagesPage />} />
          <Route path="website-pages/custom-pages/create" element={<AddNewPage />} />
          <Route path="website-pages/custom-pages/edit/:id" element={<AddNewPage />} />
          <Route path="website-footer" element={<FooterPage />} />
          <Route path="website/appearance" element={<AppearancesPage />} />
          <Route path="general-setting" element={<GeneralSettingPage />} />
          <Route path="activation" element={<FeaturesActivationPage />} />
          <Route path="staffs" element={<AllStaffsPage />} />
          <Route path="staffs/edit/:id" element={<EditStaff />} />
          <Route path="/admin/staffs/create" element={<StaffInformation />} />
          <Route path="roles" element={<StaffPermissionPage />} />
          <Route path="roles/edit/:id" element={<EditRole />} />
          {/* <Route path="/admin/roles/create" element={<RoleInformation />} /> */}
          <Route path="/admin/roles/create" element={<AddRole />} />
          <Route path="languages" element={<LanguagesPage />} />
          <Route path="languages/create" element={<AddNewLanguagePage />} />
          <Route path="languages/translation" element={<LanguageTranslationPage />} />
          <Route path="languages/app-translation" element={<AppTranslationPage />} />
          <Route path="languages/edit/:id" element={<LanguageEditPage />} />
          <Route path="currency" element={<CurrencyPage />} />
          <Route path="currency/create" element={<AddNewCurrency />} />
          <Route path="currency/edit/:id" element={<EditCurrency />} />

          <Route path="system/update" element={<SystemUpdatePage />} />
          <Route path="system/server-status" element={< ServerStatusPage />} />
          <Route path="payment-method" element={<PaymentsMethodPage />} />
          <Route path="order-configuration" element={<OrderConfigurationPage />} />
          <Route path="file_system" element={<FileSystemCacheConfigurationPage />} />
          <Route path="pick_up_points" element={<PickupPointsPage />} />
          <Route path="pick_up_points/edit/:id" element={<EditPickUpPoint />} />

          <Route path="pick_up_points/create" element={<AddnewPickupPoint />} />
          <Route path="smtp-settings" element={<SmtpSettingsPage />} />
          <Route path="facebook-chat" element={<FacebookChatPage />} />
          <Route path="facebook-comment" element={<FacebookCommentPage />} />
          <Route path="google-analytics" element={<AnalyticalPage />} />
          <Route path="google-recaptcha" element={<GoogleRecaptchaPage />} />
          <Route path="google-map" element={<GoogleMapPage />} />
          <Route path="google-firebase" element={<GoogleFirebasePage />} />
          <Route path="shipping_configuration" element={<ShippingConfigurationPage />} />
          <Route path="countries" element={<ShippingCountriesPage />} />
          <Route path="states" element={<ShippingStatePage />} />
          <Route path="cities" element={<ShippingCitiesPage />} />
          <Route path="zones" element={<ShippingZonesPage />} />
          <Route path="carriers" element={<ShippingCarrierPage />} />

          <Route path="categories" element={<CategoriesPageAdmin />} />
          <Route path="categories/create" element={<AddnewCategories />} />
          <Route path="categories/edit/:id" element={<EditCategories />} />

          {/* junaid routes */}

          <Route path="seller" element={<AllSellerPage />} />
          <Route path="add-seller-product" element={<AddsellerProductPage />} />
          <Route path="seller/form" element={<SellerAddEditForm />} />
          <Route path="seller/edit/:id" element={<SellerAddEditForm />} />
          <Route path="seller/detail/:id" element={<SellerDetail />} />

          <Route path="sms-templates" element={<SmsTemplatesPage />} />
          <Route path="sms-list" element={<SmsList />} />
          <Route path="sms-list/create" element={<SmsForm />} />
          <Route path="sms-list/edit/:id" element={<SmsForm />} />

          <Route path="profile" element={<Profile />} />
          <Route path="tracking-order" element={<TrackingOrderPage />} />
          <Route path="tracking-order/:val" element={<TrackingOrderPage />} />
          <Route path="assign_order" element={<AssignOrder />} />
          <Route path="profilePickup" element={<PickupProfile />} />

          <Route path="add_popup" element={<AddPopups />} />
          <Route path="list_popup/edit_popup/:id" element={<AddPopups />} />
          <Route path="list_popup" element={<ListPopups />} />



          <Route path="system_settings" element={<SystemSettingsPage />} />
          <Route path="add_printer" element={<AddPrinterPage />} />
          <Route path="list_pop" element={<ListPopUpPage />} />
          <Route path="add-pop-up" element={<AddPopUp />} />
          <Route path="email_templates" element={<EmailTempletePage />} />
          <Route path="offical-sell" element={<OfficialSalePage />} />
          <Route path="pod-list" element={<PodListPage />} />
          <Route path="booking-list" element={<BookingListPage />} />
          <Route path="booking-entry" element={<BookingEntryPage />} />
          <Route path="menifest-list" element={<ManiListPage />} />
          <Route path="menifest-entry" element={<ManifestPage />} />
          <Route path="delivery-run-list" element={<DeliveryRunListPage />} />
          <Route path="delivery-run-sheet" element={<DeliveryRunSheetPage />} />


          <Route path="list_quotation" element={<ListQuatation />} />
          <Route path="list-vtech-quotation" element={<ListVtechQuotation />} />
          <Route path="add_quotation" element={<Add_quotation />} />
          <Route path="add-vtech-quotation" element={<AddVtechQuotation />} />

          <Route path="add_member" element={<EtgAddMember />} />
          <Route path="list_members" element={<ListEtgMember />} />

          <Route path="delivery-boys" element={<AllDeliveryBoys />} />
          <Route path="/admin/delivery-boys/create" element={<AddNewDeliveryBoy />} />
          <Route path="/admin/delivery-boys/edit/:id" element={<AddNewDeliveryBoy />} />
          <Route path="payment-history" element={<DeliveryBoyPaymentHistory />} />
          <Route path="delivery-collection-list" element={<DeliveryCollectionList />} />
          <Route path="delivery-cancel-request" element={<DeliveryBoyCancelRequest />} />
          <Route path="delivery-payment-configuration" element={<DeliveryBoyConfiguration />} />
          <Route path="delivery-boy-status" element={<DeliveryBoyStatus />} />


          <Route path="all/reviews" element={<AllReviewsProducts />} />

          <Route path="seller_packages_list" element={<ListParchaseList />} />
          <Route path="seller_packages_purchase_list" element={<Seller_packages_purchase_list />} />
          <Route path="socialMedia-credential" element={<SocialMediaCredentail />} />

          <Route path="input_purchase_tax_report" element={<InputPurchase />} />
          <Route path="output_sale_tax_report" element={<OutputPurchase />} />

          <Route path="add-pos" element={<AddPos />} />

          <Route path="add-stock-transfer" element={<AddStock />} />
          <Route path="list-stock-transfer" element={<ListStock />} />
          <Route path="add-stock-adjustment" element={<AddAdjustments />} />
          <Route path="list-stock-adjustment" element={<ListAdjustment />} />

          <Route path="products/all/print_barcodes/:id" element={<PrintBarCode />} />

          <Route path="products/all/print_barcodes/:id" element={<PrintBarCode />} />

          {/* {shoaib code} */}

          {/* <Route path="add-newasset-category" element={<AddAssetCategories />} />
          <Route path="asset-category" element={<AssetCategorey />} />
          <Route path="asset-category/edit/:id" element={<EditAssetCategory />} />
          <Route path="asset-category-type-view" element={<AssetCategoryDetails />} />
          <Route path="asset-category-type-view/details/:id" element={<AssetCategoryDetails />} />
          <Route path="add-asset-category" element={<AssetAddCategory />} />
          <Route path="add-asset-sub-category" element={<AddSubCategories />} />
          <Route path="asset-sub-category" element={<AssetSubCatecories />} />
          <Route path="asset-sub-category" element={<AssetSubCatecories />} />
          <Route path="asset-sub-category/edit/:id" element={<EditAssetsSubCategory />} />
          <Route path="asset-sub-category-type-view/details/:id" element={<DetailsSubCategories />} />
          <Route path="asset-comments" element={<AssetComments />} />
          <Route path="asset-status" element={<AssetStatus />} />
          <Route path="department" element={<Department />} />
          <Route path="sub-department" element={<SubDepartMent />} />
          <Route path="designation" element={<Desigination />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="view-department/details/:id" element={<DetailsDepartment />} />
          <Route path="list-delivery-challan" element={<DeliveryChalanReportPage />} />
          <Route path="add-delivery-challan" element={<AddDeliveryChalanPage />} />

          <Route path="asset-request" element={<AssetRequest />} />
          <Route path="asset-issue" element={<AssetIssue />} />

          <Route path="reports-status" element={<ReportAssetStatus />} />
          <Route path="reports-allocations" element={<ReportAllocation />} /> */}

          <Route path="/admin/assets-dashboard/newasset-category" element={<AssetsList />} />
          <Route path="allocate/:id" element={<Allocate />} />
          <Route path="asset/details/:id" element={<DetailsAssets />} />
          <Route path="asset/edit/:id" element={<EditAssets />} />
          <Route path="add-newasset-category" element={<AddAssetCategories />} />
          <Route path="asset-category" element={<AssetCategorey />} />
          <Route path="my-assets" element={<MyAssets />} />
          <Route path="add-assets-request" element={<AddAssestsRequest />} />
          <Route path="my-assets-request-list" element={<MyAssetsRequestList />} />
          <Route path="assets-request-list" element={<AssestsRequestList />} />
          <Route path="assets-request-list/edit/:id" element={<EditAssetsRequestList />} />
          <Route path="asset-category-type-view/details/:id" element={<AssetCategoryDetails />} />
          <Route path="add-asset-category" element={<AssetAddCategory />} />
          <Route path="asset-category/edit/:id" element={<EditAssetCategory />} />
          <Route path="asset-sub-category" element={<AssetSubCatecories />} />
          <Route path="add-asset-sub-category" element={<AddSubCategories />} />
          <Route path="asset-sub-category/edit/:id" element={<EditAssetsSubCategory />} />
          <Route path="asset-sub-category-type-view/details/:id" element={<DetailsSubCategories />} />
          <Route path="asset-comments" element={<AssetComments />} />
          <Route path="add-asset-comments" element={<AssetsAddComment />} />
          <Route path="asset-status" element={<AssetStatus />} />
          <Route path="add-asset-status" element={<AddAssetsStatus />} />
          <Route path="asset-status/edit/:id" element={<EditAssetsStatus />} />
          <Route path="asset-status/details/:id" element={<DetailsAssetsStatus />} />
          <Route path="department" element={<Department />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="view-department/details/:id" element={<DetailsDepartment />} />
          <Route path="department/edit/:id" element={<EditDepartment />} />
          <Route path="sub-department" element={<SubDepartMent />} />
          <Route path="add-sub-department" element={<AddSubDepartment />} />
          <Route path="sub-department/edit/:id" element={<EditSubDepartment />} />
          <Route path="view-sub-department/details/:id" element={<DetailsSubDepartment />} />
          <Route path="designation" element={<Desigination />} />
          <Route path="add-designation" element={<AddDesigination />} />
          <Route path="designation/edit/:id" element={<EditDesgination />} />
          <Route path="designation/details/:id" element={<DetailsDesgination />} />
          <Route path="list-delivery-challan" element={<DeliveryChalanReportPage />} />
          <Route path="add-delivery-challan" element={<AddDeliveryChalanPage />} />
          <Route path="reports-status" element={<ReportAssetStatus />} />
          <Route path="reports-allocations" element={<ReportAllocation />} />
          <Route path="assets-dashboard" element={<AssetsDashboardAdminComp />} />
          <Route path="add-ticket" element={<AddTicket />} />
          <Route path="complaint-type" element={<ComplaintType />} />
          <Route path="complaint-type/edit/:id" element={<EditComplaintType />} />
          <Route path="complaint-nature" element={<ComplaintNature />} />
          <Route path="complaint-nature/edit/:id" element={<EditComplaintNature />} />
          <Route path="staff-ticket-list" element={<StaffTicketList />} />
          <Route path="staff-ticket-list/edit/:id" element={<EditStaffTicket />} />
          <Route path="employees-complaints-dashboard" element={<ComplaintsDashboardPages />} />
          <Route path="view/complaints-detail/:id" element={<ComplaintDetail />} />


          {/* {shoaib code} */}

          {/* {Nizam Routes start} */}
          <Route path="etsy-account-list" element={<EtsyAccList />} />
          <Route path="new-etsy-account" element={<NewEtsyAccount />} />
          <Route path="etsy-general-settings" element={<EtsySettings />} />

          <Route path="delivery-time-settings" element={<DeliverySettings />} />
          <Route path="marketplace-pre-order" element={<MarketPlacePre />} />
          <Route path="marketplace-event-ticket" element={<MarketTicket />} />
          <Route path="marketplace-validator" element={<MarketplaceValidator />} />

          {/* {Nizam Routes end} */}

          {/* {Shhaz Routes start} */}
          <Route path="drop-ship" element={<Dropships />} />
          < Route path="dropship-order" element={<DropshipOrders />} />
          < Route path="new-warehouse" element={<NewWarehouse />} />
          < Route path="manage-shopping-rules" element={<ManageShoppingRules />} />
          <Route path="add-new-warehouse" element={<AddNewShoppingRule />} />
          <Route path="manage-dropship-product-upload" element={<ManageDropshipProductUpload />} />
          <Route path="run-dropship-product-profile" element={<RunDropshipProductProfile />} />
          <Route path="dropship-dataflow-profile" element={<DropshipDataFlowProfile />} />
          <Route path="add-new-calls" element={<Addnewcalls />} />
          <Route path="asset-request" element={<AssetRequest />} />
          <Route path="call-centre-dashboard" element={<CallOverView />} />
          <Route path="AddAgreement" element={<AddAgreement />} />
          <Route path="add-v-tech-purchase" element={<VtechPurchase />} />
          <Route path="list-v-tech-Transfer-stock" element={<ListVPurchaseStock />} />
          <Route path="estimate-sales" element={<EstimateSales/>}/>
          <Route path="new-estimate" element={<NewEstimate/>}/>
          <Route path="task-crm" element={<Task/>}/>
          <Route path="task-overview" element={<TaskOverview/>}/>
          <Route path="dashboard-crm" element={<Dashboard/>}/>
          <Route path="reminder-dash" element={<RecruitmentDashNew/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path='add-new-project' element={<AddNewProject/>}/>
          <Route path='project/project-view/:id' element={<ProjectView/>}/>
          <Route path='accounts' element={<ChartOfAccounts/>}/>
          <Route path='accounts-group' element={<ChartOfAccountGroup/>}/>
          {/* {nazim Routes end} */}

          <Route path="lead-filters" element={<Leadfilter />} />
          <Route path="lead-filters-template" element={<LeadFilters />} />
          <Route path="leads" element={<Lead />} />
          <Route path="customer" element={<Customer />} />
          <Route path="new-customers" element={<NewCustomers />} />
          <Route path="import-customers" element={<ImportCustomers />} />

          {/* {saaz route start} */}
          <Route path="knowledge-base-crm" element={<KnowledgeBase />} />
          <Route path="add-new-artical" element={<AddNewArtical />} />
          <Route path="group-crm" element={<Group />} />
          <Route path="add-prices" element={<AddPrice />} />
          <Route path="import-leads" element={<ImportLeads />} />
          <Route path="reminder-crm" element={<Reminder />} />
          <Route path="proposal-sales" element={<Proposal/>} />
          <Route path="new-proposal-crm" element={<NewProposal/>}/>

          <Route
            path="amazon-account-info"
            element={<AmazonAccountListPage />}
          />
          <Route
            path="amazon-account-info/account-info"
            element={<AmazonAccountInformation />}
          />
          <Route
            path="amazon-account-info/add-amazon-account"
            element={<AddAmazonAccount />}
          />

          <Route path="new-amazon-account" element={<NewAmazonAccountPage />} />
          <Route
            path="new-amazon-account/new-amazon-ac-Info"
            element={<NewAmazonAcInfo />}
          />
          <Route
            path="new-amazon-account/new-amazon-ac-edit"
            element={<NewAmazonAcEdit />}
          />

          <Route path="pricing-rules" element={<PricingRulesPage />} />
          <Route
            path="pricing-rules/new-price-rule"
            element={<AddPricingRules />}
          />
          <Route
            path="pricing-rules/edit-price-rule"
            element={<EditPricingRule />}
          />

          <Route path="category-map-export" element={<CategoryMapPage />} />
          <Route path="v-tech-rent-product" element={<VtechRentProductAdd />} />
          <Route path="rentProductList" element={<RentProductList />} />
          <Route path="add-v-tech-Transfer-stock" element={<AddVtechStockac />} />
          <Route
            path="category-map-export/create-mapping"
            element={<CreateMap />}
          />

          {/* junaid crm pages */}
          {/* junaid crm pages */}
          <Route
            path="staffs-new"
            element={<AddUser />}
          />
          {/* {daud route end} */}

          {/* <Route path="crmDashboard" element={<NewDashboardCard />} />
          <Route path="crmContacts" element={<Contacts />} /> */}

        </Route>


      </Routes>
      {show && <Footer />}
    </>
  );
}
export default App;
