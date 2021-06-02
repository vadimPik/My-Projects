import { useDispatch } from 'react-redux';
import { getSearchedBeerData } from '../../store/beer-actions';
import { useEffect } from 'react';
import { uiActions } from '../../store/ui-slice';



const SearchBeer = (props) => {
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(uiActions.changSearchState(false));
        
        dispatch(getSearchedBeerData(props.searchParam));
       }, [dispatch]);
     

    return (
        <div></div>
    );

};


export default SearchBeer;