import { useState } from 'react';
import type { Order } from '../types/order.types';
import itemImage1 from '../../../assets/images/item_1.png';

// TODO: API から取得。現時点ではモックデータ
const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    orderDate: '2025-03-15',
    totalAmount: 45000,
    status: '配送完了',
    items: [
      {
        itemId: 1,
        name: 'シンプルな木製チェア',
        price: 15000,
        quantity: 1,
        image: { url: itemImage1, alt: 'シンプルな木製チェア' },
        variation: { size: 'M', color: 'ナチュラル' },
      },
      {
        itemId: 2,
        name: 'コンパクトなサイドテーブル',
        price: 30000,
        quantity: 1,
        image: { url: itemImage1, alt: 'コンパクトなサイドテーブル' },
        variation: { size: 'S', color: 'ホワイト' },
      },
    ],
  },
  {
    id: 'ORD-002',
    orderDate: '2025-03-01',
    totalAmount: 32000,
    status: '配送完了',
    items: [
      {
        itemId: 3,
        name: '北欧風デスク',
        price: 32000,
        quantity: 1,
        image: { url: itemImage1, alt: '北欧風デスク' },
        variation: { size: 'M', color: 'ナチュラル' },
      },
    ],
  },
  {
    id: 'ORD-003',
    orderDate: '2025-02-20',
    totalAmount: 28000,
    status: '配送完了',
    items: [
      {
        itemId: 4,
        name: 'リビングチェア',
        price: 28000,
        quantity: 1,
        image: { url: itemImage1, alt: 'リビングチェア' },
        variation: { size: 'L', color: 'グレー' },
      },
    ],
  },
];

export function useOrders() {
  const [orders] = useState<Order[]>(MOCK_ORDERS);

  const getOrderById = (id: string) => orders.find((o) => o.id === id);

  // 月別の利用金額を集計（モックデータ用）
  const monthlySpending = orders.reduce<
    { month: string; amount: number }[]
  >((acc, order) => {
    const date = new Date(order.orderDate);
    const monthKey = `${date.getFullYear()}年${date.getMonth() + 1}月`;
    const existing = acc.find((m) => m.month === monthKey);
    if (existing) {
      existing.amount += order.totalAmount;
    } else {
      acc.push({ month: monthKey, amount: order.totalAmount });
    }
    return acc;
  }, []).sort((a, b) => {
    const parseMonth = (s: string) => {
      const match = s.match(/(\d+)年(\d+)月/);
      return match ? parseInt(match[1]) * 12 + parseInt(match[2]) : 0;
    };
    return parseMonth(b.month) - parseMonth(a.month);
  });

  return { orders, getOrderById, monthlySpending };
}
