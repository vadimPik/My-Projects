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

    dispatch(
        itemsActions.addItemToFavorites({
        id,
        title,
        price,
      })
    );
  };


  return (
    // <li className={classes.item}>
    <div>
      <BeerCard item={props.item} key={props.item.id}>
        {/* <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div> */}
        
        {/* <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>  */}
      </BeerCard>
      </div>
    // </li>
  );
};

export default BeerItem;
