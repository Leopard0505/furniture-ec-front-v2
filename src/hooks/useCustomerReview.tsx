import { useEffect, useState } from "react";
import type { ReviewItem } from "../components/CustomerReview/CustomerReview.types";

const MAX_REVIEWS = 2;

// レビュー配列をN個ずつに分割する関数を定義
const chunkArray = (reviews: ReviewItem[], chunkSize: number): ReviewItem[][] => {
  return Array.from({ length: Math.ceil(reviews.length / chunkSize) }, (_, i) =>
    reviews.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}

export const useCustomerReview = ({ reviews }: { reviews: ReviewItem[] }) => {
  const [chunkedReviews,] = useState<ReviewItem[][]>(chunkArray(reviews, MAX_REVIEWS));
  const [showReviews, setShowReviews] = useState<ReviewItem[]>([]);
  const [showReviewsIndex, setShowReviewsIndex] = useState(0);
  const [hasNextReviews, setHasNextReviews] = useState(reviews.length > 0);

  useEffect(() => {
    // 初期表示のレビューを設定
    if (chunkedReviews.length === 0) {
      return;
    }
    setShowReviews(chunkedReviews[0]);
  }, [chunkedReviews]);

  useEffect(() => {
    // まだ追加できるかどうかの確認
    if (showReviewsIndex >= chunkedReviews.length - 1) {
      setHasNextReviews(false);
    }
  }, [showReviewsIndex, chunkedReviews]);

  const handleShowMoreReviews = () => {
    setShowReviewsIndex((prevShowReviewsIndex) => {
      const nextIndex = prevShowReviewsIndex + 1;
      if (nextIndex >= chunkedReviews.length) {
        // すべてのレビューを表示したため、何もしない
        return prevShowReviewsIndex;
      }

      setShowReviews((prevShowReviews) => {
        const moreReviews = chunkedReviews[nextIndex];
        const moreReviewIds = moreReviews.map((review) => review.id);
        const existingReviews = prevShowReviews.find((review) => moreReviewIds.includes(review.id));
        if (existingReviews) {
          // すでに表示されているレビューは追加しない
          return prevShowReviews;
        }
        prevShowReviews.push(...moreReviews);
        return prevShowReviews;
      });

      return nextIndex;
    });
  }

  return {
    showReviews,
    hasNextReviews,
    handleShowMoreReviews
  }
}
