const FormStepper = (props) => {
  const {
    activePage: { name },
  } = props;

  return (
    <div className="md-stepper-horizontal secondary mb-5">
      <div className={`md-step ${name === "product-details" ? "active" : ""}`}>
        {/* active, done */}
        <div className="md-step-circle">
          <span>1</span>
        </div>
        <div className="md-step-title">Product Details</div>
        <div className="md-step-bar-left"></div>
        <div className="md-step-bar-right"></div>
      </div>
      <div className={`md-step ${name === "product-package" ? "active" : ""}`}>
        <div className="md-step-circle">
          <span>2</span>
        </div>
        <div className="md-step-title">Product Package</div>
        <div className="md-step-bar-left"></div>
        <div className="md-step-bar-right"></div>
      </div>
      <div className={`md-step ${name === "product-review" ? "active" : ""}`}>
        <div className="md-step-circle">
          <span>3</span>
        </div>
        <div className="md-step-title">Product Review</div>
        <div className="md-step-bar-left"></div>
        <div className="md-step-bar-right"></div>
      </div>

      <style jsx>{`
        .md-stepper-horizontal {
          display: table;
          width: 100%;
          margin: 0 auto;
        }
        .md-stepper-horizontal .md-step {
          display: table-cell;
          position: relative;
          padding: 5px;
        }

        .md-stepper-horizontal .md-step:active {
          border-radius: 15% / 75%;
        }
        .md-stepper-horizontal .md-step:first-child:active {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .md-stepper-horizontal .md-step:last-child:active {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .md-stepper-horizontal .md-step:hover .md-step-circle {
          background-color: #757575;
        }
        .md-stepper-horizontal .md-step:first-child .md-step-bar-left,
        .md-stepper-horizontal .md-step:last-child .md-step-bar-right {
          display: none;
        }
        .md-stepper-horizontal .md-step .md-step-circle {
          width: 30px;
          height: 30px;
          margin: 0 auto;
          background-color: #999999;
          border-radius: 50%;
          text-align: center;
          line-height: 30px;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }
        .md-stepper-horizontal.green .md-step.active .md-step-circle {
          background-color: #00ae4d;
        }
        .md-stepper-horizontal.orange .md-step.active .md-step-circle {
          background-color: #f96302;
        }
        .md-stepper-horizontal.secondary .md-step.active .md-step-circle {
          background-color: #fe346e;
        }
        .md-stepper-horizontal .md-step.active .md-step-circle {
          background-color: rgb(33, 150, 243);
        }
        .md-stepper-horizontal .md-step .md-step-title {
          margin-top: 16px;
          font-size: 16px;
          font-weight: 600;
        }
        .md-stepper-horizontal .md-step .md-step-title,
        .md-stepper-horizontal .md-step .md-step-optional {
          text-align: center;
          color: rgba(0, 0, 0, 0.26);
        }
        .md-stepper-horizontal .md-step.active .md-step-title {
          font-weight: 600;
          color: rgba(0, 0, 0, 0.87);
        }
        .md-stepper-horizontal .md-step.active.done .md-step-title,
        .md-stepper-horizontal .md-step.active.editable .md-step-title {
          font-weight: 600;
        }
        .md-stepper-horizontal .md-step .md-step-optional {
          font-size: 12px;
        }
        .md-stepper-horizontal .md-step.active .md-step-optional {
          color: rgba(0, 0, 0, 0.54);
        }
        .md-stepper-horizontal .md-step .md-step-bar-left,
        .md-stepper-horizontal .md-step .md-step-bar-right {
          position: absolute;
          top: 20px;
          height: 1px;
          border-top: 1px solid #dddddd;
        }
        .md-stepper-horizontal .md-step .md-step-bar-right {
          right: 0;
          left: 50%;
          margin-left: 20px;
        }
        .md-stepper-horizontal .md-step .md-step-bar-left {
          left: 0;
          right: 50%;
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
};

export default FormStepper;
