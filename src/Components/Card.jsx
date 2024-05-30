import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Card() {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg"
        className="card-img"
        alt="shoe"
      />
      <div className="card-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star " />{' '}
          <AiFillStar className="rating-star " />{' '}
          <AiFillStar className="rating-star " />{' '}
          <AiFillStar className="rating-star " />
          <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>300</del>$200
          </div>

          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
