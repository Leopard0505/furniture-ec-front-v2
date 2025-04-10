import { useCustomerReview } from '../../hooks/useCustomerReview';
import { Button } from '../Button/Button';
import styles from './CustomerReview.module.scss';
import type { Reviews } from './CustomerReview.types';

type CustomerReviewProps = {
  reviews: Reviews;
};

export function CustomerReview({ reviews }: CustomerReviewProps) {
  const { showReviews, hasNextReviews, handleShowMoreReviews } = useCustomerReview({ reviews: reviews.items });

  return (
    <div className={styles.reviews__container}>
      <p className={styles.reviews__average}>平均評価: {reviews.average} ({reviews.count}件)</p>
      <div className={styles.reviews}>
        {showReviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.review__user}>
              <img className={styles.review__avatar} src={review.user.avatar} alt={review.user.name} />
              <p className={styles.review__username}>{review.user.name}</p>
            </div>
            <p className={styles.review__rating}>評価: {review.rating}</p>
            <p className={styles.review__comment}>{review.comment}</p>
          </div>
        ))}
      </div>
      {hasNextReviews && (
        <div className={styles.reviews__button__container}>
          <Button className={styles.reviews__more__buttom} white onClick={handleShowMoreReviews}>もっとレビューを見る</Button>
        </div>
      )}
    </div>
  );
}
