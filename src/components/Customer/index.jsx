import React from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
// const {shops} = useSelector((state) => state.shops)
const List = ({ shops }) => {

    console.log(shops);

    const handleClick = (id) => {
        window.location.href = `http://localhost:3000/customer/${id}`
        console.log("clicked")
    }

    const handleFavourite = (fav) => {
        console.log(fav);
    }

    return (
        <div className='p-8'>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "30px" }}>
                <div style={{ maxWidth: "50%" }} className='flex border  m-1 pl-3 items-center'>
                    <BsSearch />
                    <input placeholder='Search for any shop or item...' className=' py-2 px-2 w-full outline-none' />
                    <button className='border bg-gray-200 text-gray-800 font-semibold px-2 md:px-12 py-2 inline-block hover:bg-gray-400 hover:text-white hover:cursor-pointer'>Search</button>
                </div>
                {/* <div style={{
                    display: 'flex',
                    margin: 'auto',
                    width: 400,
                    flexWrap: 'wrap',
                }}>
                    <div style={{ width: '100%', float: 'left' }}>
                        <h3>How to use create button to choose file in ReactJS?</h3> <br />
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file">
                        <button >
                            Upload
                        </button>
                    </label>
                    <h3>  OR  </h3>
                    <input accept="image/*" id="icon-button-file"
                        type="file" style={{ display: 'none' }} />
                    <label htmlFor="icon-button-file">
                        <button>
                            <RiQrScan2Line />
                        </button>
                    </label>
                </div> */}
                <label class="block mb-2 text-sm font-medium" for="file_input">Upload file
                    <input class="block text-sm border rounded-lg cursor-pointer  focus:outline-none" id="file_input" type="file" />
                </label>
            </div>
            <p style={{ fontsize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Explore Shops near you...</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center mb-4'>
                {shops.map((shop) => {
                    return (
                        <div style={{ padding: '10px', position: 'relative' }} key={shop.shopID} className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
                            {shop.isNew && <span style={{ position: 'absolute', right: "10px" }}
                                class="px-2 py-1 rounded-full text-black-500 bg-green-400 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease">
                                New
                            </span>}
                            <img src={shop.shopImage} alt="my name" />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontWeight: "bolder" }}>{shop.shopID}</p>
                                <div className="grid grid-cols-2 gap-1" style={{ direction: 'rtl' }}>
                                    {shop.shopType && shop.shopType.map((type, i) => {
                                        return (
                                            <span key={type}
                                                class={`px-2 py-1 rounded-full text-gray-500 bg-red-200 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease`}>
                                                {type}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <p>{shop.showOwner}</p>
                            <p style={{ marginBottom: "8px" }}>Inventory starts <span style={{ color: 'green' }}>@ {shop.inventory.minimum}</span></p>
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <button onClick={() => { handleClick(shop.shopID) }} class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-12 rounded">
                                    Shop
                                </button>
                                <button onClick={() => { handleFavourite(shop.favourite) }}>
                                    {shop.favourite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p style={{ fontsize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Recommended Inventory for you...</p>
        </div>
    )
}

const Customer = () => {

    return (
        <div>
            <div className="w-full min-h-[90vh] mt-16 flex flex-row">
                <List shops={shopsList} />
            </div>
        </div>
    );
};

export default Customer;


const shopsList = [
    {
        shopName: "GiftCollection",
        shopID: "GiftCollection",
        shopImage: "https://cdn.xxl.thumbs.canstockphoto.com/shop-market-icon-eps-vector_csp16356345.jpg",
        showOwner: "Shivam Soni",
        shopType: ["Ammunition"],
        inventory: {
            minimum: 30,
        },
        isNew: true,
        favourite: false,
    },
    {
        shopName: "Dukaan",
        shopID: "Dukaan",
        shopImage: "https://cdn.xxl.thumbs.canstockphoto.com/shop-front-shop-front-illustration-with-shiny-elements-no-transparencies-and-a-bright-blue-sky-eps-vectors_csp5643263.jpg",
        showOwner: "Karkit Barmaiya",
        shopType: ["General Store", 'Gift'],
        isNew: false,
        inventory: {
            minimum: 288,
        },
        favourite: true
    },
    {
        shopName: "GiftCollection",
        shopID: "GiftCollection",
        shopImage: "https://cdn.xxl.thumbs.canstockphoto.com/shop-market-icon-eps-vector_csp16356345.jpg",
        showOwner: "Shivam Soni",
        shopType: ["Ammunition"],
        inventory: {
            minimum: 30,
        },
        isNew: true,
        favourite: false,
    },
    {
        shopName: "Dukaan",
        shopID: "Dukaan",
        shopImage: "https://cdn.xxl.thumbs.canstockphoto.com/shop-front-shop-front-illustration-with-shiny-elements-no-transparencies-and-a-bright-blue-sky-eps-vectors_csp5643263.jpg",
        showOwner: "Karkit Barmaiya",
        shopType: ["General Store", 'Gift'],
        isNew: false,
        inventory: {
            minimum: 288,
        },
        favourite: true
    },
    {
        shopName: "GiftCollection",
        shopID: "GiftCollection",
        shopImage: "https://cdn.xxl.thumbs.canstockphoto.com/shop-market-icon-eps-vector_csp16356345.jpg",
        showOwner: "Shivam Soni",
        shopType: ["Ammunition"],
        inventory: {
            minimum: 30,
        },
        isNew: true,
        favourite: false,
    },
    {
        shopName: "Dukaan",
        shopID: "Dukaan",
        shopImage: "https://cdn.xxl.thumbs.canstockphoto.com/shop-front-shop-front-illustration-with-shiny-elements-no-transparencies-and-a-bright-blue-sky-eps-vectors_csp5643263.jpg",
        showOwner: "Karkit Barmaiya",
        shopType: ["General Store", 'Gift'],
        isNew: false,
        inventory: {
            minimum: 288,
        },
        favourite: true
    }
]

// get recommended inventories
