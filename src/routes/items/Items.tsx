import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export default function Items() {

  return (
    <main>
      <div>条件検索</div>
      <div>
        <div>並び替え</div>
        <div>
          <SectionTitle text={'カテゴリ名'} />
          <div>商品一覧</div>
          <div>ページネーション</div>
        </div>
      </div>
    </main>
  )
}
