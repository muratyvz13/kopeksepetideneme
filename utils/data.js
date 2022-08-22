import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/cardbgpink.png',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      doping:1,
      description: 'A popular shirt',
    },
    {
      name: 'Free Shirt2',
      slug: 'free-shirt2',
      category: 'Shirts',
      image: '/images/cardbgblack.png',
      price: 71,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      doping:0,
      description: 'A popular shirtt',
    }
    
  ],
};

export default data;
