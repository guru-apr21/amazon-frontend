import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProducts, createProduct } from '../reducers/productReducer';
import CartProduct from './CartProduct';
import '../css/UserProducts.css';
import { setCategory } from '../reducers/categoryReducer';
import Input from 'input-hook';
import { useForm } from 'react-hook-form';
import Button from './common/Button';

function UserProducts() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    dispatch(setUserProducts());
    dispatch(setCategory());
  }, [dispatch]);

  const products = useSelector((state) => state.products.userProducts);
  const category = useSelector((state) => state.category);

  const onSubmit = async (data, e) => {
    console.log(data);
    const body = new FormData();
    Object.keys(data).forEach((key) => body.append(key, data[key]));

    for (let x = 0; x < data.images.length; x++) {
      body.append('images', data.images[x]);
    }
    dispatch(createProduct(body));
    e.target.reset();
  };

  return (
    <div className="userProducts">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
        style={{ width: '900px' }}
      >
        <h3>Create Product</h3>
        <Input
          label="Title"
          name="title"
          error={errors.title}
          register={register}
        />
        <Input
          type="currency"
          format="inr"
          name="price"
          label="Price"
          error={errors.price}
          register={register}
        />
        <Input
          name="images"
          label="Product Images"
          type="file"
          register={register}
          error={errors.images}
          multiple
        />
        <Input
          name="brand"
          label="Brand"
          error={errors.brand}
          register={register}
        />

        <label htmlFor="category">Choose a category:</label>
        <select
          id="category"
          name="categoryId"
          ref={register({ required: true })}
        >
          <option value="">Select</option>
          {category?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>
        <Button disabled={isSubmitting} type="submit" width="100%">
          Create Product
        </Button>
      </form>
      <div className="userProducts__products">
        <h1>Your Products</h1>
        {products?.map((product) => (
          <CartProduct
            id={product._id}
            showDelete={true}
            hideButtons={true}
            key={product._id}
            title={product.title}
            price={product.price}
            rating={5}
            image={`https://${product.images[0]}`}
          ></CartProduct>
        ))}
      </div>
    </div>
  );
}

export default UserProducts;
