import { Cart as CartComponent } from '../components/Cart/Cart';
import { RecommendItemListForYou } from '../../items/components/RecommendItemListForYou/RecommendItemListForYou';

export default function Cart() {
  return (
    <div>
      <CartComponent />
      <RecommendItemListForYou />
    </div>
  );
}
