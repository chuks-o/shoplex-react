import { useEffect, useState } from "react";

const Thumbnail = ({ file, removeImage }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) {
      return;
    }

    setLoading(true);
    let reader = new FileReader();

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return null;
  }

  if (loading) {
    return <p className="small">loading...</p>;
  }

  return (
    <div className="d-flex align-items-start img-container">
      <div>
        <img
          src={thumb}
          alt={file.name}
          className="img-thumbnail img-fluid"
          width={80}
        />
      </div>
      <div className="remove" onClick={(event) => removeImage(file)}>
        <span className="">&times;</span>
      </div>

      <style jsx>{`
        .img-container {
          margin-right: 10px;
        }
        .remove {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: red;
          color: white;
          height: 17px;
          width: 17px;
          min-height: 17px;
          min-width: 17px;
          line-height: 17px;
          padding: 0;
          border-radius: 50%;
          margin-left: -10px;
          margin-top: -9px;
          cursor: pointer;
        }
        .remove span {
          font-weight: 500;
          font-size: 16px;
          padding-bottom: 3px;
          margin-left: 1px;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
