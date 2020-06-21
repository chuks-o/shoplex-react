const ProductCondition = ({ condition }) => {
  const conditions = {
    "Brand New": "badge-custom-primary",
    Used: "badge-custom-secondary"
  };
  const badgeClass = conditions[condition];

  return <span className={`badge ${badgeClass} badge-sm`}>{condition}</span>;
};

export default ProductCondition;
