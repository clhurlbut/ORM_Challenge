// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.BelongsTo.Category
// Categories have many Products
Category.HasMany.Product
// Products belongToMany Tags (through ProductTag)
Product.BelongsToMany.ProductTag
// Tags belongToMany Products (through ProductTag)
ProductTag.BelongsToMany.ProductTag

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
