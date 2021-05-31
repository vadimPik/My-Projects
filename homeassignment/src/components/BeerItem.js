import { useDispatch } from 'react-redux';
import { itemsActions } from '../store/items-slice';
import BeerCard from './ui/BeerCard';
import classes from './BeerItem.module.css';



const BeerItem = (props) => {
  const dispatch = useDispatch();

    
  const { title, price, description, id } = props.item;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    // dispatch(
    //     itemsActions.addItemToFavorites({
    //     id,
    //     title,
    //     price,
    //   })
    // );
  };


  return (
  
    <div>
      <BeerCard item={props.item} key={props.item.id} />
    </div>

  );
};

export default BeerItem;
