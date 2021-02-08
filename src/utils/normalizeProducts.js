export const getProductsData = (productsData) => productsData.map(getProductData)

export const getProductData = (product) => ({
  id: product.id,
  name: product.name,
  price: Number(product.price),
  discount: Number(product.discount),
  category: product.category,
  img: product.img_url,
  createdDate: product.created_at,
  updatedDate: product.updated_at,
  deletedDate: product.deleted_at,
})
