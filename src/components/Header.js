import PropTypes from 'prop-types';

const header = (/*{title, minTitle}*/) => {
  return <div className='headerTitle'>
            <div className='titleText'>
              <h1> Microsoft Corporation</h1>
              <h2>  Herzelia Israel  </h2>
            </div>
            <div className='img'><img src="micro.jpg"/></div>
          </div>;
};

/*Headers.defaultProps={
  title :' Microsoft Corporation', 
  minTitle: ' Herzelia Israel'
}*/

export default header;
