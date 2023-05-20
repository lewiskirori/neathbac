// Users
export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];

// Temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "snow202@gmail.com",
        status: "Active",
        age: 35,
    },
    {
        id: 2,
        username: "Cersei Lannister",
        img: "https://media.istockphoto.com/id/519665203/photo/moving-down.jpg?b=1&s=612x612&w=0&k=20&c=ztjjo5GV1jZcDfq97518Hb7IXZxhsJXT9Z0B3gIEljE=",
        email: "cerejamie@gmail.com",
        status: "Inactive",
        age: 42,
    },
    {
        id: 3,
        username: "Jaime Lannister",
        img: "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "lannj48@gmail.com",
        status: "Pending",
        age: 45,
    },
    {
        id: 4,
        username: "Arya Stark",
        img: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "ayastar11@gmail.com",
        status: "Pending",
        age: 16,
    },
    {
        id: 5,
        username: "Daenerys Targaryen",
        img: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "tardarys101@gmail.com",
        status: "Active",
        age: null,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/4511649/pexels-photo-4511649.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "melandre01@gmail.com",
        status: "Inactive",
        age: 150,
    },
    {
        id: 7,
        username: "Ferrara Clifford",
        img: "https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "clifffer@gmail.com",
        status: "Pending",
        age: 44,
    },
    {
        id: 8,
        username: "Rossini Frances",
        img: "https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "francerose@gmail.com",
        status: "Active",
        age: 36,
    },
    {
        id: 9,
        username: "Harvey Roxie",
        img: "https://images.pexels.com/photos/4226462/pexels-photo-4226462.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "roxxhav67@gmail.com",
        status: "Inactive",
        age: 65,
    },
    {
        id: 10,
        username: "Alicia Garcia",
        img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "aliciagarcia87@gmail.com",
        status: "Active",
        age: 32,
    },
    {
        id: 11,
        username: "Benjamin Lee",
        img: "https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "benleexyz@gmail.com",
        status: "Active",
        age: 27,
    },
    {
        id: 12,
        username: "Emily Chen",
        img: "https://images.pexels.com/photos/4350124/pexels-photo-4350124.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "emilychen77@gmail.com",
        status: "Inactive",
        age: 41,
    },
    {
        id: 13,
        username: "John Smith",
        img: "https://images.pexels.com/photos/3758140/pexels-photo-3758140.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "johnsmith@example.com",
        status: "Active",
        age: 45,
    },
]

// Products
export const productColumns = [
    {field: "id", headerName: "ID", width: 170},
    {
        field: "product",
        headerName: "Name",
        width: 250,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.productname}
                </div>
            );
        },
    },
    {
        field: "price",
        headerName: "Price",
        width: 100,
    },
    {
        field: "count",
        headerName: "Count",
        width: 60,
    },
    {
        field: "category",
        headerName: "Category",
        width: 150,
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];

// Temporary data
export const productRows = [
    {
        id: 1,
        productname: "Arrow mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Farrow%20mug%2Farrow%20mugs.PNG?alt=media&token=36d79d73-0a4c-4a7a-95bf-a0b31d3a56fe",
        price: "Ksh1800",
        count: 5,
        category: "Kitchen appliances",
        status: "Active",
    },
    {
        id: 2,
        productname: "Flowered mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fflowered%20mugs%2Fflowered%20mugs.PNG?alt=media&token=1c87ea34-20c0-4311-87c3-8ec18585fdd7",
        price: "Ksh800",
        count: 0,
        category: "Kitchen appliances",
        status: "Inactive",
    },
    {
        id: 3,
        productname: "Non slip bathroom mats",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fwhite.PNG?alt=media&token=3a1ef0ec-aaf6-4362-967b-978ba66cd212",
        price: "Ksh3500",
        count: 6,
        category: "Home decor",
        status: "Active",
    },
    {
        id: 4,
        productname: "Gold and black decor",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fgold%20and%20black%20decor%2Fgold%20and%20black%20decor.PNG?alt=media&token=b1d298f7-1244-40ea-bc34-d194b7280be0",
        price: "Ksh2500",
        count: 0,
        category: "Home decor",
        status: "Inactive",
    },
    {
        id: 5,
        productname: "Plain Hexagon mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fplain%20hexagon%20mugs.PNG?alt=media&token=d94a7cb6-512e-4ffa-88f1-e402cd7758dd",
        price: "Ksh2500",
        count: 3,
        category: "Kitchen appliances",
        status: "Active",
    },
];

// Orders
export const orderColumns = [
    {field: "id", headerName: "ID", width: "7"},
    {
        field: "tid",
        headerName: "Tracking ID",
        width: 100,
    },
    {
        field: "product",
        headerName: "Product",
        width: 220,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.productname}
                </div>
            );
        },
    },
    {
        field: "customer",
        headerName: "Customer",
        width: 120,
    },
    {
        field: "date",
        headerName: "Date",
        width: 120,
    },
    {
        field: "amount",
        headerName: "Amount",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 80,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
        field: "payment",
        headerName: "Payment",
        width: 80,
    },
];

// Temporary data
export const orderRows = [
    {
        id: 1,
        tid: 8756342,
        productname: "Arrow mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Farrow%20mug%2Farrow%20mugs.PNG?alt=media&token=36d79d73-0a4c-4a7a-95bf-a0b31d3a56fe",
        customer: "Sarah Johnson",
        date: "12-Apr-2023",
        amount: "Ksh2600",
        status: "Approved",
        payment: "Cash",
    },
    {
        id: 2,
        tid: 2674159,
        productname: "Flowered mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fflowered%20mugs%2Fflowered%20mugs.PNG?alt=media&token=1c87ea34-20c0-4311-87c3-8ec18585fdd7",
        customer: "Polo Smith",
        date: "05-May-2023",
        amount: "Ksh6800",
        status: "Pending",
        payment: "Debit Card",
    },
    {
        id: 3,
        tid: 9432158,
        productname: "Non slip bathroom mats",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fwhite.PNG?alt=media&token=3a1ef0ec-aaf6-4362-967b-978ba66cd212",
        customer: "Maria Lopez",
        date: "02-Jan-2023",
        amount: "Ksh1200",
        status: "Approved",
        payment: "M-Pesa",
    },
    {
        id: 4,
        tid: 3786241,
        productname: "Gold and black decor",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fgold%20and%20black%20decor%2Fgold%20and%20black%20decor.PNG?alt=media&token=b1d298f7-1244-40ea-bc34-d194b7280be0",
        customer: "David Lee",
        date: "19-Feb-2023",
        amount: "Ksh3500",
        status: "Pending",
        payment: "M-Pesa",
    },
    {
        id: 5,
        tid: 5623985,
        productname: "Plain Hexagon mugs",
        img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fplain%20hexagon%20mugs.PNG?alt=media&token=d94a7cb6-512e-4ffa-88f1-e402cd7758dd",
        customer: "Samantha Lee",
        date: "01-Mar-2023",
        amount: "Ksh500",
        status: "Approved",
        payment: "Cash",
    },
];
