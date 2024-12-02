import React from "react";
import { useLocation } from "react-router-dom";

const ServerErrorPage = () => {
  const location = useLocation();
  const errorDetails = location.state?.errorDetails;

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
      {/* Error Message Section */}
      <h1 className="text-danger">500 - Internal Server Error</h1>
      <p className="text-muted">Refreshing the page might resolve the issue!</p>

      {errorDetails && (
        <div className="bg-white p-4 rounded shadow-sm">
          <h5 className="text-dark">Error: {errorDetails.message}</h5>
          <p className="text-muted">
            Note: If you are seeing this, Angular is probably not to blame.
          </p>
          <p className="fw-bold">What to do next?</p>
          <ol className="text-start">
            <li>Open the Chrome DevTools.</li>
            <li>Inspect the <b>Network</b> tab.</li>
            <li>Check the failing request.</li>
            <li>Examine the request URL - make sure it is correct.</li>
            <li>Reproduce the error in Postman - if we see the same response, then the issue is not with Angular.</li>
          </ol>
          <p className="fw-bold">Following is the stack trace - this is where your investigation should start!</p>
          <div className="bg-light p-3 rounded">
            <code>{errorDetails.stack}</code>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServerErrorPage;
