// ReportTable.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ReportTable from './App';
import '@testing-library/jest-dom/extend-expect';

const reports = [
  { id: 'S789654', date: '09/30/2023', patient: 'Smith', oncologist: 'Bob', status: 'Submitted' },
  // Add more sample data as needed
];

test('renders ReportTable component', () => {
  render(<ReportTable />);
  
  // Test if all the headers are present
  expect(screen.getByText('Report Id')).toBeInTheDocument();
  expect(screen.getByText('Report Date')).toBeInTheDocument();
  expect(screen.getByText('Patient Name')).toBeInTheDocument();
  expect(screen.getByText('Oncologist Name')).toBeInTheDocument();
  expect(screen.getByText('Report Status')).toBeInTheDocument();
  expect(screen.getByText('Actions')).toBeInTheDocument();
  
  // Test if the rows are rendered with the correct data
  reports.forEach((report) => {
    expect(screen.getByText(report.id)).toBeInTheDocument();
    expect(screen.getByText(report.date)).toBeInTheDocument();
    expect(screen.getByText(report.patient)).toBeInTheDocument();
    expect(screen.getByText(report.oncologist)).toBeInTheDocument();
    expect(screen.getByText(report.status)).toBeInTheDocument();
  });
});
