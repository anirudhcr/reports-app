// App.js
import React from 'react';
//import { Button } from 'reactstrap';//
import '@progress/kendo-theme-default/dist/all.css'//; // Ensure this import is included
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'; // Import KendoReact Grid components
import './App.css';
import refreshIcon from './images/refresh-icon.svg';
import editIcon from './images/edit-icon.svg';
import deleteIcon from './images/delete-icon.svg';
import downloadIcon from './images/cloud-download.svg';

const reports = [
  { id: 'S789654', date: '09/30/2023', patient: 'Smith', oncologist: 'Bob', status: 'Submitted' },
  { id: 'D123456', date: '08/30/2023', patient: 'David', oncologist: 'Bob fox', status: 'Drafted' },
  { id: 'D125478', date: '08/30/2023', patient: 'Jone', oncologist: 'fox', status: 'Canceled' },
  { id: 'D489756', date: '08/30/2023', patient: 'Harry', oncologist: 'Bob fox', status: 'Drafted' },
];
const CustomDateHeader = (props) => (
  <span>
    {props.title} <span style={{ fontSize: '12px' , fontWeight: 'normal'}}>(mm/dd/yyyy)</span>
  </span>
);

const columns = [
  { field: 'id', title: 'Report Id',headerCell: (props) => <CustomHeader {...props} /> },
  { field: 'date', title: 'Report Date', headerCell: CustomDateHeader},
  { field: 'patient', title: 'Patient Name' },
  { field: 'oncologist', title: 'Oncologist Name' },
  { field: 'status', title: 'Report Status' },
];

const KendoReactTable = () => {
  return (
    <Grid
      style={{ height: '400px'}}
      data={reports}
      resizable={true}
      pageable={true}
      sortable={true}
      pagerStyle={{ background: 'transparent', padding: '10px' }}
      
    >
      {columns.map(column => (
        <Column key={column.field} field={column.field} title={column.title} headerCell={column.headerCell}/>
      ))} 
      <Column title="Actions" cell={CommandCell} />
    </Grid>
  );
};


const CommandCell = (props) => (
  <td>
    <button className="icon-button" onClick={() => console.log(`Edit clicked for report ${props.dataItem.id}`)}>
      <img src={editIcon} alt="Edit" className="icon" />
    </button>
    <button className="icon-button" onClick={() => console.log(`Delete clicked for report ${props.dataItem.id}`)}>
      <img src={deleteIcon} alt="Delete" className="icon" />
    </button>
    <button className="icon-button" onClick={() => console.log(`Export clicked for report ${props.dataItem.id}`)}>
      <img src={downloadIcon} alt="Export" className="icon" />
    </button>
  </td>
);

const CustomHeader = (props) => (
  <>
    <tr>
      <th>
        <button className="refresh-button" onClick={() => console.log('Refresh clicked')}>
          <img src={refreshIcon} alt="Refresh" className="icon" />
        </button>
        
      </th>
    </tr>
    <tr>
      <th>{props.title}</th>
    </tr>
  </>
);

const ViewListOfReports = () => {
  return (
    <div className="container">
      <h1 className="page-header">View List of Reports</h1>
      <KendoReactTable />
    </div>
  );
};

export default ViewListOfReports;
