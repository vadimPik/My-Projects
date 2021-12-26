// import Beers from '../../components/beers/Beers'
// import { Fragment, useEffect, useRef } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { InputGroup, FormControl, Form, Row, Col, Button } from 'react-bootstrap';
// import SearchBeer from '../../components/ui/search/SearchBeer'
// import { uiActions } from '../../store/ui-slice';
// import ModalWindow from '../../components/ui/modalWindow/ModalWindow'
// import classes from './BrowseBeersPage.module.css';



// let searchParam;
// const modalTitle = "Input empty";
// const modalBody = "Please Enter food for start searching beer";

// const BrowseBeersPage = (props) => {
//      const dispatch = useDispatch();

//      const searchValue = useSelector((state) => state.ui.searchValue);
//      const isSearchEmptyModalVisible = useSelector((state) => state.ui.isSearchEmptyModalVisible);
    
//     const history = useHistory();
//     const location = useLocation();
//     const beerSearchInputRef = useRef();

//     useEffect(() => {
//         searchParam = new URLSearchParams(location.search).get('search');
        
//         if (searchParam && searchParam !== '' ){
//             if (searchParam !== searchValue) {
//                 dispatch(uiActions.changSearchValue(searchParam));
//             }
//         }else {
//             dispatch(uiActions.changSearchValue(''));
//         }

//         //eslint-disable-next-line
//     }, []);

//     const cancelModalHandler = () => {
//         dispatch(uiActions.changeSearchEmptyWindowVisble(false));
//     };

//     const hideHandler = () => {
//         dispatch(uiActions.changeSearchEmptyWindowVisble(false));
//     };

//     const searchClickHandle = () => {
//         searchParam = beerSearchInputRef.current.value;
//         history.push('/browse?search=' + searchParam);

//         if (searchParam && searchParam !== '' ) {
//             if (searchParam !== searchValue ) {
//                 dispatch(uiActions.changSearchValue(searchParam));
//             }
//         } else {
//             dispatch(uiActions.changeSearchEmptyWindowVisble(true));
//             dispatch(uiActions.changSearchValue(''));
//         }
//     };

//     return (
//         <Fragment>
//             <div className={classes.browseCards}>
//                 <Form className="mt-sm-4 pl-sm-5">
//                     <Row className="align-items-center ">
//                         <Col xs="auto">
//                             <Form.Control
//                                 className="mb-2"
//                                 id="inlineFormInput"
//                                 placeholder="Food Pairing"
//                                 ref = { beerSearchInputRef }
//                             />
//                         </Col>
//                         <Col xs="auto">
//                             <Button variant="outline-dark" size="nm" className="mb-2" onClick={ searchClickHandle } >
//                                 Submit
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Form>

//                 <ModalWindow  isShow={ isSearchEmptyModalVisible } title={ modalTitle } body= { modalBody } onCancel={ cancelModalHandler } 
//                     onHide= { hideHandler}  isShowConfimButton= {false}/>   

//                 { searchValue !== '' && <SearchBeer searchParam={ searchParam } location={ location }/>}

//                 <Beers />
//             </div>
//       </Fragment>
//     );
// }


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

    const [rowData, setRowData] = useState(null);

    /* const onGridReady = (params) => {
            
        const updateData = (data) => params.api.setRowData(data);
    
        fetch('messages_grid.json')
          .then((resp) => resp.json())
          .then((data) => updateData(data));
      }; */

      const onGridReady = (params) => {
        //setGridApi(params.api);
        //setGridColumnApi(params.columnApi);
    
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
        };
    
        fetch('messages_grid.json')
          .then((resp) => resp.json())
          .then((data) => updateData(data));
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
       <div className="ag-theme-alpine" style={{height: 1200, width: 1000}}>
           <AgGridReact
                defaultColDef={{
                    flex: 1,
                    resizable: true,
                    minWidth: 100,
                  }}
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
                  onGridReady={onGridReady}>
               <AgGridColumn field="ArchMessageID" filter="agNumberColumnFilter"></AgGridColumn>
               <AgGridColumn field="BTSInterchangeID" filter="agNumberColumnFilter"></AgGridColumn>
               <AgGridColumn field="ArchTime"  filter="agDateColumnFilter"></AgGridColumn>
               <AgGridColumn field="MRN" filter="agTextColumnFilter"></AgGridColumn>
               <AgGridColumn field="MRN_SystemName"></AgGridColumn>
               <AgGridColumn field="MessageControlID"></AgGridColumn>
               <AgGridColumn field="MessageSourceSystem"></AgGridColumn>
               <AgGridColumn field="MessageTriggerEvent"></AgGridColumn>
               <AgGridColumn field="MessageType"></AgGridColumn>
               <AgGridColumn field="MessageCreationTime"></AgGridColumn>
               <AgGridColumn field="LastLoadingState"></AgGridColumn>
               <AgGridColumn field="LastLoadingStateDate"></AgGridColumn>
               <AgGridColumn field="ErrorID"></AgGridColumn>
               <AgGridColumn field="BTSReceiveLocationName"></AgGridColumn>
               <AgGridColumn field="DED"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};


export default BrowseBeersPage;