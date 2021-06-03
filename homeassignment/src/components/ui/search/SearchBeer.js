import { useDispatch } from 'react-redux';
import { getSearchedBeerData } from '../../../store/beer-actions';
import { useEffect } from 'react';


const SearchBeer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchedBeerData(props.searchParam));
       }, [props.searchParam]);
     

    return (
        <div></div>
    );

};


export default SearchBeer;