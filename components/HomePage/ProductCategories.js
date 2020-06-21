import Link from "next/link";

const ProductCategories = (props) => {
  const { categories, color } = props;

  const textColor = {
    light: "text-white",
    dark: "text-dark",
  };

  let linkId = 0;

  if (props.activeLinkId) {
    let { activeLinkId } = props;
    linkId = parseInt(activeLinkId);
  }

  return (
    <div>
      {categories && (
        <ul className="list-group list-group-flush">
          {categories.map(({ id, title }) => (
            <li
              key={id}
              className={`list-group-item border-0 rounded-sm ${
                linkId === id ? "active" : ""
              }`}
            >
              <Link href={`/categories/${id}`} as={`/categories/${id}`}>
                <div className="d-flex align-items-center">
                  <a className="font-weight-normal text-dark">{title}</a>
                  <span className="ml-auto fas fa-chevron-right text-muted fa-xs"></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <style jsx global>{`
        li.active a {
          color: #fff;
        }
        li.list-group-item {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProductCategories;
