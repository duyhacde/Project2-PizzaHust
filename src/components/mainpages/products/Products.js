import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading';

const products = [
  {
    _id: '1',
    title: 'Pizza Pate Lạp Xưởng',
    price: 109,
    description: 'Sự kết hợp đột phá của hương vị truyền thống với Lạp xưởng Mai Quế Lộ, Pate Đồng Quê và phô mai Mozzarella thơm béo mang lại trải nghiệm mới mẻ và thú vị.!',
    category: 'pizza',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Pizza_Pate_Lap_Xuong_400x275.jpg'
    }
  },
  {
    _id: '2',
    title: 'Pizza Rau Củ',
    price: 79,
    description: 'Thanh Nhẹ Với Ô Liu Đen Tuyệt Hảo, Cà Chua Bi Tươi Ngon, Nấm, Thơm, Bắp, Hành Tây Và Phô Mai Mozzarella Cho Bạn Bữa Tiệc Rau Củ Tròn Vị',
    category: 'pizza',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Pizza_Rau_Cu_400x275.jpg'
    }
  },
  {
    _id: '3',
    title: 'Pizza Thập Cẩm',
    price: 129,
    description: 'Mang Hương Vị Truyền Thống Với ThịT Bò, Thịt Xông Khói, Pepperoni, Ớt Chuông, Nấm Và Hành Tây, Phủ Phô Mai Mozzarella',
    category: 'pizza',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Pizza_Thap_Cam_400x275.jpg'
    }
  },
  {
    _id: '4',
    title: 'Pizza Gà Nướng Nấm',
    price: 109,
    description: 'Pizza Gà Nướng Nấm Trong Cuộc Phiêu Lưu Vị Giác Với Thịt Gà, Nấm, Thơm, Cà Rốt Và Rau Mầm Phủ Xốt Tiêu Đen Thơm Nồng',
    category: 'pizza',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Pizza_Ga_Nuong_Nam_400x275.jpg'
    }
  },
  {
    _id: '5',
    title: 'Cánh Gà Nướng BBQ',
    price: 109,
    description: 'Cánh Gà Nướng Thơm Lừng Ngon Tuyệt Với Hương Vị BBQ',
    category: 'appetizer',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Canh_Ga_Nuong_BBQ_400x275.jpg'
    }
  },
  {
    _id: '6',
    title: 'Khoai Tây Chiên',
    price: 59,
    description: 'Khoai tây chiên với sốt cà chua',
    category: 'appetizer',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Khoai_Tay_Chien_400x275.jpg'
    }
  },
  {
    _id: '7',
    title: 'Nachos',
    price: 29,
    description: 'Bánh Nachos Giòn Rụm Kiểu Mexico Kèm Xốt Phô Mai Thơm Ngậy Hoặc Xốt Cà Chua Đặc Biệt.',
    category: 'appetizer',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Nachos_400x275.jpg'
    }
  },
  {
    _id: '8',
    title: 'Xà Lách Cá Ngừ Và Thịt Xông Khói',
    price: 79,
    description: 'Rau Xanh Trộn Với Cá Ngừ, Thịt Xông Khói, Đậu Pháp, Cà Chua Bi, Bắp Và Xốt Mayonnaise',
    category: 'appetizer',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Xa_Lach_Ca_Ngu_400x275.jpg'
    }
  },
  {
    _id: '9',
    title: 'Pepsi Lon 320ml',
    price: 30,
    description: 'Pepsi Lon 320ml',
    category: 'drink',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Pepsi_Can_400x275.jpg'
    }
  },
  {
    _id: '10',
    title: 'Trà Sữa Trà Đen',
    price: 39,
    description: 'Trà Oolong, Hạt Chia Và Kem Sữa',
    category: 'drink',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Tra_Sua_Tra_Den_400x275.jpg'
    }
  },
  {
    _id: '11',
    title: 'Trà Đào Hạt Chia',
    price: 39,
    description: 'Trà Đào, Đào Miếng Và Hạt Chia',
    category: 'drink',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Tra_Dao_Hat_Chia_400x275.jpg'
    }
  },
  {
    _id: '12',
    title: 'Trà Vải',
    price: 39,
    description: 'Trà Vải',
    category: 'drink',
    images: {
      url: 'https://cdn.pizzahut.vn/images/Web_V3/Products/Tra_Vai_400x275.jpg'
    }
  }
]

function Products() {
  const state = useContext(GlobalState)
  //const [products] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin
  
  //key: Fix product.id => product._id
  return (
    <>
      <div className="products">
          {
            products.map(product => {
              return <ProductItem 
              key={product._id} 
              product={product}
              isAdmin={isAdmin}/>
            })
          }
      </div>
      {products.length === 0 && <Loading />}
    </>
  )
}

export default Products