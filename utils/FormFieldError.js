const formFieldError = (props) => {
  const { formErrors, fieldName } = props;

  let errorMessage = Object.entries(formErrors).map(([field, value]) => {
    if (field === fieldName) {
      let formErrArr = Object.entries(formErrors[field]);
      return formErrArr.map(([key, message], index) => {
        return (
          message.length > 0 && (
            <div key={`${index}-${message}`} className="mb-0 p-0">
              <span className="text-danger small">{message}</span>
            </div>
          )
        );
      });
    }

    return "";
  });

  return errorMessage;
};

export default formFieldError;
