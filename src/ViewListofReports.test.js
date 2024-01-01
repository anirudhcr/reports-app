// ViewListOfReports.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ViewListOfReports from './App';
import '@testing-library/jest-dom/extend-expect'; // Make sure to include this line

test('renders ViewListOfReports component', () => {
  render(<ViewListOfReports />);
  
  // Test if the heading is present
  expect(screen.getByText('View List of Reports')).toBeInTheDocument();
  
  // Test if the ReportTable component is rendered as a child
  expect(screen.getByTestId('report-table')).toBeInTheDocument();
});
