import { Carousel } from "react-responsive-carousel";

export default ({ product }) => {
  const { uploads } = product;
  let carousel = "";

  if (uploads.length === 0) {
    carousel = (
      <div>
        <img
          alt="no-image"
          className="img-responsive img-fluid"
          src="/images/image-placeholder.jpg"
          height="250px"
        />
        <p className="legend">No Image</p>
      </div>
    );
  }

  if (uploads.length > 0) {
    carousel = uploads.map((upload, index) => {
      return (
        <div key={index}>
          <img
            alt="product-image"
            src={upload.filename}
            className="img-responsive"
          />
          <p className="legend">{product.title}</p>
        </div>
      );
    });
  }
  return <Carousel>{carousel}</Carousel>;
};
