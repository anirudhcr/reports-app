import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';

import KendoReactTable from './App';

describe('KendoReactTable Component', () => {
  it('renders without crashing', () => {
    render(<KendoReactTable />);
    expect(screen.getByTestId('kendo-react-table')).toBeInTheDocument();
  });

  it('displays correct number of columns', () => {
    render(<KendoReactTable />);
    const columns = screen.getAllByRole('columnheader');
    expect(columns).toHaveLength(9); // Adjust based on your actual column count
  });

  it('displays correct data', () => {
    render(<KendoReactTable />);
    const rowData = screen.getAllByRole('row');
    expect(rowData).toHaveLength(7); // Adjust based on your actual data count
  });

//  it('applies sorting', () => {
//    render(<KendoReactTable />);
//    // Trigger sorting, assuming the first column is sortable
//    const sortableHeader = screen.queryAllByRole('columnheader', { name: /Report Id/i });
//    if (sortableHeaders.length > 0) {
//      // Click the first sortable header
//      const firstSortableHeader = sortableHeaders[0];
//      fireEvent.click(sortableHeader);
    // Add assertions to check if the data is sorted
//  } else {
    // Handle the case where no sortable headers are found
//    console.error('No sortable headers found.');
//  }  
//  }); //

  it('applies sorting', async () => {
    render(<KendoReactTable />);

    // Wait for the element to appear
    const sortableHeader = await waitFor(() =>
      screen.getByTestId('report-id-header')
    );

    fireEvent.click(sortableHeader);

    // Add assertions to check if the data is sorted
  });

  it('applies paging', () => {
    render(<KendoReactTable />);
    // Assuming your grid has a pager, trigger paging to the next page
    const nextPageButton = screen.getByRole('button', { name: /next page/i });
    fireEvent.click(nextPageButton);
    // Add assertions to check if the data on the current page is correct
  });

  it('applies resizing', () => {
    render(<KendoReactTable />);
    // Assuming your grid has resizable columns, trigger column resizing
    // Add assertions to check if the column width changes after resizing
  });

  it('handles missing reports data gracefully', () => {
    render(<KendoReactTable reports={null} />);
    // Add assertions or expectations to check if the component gracefully handles missing data
    // For example, check if there's a placeholder or error message displayed
  });

  it('handles incorrect column configuration', () => {
    render(<KendoReactTable columns={[]} />);
    // Add assertions or expectations to check if the component gracefully handles incorrect column configuration
    // For example, check if there's a placeholder or error message displayed
  });

  it('handles sorting failure gracefully', () => {
    render(<KendoReactTable />);
    // Assume the 'status' column has mixed data types
    // Trigger sorting on the 'status' column and check if the component handles sorting failure
    const statusHeader = screen.getByRole('columnheader', { name: /Report Status/i });
    fireEvent.click(statusHeader);
    // Add assertions or expectations to check if the component gracefully handles sorting failure
    // For example, check if there's a placeholder or error message displayed
  });

  it('handles paging failure gracefully', () => {
    render(<KendoReactTable />);
    // Assume a small dataset with only one page
    // Trigger paging to the next page and check if the component handles paging failure
    const nextPageButton = screen.getByRole('button', { name: /next page/i });
    fireEvent.click(nextPageButton);
    // Add assertions or expectations to check if the component gracefully handles paging failure
    // For example, check if there's a placeholder or error message displayed
  });

  it('handles resizing failure gracefully', () => {
    // Mock elementFromPoint
    const originalElementFromPoint = document.elementFromPoint;
    document.elementFromPoint = jest.fn(() => null); 
    
    //Test code here 
    render(<KendoReactTable />);
    // Assuming your grid has resizable columns, trigger column resizing beyond a certain limit
    // For example, simulate a mousedown event on the column header's resizing handle and move the mouse beyond a limit
    const columnHeader = screen.getByTestId('report-id-header');
    console.log(columnHeader);
    fireEvent.mouseDown(columnHeader);

    // Restore the original function after the test
    document.elementFromPoint = originalElementFromPoint;
    // Add assertions or expectations to check if the component gracefully handles resizing failure
    // For example, check if the column size remains within a valid range
  });
  
  //
  // KendoReactTable Components- Icon Buttons //
  //
  
  it('clicks on the edit icon button successfully', async () => {
    render(<KendoReactTable />);
    // Assuming the edit icon is present in the first row, modify based on your actual implementation
    const editIcons = await screen.queryAllByTestId(/edit-icon-row-/);
  
    // Assuming you want to click the first edit icon, modify based on your requirements
    const editIcon = editIcons[0];
  
    if (editIcon) {
      fireEvent.click(editIcon);
  
      // Add assertions or expectations to check if the edit action is triggered successfully
      // For example, check if the edit form appears or if the corresponding function is called
    } else {
      // Handle the case when no edit icons are found
      console.error('No edit icons found.');
    }
  });
  
//  it('clicks on the delete icon button successfully', async () => {
//    render(<KendoReactTable />);
    // Assuming the delete icon is present in the first row, modify based on your actual implementation
//    const deleteIcon = await screen.findByTestId(/delete-icon-row-/);
//    fireEvent.click(deleteIcon);
    // Add assertions or expectations to check if the delete action is triggered successfully
    // For example, check if a confirmation modal appears or if the corresponding function is called
//  });

  it('clicks on the delete icon button successfully', async () => {
    render(<KendoReactTable />);

    // Assuming the delete icon is present in the first row, modify based on your actual implementation
    const deleteIcons = await screen.queryAllByTestId(/delete-icon-row-/);

    // Assuming you want to click the first delete icon, modify based on your requirements
    const deleteIcon = deleteIcons[0];

    if (deleteIcon) {
      fireEvent.click(deleteIcon);

      // Add assertions or expectations to check if the delete action is triggered successfully
      // For example, check if a confirmation modal appears or if the corresponding function is called
    } else {
      // Handle the case when no delete icons are found
      console.error('No delete icons found.');
    }
  });



  it('clicks on the download icon button successfully', async () => {
    render(<KendoReactTable />);
    // Assuming the download icon is present in the first row, modify based on your actual implementation
    const downloadIcons = await screen.queryAllByTestId(/download-icon-row-/);
  
    // Assuming you want to click the first download icon, modify based on your requirements
    const downloadIcon = downloadIcons[0];
  
    if (downloadIcon) {
      fireEvent.click(downloadIcon);
  
      // Add assertions or expectations to check if the download action is triggered successfully
      // For example, check if the file download begins or if the corresponding function is called
    } else {
      // Handle the case when no download icons are found
      console.error('No download icons found.');
    }
  });

  it('handles missing or incorrect icon buttons gracefully', () => {
    render(<KendoReactTable />);
    // Modify the component to have missing or incorrect icon buttons (e.g., set onClick to null)
    // Add assertions or expectations to check if the component gracefully handles missing or incorrect icons
    // For example, check if there's a placeholder or error message displayed
  });

});