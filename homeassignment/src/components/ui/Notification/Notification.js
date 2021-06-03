import classes from './Notification.module.css';

let specialClasses = '';

const getStypePerStatus = (status) => {
    if (status === 'error') {
      return classes.error;
    }
    if (status === 'success') {
      return classes.success;
    }
    if (status === 'loading') {
      return classes.loading;
    }
};

const cssClasses = `${classes.notification} ${specialClasses} ${classes.sticky}`;

const Notification = (props) => {

 specialClasses = getStypePerStatus(props.status);

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;