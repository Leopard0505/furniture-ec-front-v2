import { Button } from '../Button/Button';
import { CategoryLabel } from '../CategoryLabel/CategoryLabel';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './SearchConditionsForm.module.scss';
import { useReviewScore } from '../../hooks/useReviewScore';
import { useProductCondition } from '../../hooks/useProductCondition';
import { useStock } from '../../hooks/useStock';
import { useShipping } from '../../hooks/useShipping';
import { useQueryParams, QUERY_PARAM_REVIEW_SCORE, QUERY_PARAM_PRODUCT_CONDITION, QUERY_PARAM_STOCK, QUERY_PARAM_SHIPPING, UpdateMultipleSearchParams } from '../../hooks/useQueryParams';
import { QUERY_PARAM_PAGE } from '../../hooks/usePagenation';

export const SearchConditionsForm = () => {
  const { updateMultipleSearchParams } = useQueryParams();
  const { buttons: reviewButtons, handleButtonClick: handleReviewButtonClick, clear: clearReview } = useReviewScore();
  const { buttons: conditionButtons, handleButtonClick: handleConditionButtonClick, clear: clearCondition } = useProductCondition();
  const { buttons: stockButtons, handleButtonClick: handleStockButtonClick, clear: clearStock } = useStock();
  const { buttons: shippingButtons, handleButtonClick: handleShippingButtonClick, clear: clearShipping } = useShipping();

  const handleSearch = async () => {
    const updates: UpdateMultipleSearchParams[] = [];

    // レビュースコアの更新
    const pressedReviewButton = reviewButtons.find(button => button.pressed);
    updates.push({
      key: QUERY_PARAM_REVIEW_SCORE,
      value: pressedReviewButton ? pressedReviewButton.value : null,
    });

    // 商品状態の更新
    const pressedConditionButton = conditionButtons.find(button => button.pressed);
    updates.push({
      key: QUERY_PARAM_PRODUCT_CONDITION,
      value: pressedConditionButton ? pressedConditionButton.value : null,
    });

    // 在庫状況の更新
    const pressedStockButton = stockButtons.find(button => button.pressed);
    updates.push({
      key: QUERY_PARAM_STOCK,
      value: pressedStockButton ? pressedStockButton.value : null,
    });

    // 送料の更新
    const pressedShippingButton = shippingButtons.find(button => button.pressed);
    updates.push({
      key: QUERY_PARAM_SHIPPING,
      value: pressedShippingButton ? pressedShippingButton.value : null,
    });

    // 検索条件が変更されたのでページを1にリセット
    updates.push({
      key: QUERY_PARAM_PAGE,
      value: '1',
    });

    await updateMultipleSearchParams(updates);
  };

  const handleClear = () => {
    clearReview();
    clearCondition();
    clearStock();
    clearShipping();
  };

  return (
    <div className={styles.search_conditions_form}>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='商品価格' size='small' />
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='カテゴリ' size='small' />
        <div className={styles.search_conditions_form__item__category}>
          <CategoryLabel text='スマホ' />
          <CategoryLabel text='タブレット' />
          <CategoryLabel text='PC' />
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='レビュー' size='small' />
        <div className={styles.search_conditions_form__item__star}>
          {reviewButtons.map((button) => (
            <Button
              key={button.value}
              text={button.text}
              white
              pressed={button.pressed}
              onClick={() => handleReviewButtonClick(button.value)}
            />
          ))}
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='色' size='small' />
        <ColorPalette />
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='商品状態' size='small' />
        <div className={styles.search_conditions_form__item__status}>
          {conditionButtons.map((button) => (
            <Button
              key={button.value}
              text={button.text}
              white
              pressed={button.pressed}
              onClick={() => handleConditionButtonClick(button.value)}
            />
          ))}
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='在庫状況' size='small' />
        <div>
          {stockButtons.map((button) => (
            <Button
              key={button.value}
              text={button.text}
              white
              pressed={button.pressed}
              onClick={() => handleStockButtonClick(button.value)}
            />
          ))}
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='送料' size='small' />
        <div>
          {shippingButtons.map((button) => (
            <Button
              key={button.value}
              text={button.text}
              white
              pressed={button.pressed}
              onClick={() => handleShippingButtonClick(button.value)}
            />
          ))}
        </div>
      </div>
      <div className={styles.search_conditions_form__button}>
        <Button text='この条件で検索する' onClick={handleSearch} />
        <Button text='クリア' white onClick={handleClear} />
      </div>
    </div>
  );
};
