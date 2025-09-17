export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory?: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isTrending?: boolean;
  isOnSale?: boolean;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: 'men-shirt-1',
    name: 'Classic Cotton Dress Shirt',
    price: 89.99,
    originalPrice: 120.00,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'men',
    subcategory: 'shirts',
    description: 'A timeless dress shirt crafted from premium cotton. Perfect for office wear or formal occasions.',
    features: ['100% Cotton', 'Machine Washable', 'Wrinkle Resistant', 'Classic Fit'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Black'],
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    isOnSale: true,
    isTrending: true
  },
  {
    id: 'men-jeans-1',
    name: 'Slim Fit Dark Wash Jeans',
    price: 119.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'men',
    subcategory: 'jeans',
    description: 'Modern slim-fit jeans in classic dark wash. Comfortable stretch denim with premium construction.',
    features: ['98% Cotton, 2% Elastane', 'Stretch Comfort', 'Classic Five Pocket', 'Slim Fit'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Dark Blue', 'Black', 'Medium Blue'],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    isTrending: true
  },

  // Women's Clothing
  {
    id: 'women-dress-1',
    name: 'Elegant Midi Wrap Dress',
    price: 159.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'women',
    subcategory: 'dresses',
    description: 'Sophisticated wrap dress perfect for work or evening events. Flattering silhouette with comfortable fabric.',
    features: ['Wrap Design', 'Midi Length', 'Machine Washable', 'Breathable Fabric'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Burgundy', 'Forest Green'],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    isNew: true
  },
  {
    id: 'women-blouse-1',
    name: 'Silk Button-Up Blouse',
    price: 199.99,
    originalPrice: 249.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'women',
    subcategory: 'blouses',
    description: 'Luxurious silk blouse with classic button-up design. Perfect for professional and casual styling.',
    features: ['100% Silk', 'Button-Up Front', 'Long Sleeves', 'Classic Collar'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Light Pink', 'Navy'],
    inStock: true,
    rating: 4.6,
    reviewCount: 92,
    isOnSale: true
  },

  // Kids' Clothing
  {
    id: 'kids-tshirt-1',
    name: 'Fun Graphic T-Shirt',
    price: 24.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'kids',
    subcategory: 'tops',
    description: 'Colorful and comfortable t-shirt with fun graphics. Made from soft cotton for all-day comfort.',
    features: ['100% Cotton', 'Fun Graphics', 'Machine Washable', 'Comfortable Fit'],
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['Blue', 'Red', 'Green', 'Yellow'],
    inStock: true,
    rating: 4.4,
    reviewCount: 67,
    isNew: true
  },

  // Shoes
  {
    id: 'shoes-sneakers-1',
    name: 'Classic White Sneakers',
    price: 129.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'shoes',
    subcategory: 'sneakers',
    description: 'Timeless white sneakers perfect for everyday wear. Comfortable cushioning and durable construction.',
    features: ['Leather Upper', 'Cushioned Sole', 'Lace-Up Closure', 'Rubber Outsole'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'White/Black', 'White/Navy'],
    inStock: true,
    rating: 4.5,
    reviewCount: 234,
    isTrending: true
  },
  {
    id: 'shoes-heels-1',
    name: 'Classic Black Pumps',
    price: 189.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'shoes',
    subcategory: 'heels',
    description: 'Elegant black pumps with comfortable heel height. Perfect for professional and formal occasions.',
    features: ['Leather Upper', '3-inch Heel', 'Cushioned Insole', 'Non-slip Sole'],
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: ['Black', 'Navy', 'Brown'],
    inStock: true,
    rating: 4.3,
    reviewCount: 145
  },

  // Bags
  {
    id: 'bags-handbag-1',
    name: 'Luxury Leather Handbag',
    price: 299.99,
    originalPrice: 399.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bags',
    subcategory: 'handbags',
    description: 'Sophisticated leather handbag with spacious interior and elegant design. Perfect for work and travel.',
    features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Gold Hardware'],
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Navy', 'Tan'],
    inStock: true,
    rating: 4.7,
    reviewCount: 198,
    isOnSale: true
  },
  {
    id: 'bags-backpack-1',
    name: 'Modern Canvas Backpack',
    price: 79.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bags',
    subcategory: 'backpacks',
    description: 'Stylish and functional canvas backpack perfect for work, school, or travel.',
    features: ['Canvas Material', 'Laptop Compartment', 'Water Resistant', 'Adjustable Straps'],
    sizes: ['One Size'],
    colors: ['Navy', 'Black', 'Olive', 'Gray'],
    inStock: true,
    rating: 4.4,
    reviewCount: 112,
    isNew: true
  },

  // Accessories
  {
    id: 'accessories-watch-1',
    name: 'Classic Leather Watch',
    price: 249.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'accessories',
    subcategory: 'watches',
    description: 'Elegant timepiece with genuine leather strap and classic design. Water resistant and durable.',
    features: ['Genuine Leather Strap', 'Water Resistant', 'Japanese Movement', 'Classic Design'],
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Navy'],
    inStock: true,
    rating: 4.6,
    reviewCount: 87
  },
  {
    id: 'accessories-sunglasses-1',
    name: 'Designer Sunglasses',
    price: 159.99,
    originalPrice: 199.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'accessories',
    subcategory: 'sunglasses',
    description: 'Stylish sunglasses with UV protection and premium frame construction.',
    features: ['UV Protection', 'Polarized Lenses', 'Premium Frame', 'Protective Case Included'],
    sizes: ['One Size'],
    colors: ['Black', 'Tortoise', 'Gold', 'Silver'],
    inStock: true,
    rating: 4.5,
    reviewCount: 134,
    isOnSale: true,
    isTrending: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getTrendingProducts = () => {
  return products.filter(product => product.isTrending);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = () => {
  return products.filter(product => product.isOnSale);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};