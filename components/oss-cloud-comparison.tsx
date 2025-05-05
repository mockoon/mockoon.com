const OssCloudComparison = function () {
  return (
    <>
      <h2 className='fw-bold position-relative mt-8 text-center'>
        Comparison between Mockoon open-source and Mockoon Cloud
      </h2>

      <div className='table-responsive'>
        <table className='table border'>
          <thead>
            <tr>
              <th></th>
              <th>Mockoon Open-Source</th>
              <th>Mockoon Cloud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dynamic mocks (rules, templating, etc.)</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>Recording/replay</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>Requests logging</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>Requests forwarding</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>CRUD operations and stateful endpoints</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>OpenAPI compatibility</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>Web application</td>
              <td>
                <span className='text-danger fw-bold fs-3 me-2'>
                  <i className='icon-clear'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>Real-time collaboration</td>
              <td>
                <span className='text-danger fw-bold fs-3 me-2'>
                  <i className='icon-clear'></i>
                </span>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>Automatic data synchronization</td>
              <td>
                <span className='text-danger fw-bold fs-3 me-2'>
                  <i className='icon-clear'></i>
                </span>
                <br />
                <small>Manual file sharing (git, etc.)</small>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>API mocks hosting</td>
              <td>
                <span className='text-danger fw-bold fs-3 me-2'>
                  <i className='icon-clear'></i>
                </span>
                <br />
                <small>Self-hosting with the CLI and Docker image</small>
              </td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
                <br />
                <small>Cloud instances</small>
              </td>
            </tr>
            <tr>
              <td>Priority/enterprise support</td>
              <td>No</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>AI-powered API mocks generation</td>
              <td>No</td>
              <td>
                <span className='text-success fw-bold fs-3 me-2'>
                  <i className='icon-check'></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OssCloudComparison;
