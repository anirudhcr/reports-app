const ReportTable = () => {
    const handleRefresh = () => {
      // Handle refresh action
      console.log('Refresh clicked');
    };
  
    const handleEdit = (reportId) => {
      // Handle edit action for the specific report
      console.log(`Edit clicked for report ${reportId}`);
    };
  
    const handleDelete = (reportId) => {
      // Handle delete action for the specific report
      console.log(`Delete clicked for report ${reportId}`);
    };
  
    const handleExport = (reportId) => {
      // Handle export action for the specific report
      console.log(`Export clicked for report ${reportId}`);
    };
  
    return (
      <Table data-testid="report-table" striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Button className="icon-button" onClick={handleRefresh}>
                <img src={refreshIcon} alt="Refresh" className="icon" />
              </Button>
              Report Id
            </th>
            <th>
              Report Date (mm/dd/yyyy)
            </th>
            <th>Patient Name</th>
            <th>Oncologist Name</th>
            <th>Report Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.id}</td>
              <td>{report.date}</td>
              <td>{report.patient}</td>
              <td>{report.oncologist}</td>
              <td>{report.status}</td>
              <td>
                <Button className="icon-button" onClick={() => handleEdit(report.id)}>
                  <img src={editIcon} alt="Edit" className="icon" />
                </Button>
                <Button className="icon-button" onClick={() => handleDelete(report.id)}>
                  <img src={deleteIcon} alt="Delete" className="icon" />
                </Button>
                <Button className="icon-button" onClick={() => handleExport(report.id)}>
                  <img src={exportIcon} alt="Export" className="icon" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };