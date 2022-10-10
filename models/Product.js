import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    ilanTarihi: { type: String, required: true },
    fiyat: { type: String, required: true },
    slug: { type: String, required: true },
    irk: { type: String, required: true },
    cinsiyet: { type: String, required: true },
    age: { type: String, required: true },
    ownerUser: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    detailcategory:{ type: String, required: true },
    category: { type: String, required: true },
    vitrin: { type: String, required: true },
    ilantelNo: { type: String, required: true },
    deneme: { type: String, required: true ,unique: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
/*
    description: { type: String, required: true },
    ownerUser: { type: String, required: true },
    location: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    irk: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    */
