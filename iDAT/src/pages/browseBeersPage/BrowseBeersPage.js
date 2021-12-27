import React, { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useDispatch, useSelector} from 'react-redux';
import { getMessagesData } from '../../store/beer-actions';
import { useEffect } from 'react';


const BrowseBeersPage = () => {
    const dispatch = useDispatch();
    /* useEffect(() => {
        dispatch(getMessagesData());
       }, []); */

    //const rowData =  useSelector((state) => state.beers.items);
    /* const rowData = [
        {ArchMessageID: "Toyota", BTSInterchangeID: "Celica", ArchTime: 35000},
        {ArchMessageID: "Toyota", BTSInterchangeID: "Celica", ArchTime: 35000},
        {ArchMessageID: "Toyota", BTSInterchangeID: "Celica", ArchTime: 35000}
    ]; */

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    /* const onGridReady = (params) => {
            
        const updateData = (data) => params.api.setRowData(data);
    
        fetch('messages_grid.json')
          .then((resp) => resp.json())
          .then((data) => updateData(data));
      }; */

      const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    
        const updateData = (data) => {
          var dataSource = {
            rowCount: null,
            getRows: function (params) {
              console.log('asking for ' + params.startRow + ' to ' + params.endRow);
              setTimeout(function () {
                var rowsThisPage = data.slice(params.startRow, params.endRow);
                var lastRow = -1;
                if (data.length <= params.endRow) {
                  lastRow = data.length;
                }
                params.successCallback(rowsThisPage, lastRow);
              }, 500);
            },
          };
          params.api.setDatasource(dataSource);
          setRowData(data);
        };
    
        fetch('messages_grid.json')
          .then((resp) => resp.json())
          .then((data) => updateData(data));
      };

      var ageType = 'everyone';
function asDate(dateAsString) {
  var splitFields = dateAsString.split('/');
  console.log('asDate:' + new Date(splitFields[2], splitFields[1], splitFields[0]));
  return new Date(splitFields[2], splitFields[1], splitFields[0]);
}

      const externalFilterChanged = (newValue) => {
        console.log('filter changed');
        ageType = newValue;
        gridApi.onFilterChanged();
      };

      const isExternalFilterPresent = () => {
        console.log('isExternalFilterPresent ageType:' + ageType + (ageType !== 'everyone'));
        return ageType !== 'everyone';
      };

      


      const doesExternalFilterPass = (node) => {
        console.log('doesExternalFilterPass');
        switch (ageType) {
          case 'below25':
            return node.data.age < 25;
          case 'between25and50':
            return node.data.age >= 25 && node.data.age <= 50;
          case 'above50':
            return node.data.age > 50;
          case 'dateAfter2020':
            return asDate(node.data.ArchTime) > new Date(2020, 1, 1);
          default:
            return true;
        }
      };

      var dateFilterParams = {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var cellDate = asDate(cellValue);
          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
      };


      var filterParams = {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split('/');
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          );
          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true,
      };

   return (
       <div style={{height: '100%', width: 1000}}>
           
           <div className="test-header">
          <label>
            <input
              type="radio"
              name="filter"
              id="everyone"
              onChange={() => externalFilterChanged('everyone')}
            />
            Everyone
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="below25"
              onChange={() => externalFilterChanged('below25')}
            />
            Below 25
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="between25and50"
              onChange={() => externalFilterChanged('between25and50')}
            />
            Between 25 and 50
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="above50"
              onChange={() => externalFilterChanged('above50')}
            />
            Above 50
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              id="dateAfter2020"
              onChange={() => externalFilterChanged('dateAfter2020')}
            />
            After 01/01/2020
          </label>
        </div>
           <div
        id="myGrid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className="ag-theme-alpine"
      >
           <AgGridReact
                defaultColDef={{
                    flex: 1,
                    resizable: true,
                    minWidth: 100,
                    filter: true,
                  }}
                  animateRows={true}
                  components={{
                    loadingRenderer: function (params) {
                      if (params.value !== undefined) {
                        return params.value;
                      } else {
                        return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
                      }
                    },
                  }}
                  rowBuffer={0}
                  rowSelection={'multiple'}
                  rowModelType={'infinite'}
                  cacheBlockSize={20}
                  cacheOverflowSize={2}
                  maxConcurrentDatasourceRequests={1}
                  infiniteInitialRowCount={1000}
                  maxBlocksInCache={10}
                  isExternalFilterPresent={isExternalFilterPresent}
                  doesExternalFilterPass={doesExternalFilterPass}
                  onGridReady={onGridReady}
                  rowData={rowData}
                  >
               <AgGridColumn field="ArchMessageID" filter="agNumberColumnFilter" sortable={true} ></AgGridColumn>
               <AgGridColumn field="BTSInterchangeID" filter="agNumberColumnFilter" sortable={true} ></AgGridColumn>
               <AgGridColumn 
                    field="ArchTime"  
                    filter="agDateColumnFilter" 
                    filterParams={dateFilterParams} 
                    sortable={true} ></AgGridColumn>
               <AgGridColumn field="MRN" filter="agTextColumnFilter" sortable={true} ></AgGridColumn>
               <AgGridColumn field="MRN_SystemName" sortable={true} ></AgGridColumn>
               <AgGridColumn field="MessageControlID" sortable={true} ></AgGridColumn>
               <AgGridColumn field="MessageSourceSystem" sortable={true} ></AgGridColumn>
               <AgGridColumn field="MessageTriggerEvent" sortable={true} ></AgGridColumn>
               <AgGridColumn field="MessageType" sortable={true} ></AgGridColumn>
               <AgGridColumn field="MessageCreationTime" sortable={true} ></AgGridColumn>
               <AgGridColumn field="LastLoadingState" sortable={true} ></AgGridColumn>
               <AgGridColumn field="LastLoadingStateDate" sortable={true} ></AgGridColumn>
               <AgGridColumn field="ErrorID" sortable={true} ></AgGridColumn>
               <AgGridColumn field="BTSReceiveLocationName" sortable={true} ></AgGridColumn>
               <AgGridColumn field="DED" sortable={true} ></AgGridColumn>
           </AgGridReact>
       </div>
       </div>
  
   );
};


export default BrowseBeersPage;