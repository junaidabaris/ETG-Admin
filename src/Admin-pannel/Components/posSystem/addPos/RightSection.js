import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import SellGiftCard from '../SellGiftCard';
import PosCategory from '../PosCategory';
import POSSubCategory from '../POSSubCategory';
import POSBrands from '../POSBrands';


function RightSection() {

    const [showCategoryBox, setShowCategoryBox] = useState(false);
    const [showSubCategoryBox, setShowSubCategoryBox] = useState(false);
    const [showBrandsBox, setShowBrandsBox] = useState(false);
    const [sendPoscategoryId, setsendPoscategoryId] = useState();

    const bringPosCategoryId = (id) => {
        // console.log('laayaahuwaId---', id)
        setsendPoscategoryId(id)
    };


    return (
        <>
            <div className='rightside'>

                <div className='list_wrapper'>
                    <ul style={{cursor:"pointer"}}>
                        <li onClick={() => setShowCategoryBox(true)}>Category</li>
                        <li onClick={() => setShowSubCategoryBox(true)}>Sub Category</li>
                        <li onClick={() => setShowBrandsBox(true)}>Brands</li>
                    </ul>
                </div>

                <PosCategory bringPosCategoryId={bringPosCategoryId} showCategoryBox={showCategoryBox} setShowCategoryBox={setShowCategoryBox} />
                <POSSubCategory sendPoscategoryId={sendPoscategoryId} showSubCategoryBox={showSubCategoryBox} setShowSubCategoryBox={setShowSubCategoryBox} />
                <POSBrands showBrandsBox={showBrandsBox} setShowBrandsBox={setShowBrandsBox} />

                <div className='self-card-scroll'>
                    {/* hello */}
                </div>

                <div className='sell-gift-card'>
                    <ul>
                        <li>
                            <button><AiFillCaretLeft /></button>
                        </li>

                        <SellGiftCard />

                        <li>
                            <button> <AiFillCaretRight /></button>
                        </li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default RightSection