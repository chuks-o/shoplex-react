import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { baseUrl } from "../../../utils/variables";
import * as Yup from "yup";
import { Formik } from "formik";
import Thumbnail from "./Thumbnail";
import Dropzone from "react-dropzone";
import axios from "axios";

const validationSchema = Yup.object({
  title: Yup.string().required("The title is required").label("Title"),
  description: Yup.string()
    .required("The description is required")
    .label("Description"),
  categoryId: Yup.string()
    .required("The category is required")
    .label("Category"),
  subCategoryId: Yup.string()
    .required("The sub category is required")
    .label("sub category"),
  images: Yup.array()
    .required("You should upload at least one image of your product")
    .label("Required"),
  stateId: Yup.string().required("The state is required").label("State"),
  lgaId: Yup.string()
    .required("The local government is required")
    .label("Local Govt"),
  price: Yup.number()
    .required("The price must be only numbers")
    .positive()
    .label("Price"),
  condition: Yup.string()
    .required("The condition of the product is required")
    .label("Condition"),
});

const CreateProductDetails = (props) => {
  const {
    payload: { token },
    categories,
    states,
    user,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [lga, setLga] = useState([]); // local government area

  const handleSubCategory = async (categoryId) => {
    const url = `${baseUrl}/products/sub/categories/${categoryId}`;

    try {
      const subCat = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const {
        data: { subcategories },
      } = await subCat.json();

      setSubCategories(subcategories);
    } catch (error) {}
  };

  const handleRegion = async (stateId) => {
    const url = `${baseUrl}/regions/lga/${stateId}`;

    try {
      const localGovernment = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const {
        data: { lga },
      } = await localGovernment.json();

      setLga(lga);
    } catch (error) {}
  };

  const handleProductSubmit = async (formVal) => {
    setIsSubmitting(true);

    const formValues = formVal;

    console.log(formValues);

    let formData = new FormData();

    formData.append("userId", user.id);
    formData.append("status", "draft");
    // Add all the uploaded files to form data
    for (const key of Object.keys(formValues.images)) {
      formData.append("images", formValues.images[key]);
    }

    for (let [key, value] of Object.entries(formValues)) {
      if (key === "images") continue;
      formData.append(key, value);
      console.log(`${key}: ${value}`);
    }

    const url = `${baseUrl}/products/store`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const {
        data: { product },
      } = response;

      console.log(product);
      props.onFormSubmit(product);
    } catch (error) {}
    setIsSubmitting(false);
  };

  return (
    <div className="ads-form">
      <Formik
        initialValues={{
          title: "",
          description: "",
          categoryId: "",
          subCategoryId: "",
          price: "",
          stateId: "",
          lgaId: "",
          images: [],
          condition: "",
        }}
        validate={(values) => {
          if (values.subCategoryId.length < 1 && values.categoryId.length > 0) {
            handleSubCategory(values.categoryId);
          }

          if (values.lgaId.length < 1 && values.stateId.length > 0) {
            handleRegion(values.stateId);
          }
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleProductSubmit(values)}
        validateOnBlur={true}
        // enableReinitialize={true}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          handleBlur,
          errors,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="category" className="small mb-1">
                    Title
                  </label>
                  <input
                    id="title"
                    className="form-control"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  ></input>
                  {errors.title && touched.title && (
                    <span className="errors small text-danger">
                      {errors.title}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="description small" className="small mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    value={values.description}
                  ></textarea>

                  {errors.description && touched.description && (
                    <span className="errors small text-danger">
                      {errors.description}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="category" className="small mb-1">
                    Category
                  </label>

                  <select
                    id="category"
                    className="form-control"
                    name="categoryId"
                    onBlur={handleBlur}
                    value={values.categoryId}
                    onChange={handleChange}
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>

                  {errors.categoryId && touched.categoryId && (
                    <span className="errors small text-danger">
                      {errors.categoryId}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="subcategory small" className="small mb-1">
                    Sub Category
                  </label>
                  <select
                    id="subcategory"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={values.categoryId === ""}
                    name="subCategoryId"
                    value={values.subCategoryId}
                    required="required"
                  >
                    {subCategories.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.subCategoryId && touched.subCategoryId && (
                    <span className="errors small text-danger">
                      {errors.subCategoryId}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="small">Product Images</label>
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      // do nothing if no image
                      if (acceptedFiles.length === 0) {
                        return;
                      }
                      // on drop we add to the existing image
                      setFieldValue(
                        "images",
                        values.images.concat(acceptedFiles)
                      );
                    }}
                  >
                    {({ getRootProps, getInputProps }) => {
                      const thumbnails =
                        values.images.length > 0 &&
                        values.images.map((file, i) => (
                          <Thumbnail
                            key={i}
                            file={file}
                            removeImage={(image) => {
                              const newValues = values.images.filter(
                                (img) => img != image
                              );
                              setFieldValue("images", newValues);
                            }}
                          />
                        ));

                      return (
                        <>
                          <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            <p className="m-0">
                              Drag 'n' drop some of your product images, or
                              click to select image file
                            </p>
                          </div>
                          {values.images.length > 0 && (
                            <div className="d-flex mt-3">{thumbnails}</div>
                          )}
                        </>
                      );
                    }}
                  </Dropzone>
                </div>
              </div>
            </div>

            <div className="row py-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="condition" className="small mb-1">
                    Product Condition
                  </label>
                  <br />
                  <select
                    id="condition"
                    name="condition"
                    value={values.condition}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  >
                    <option value="Brand New">Brand New</option>
                    <option value="Used">Used</option>
                  </select>

                  {errors.condition && touched.condition && (
                    <div className="errors small text-danger">
                      {errors.condition}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="price" className="small mb-1">
                    Price
                  </label>
                  <input
                    id="price"
                    className="form-control"
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                  {errors.price && touched.price && (
                    <span className="errors small text-danger">
                      {errors.price}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="state" className="small mb-1">
                    State
                  </label>

                  <select
                    id="state"
                    value={values.stateId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    name="stateId"
                  >
                    {states.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.stateId && touched.stateId && (
                    <span className="errors small text-danger">
                      {errors.stateId}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lga " className="small mb-1">
                    Local Government
                  </label>

                  <select
                    id="lga"
                    className="form-control"
                    name="lgaId"
                    onChange={handleChange}
                    value={values.lgaId}
                    disabled={values.stateId === ""}
                  >
                    {lga.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>

                  {errors.lgaId && touched.lgaId && (
                    <span className="errors small text-danger">
                      {errors.lgaId}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group mt-4">
              <button
                className="btn btn-primary font-weight-bold"
                type="submit"
                disabled={isSubmitting}
              >
                Continue
              </button>
            </div>
          </form>
        )}
      </Formik>

      <style jsx>{`
        input[type="file"] {
          overflow-wrap: break-word !important;
          word-wrap: break-word;
        }

        .dropzone {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          border-width: 2px;
          border-radius: 2px;
          border-color: #eeeeee;
          border-style: dashed;
          background-color: #fafafa;
          color: #bdbdbd;
          outline: none;
          transition: border 0.24s ease-in-out;
        }
        .dropzone:focus {
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default CreateProductDetails;
