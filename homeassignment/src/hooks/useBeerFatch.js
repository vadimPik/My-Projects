import { useEffect } from 'react'
import axios from 'axios';
import { uiActions } from '../store/ui-slice';
import { paginationActions } from '../store/pagination-slice';
import { itemsActions } from '../store/items-slice';
import { useDispatch } from 'react-redux';


export default function useBeerFatch(pageNumber) {

   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            uiActions.showNotification({
            status: 'loading',
            title: 'loading data',
            message: 'Fetching beer data Loading',
          })
        );
        dispatch(paginationActions.setLoading(true));

        let cancel;

        axios({
            method: 'GET',
            url: 'https://api.punkapi.com/v2/beers',
            params: { page: pageNumber, per_page: 12},
            // cancelToken: new CancelToken(function executor(c) {
            //     // An executor function receives a cancel function as a parameter
            //     cancel = c;
            //   })
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
        
            res.data.map(item => {
                item.isFavorite = false;
                item.Rank = '';
                item.isDetailsModalVisible = false;
                item.isHover = false;
              });

            dispatch(
                itemsActions.addItems({
                items: res.data || [],
            })
            );

            dispatch(
                uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Beer data Loaded Successfuly!',
              })
            );
            dispatch(paginationActions.setHasMore(res.data.length > 0));

            dispatch(paginationActions.setLoading(false));
        }).catch(e => {
            if (axios.isCancel(e)) return;

            dispatch(
                uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching beer data failed! Error:' + e,
              })
            );
        })
        return () => cancel()
    }, [pageNumber])

    return (
        <div>
            
        </div>
    )
}

