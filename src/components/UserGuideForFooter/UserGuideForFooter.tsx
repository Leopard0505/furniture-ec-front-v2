
import { userGuide } from "../../constants/guide";
import { LinkList } from "../LinkList/LinkList";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./UserGuideForFooter.module.scss";

export const UserGuideForFooter = () => {
  return (
    <section className={styles.guide__links}>
      <SectionTitle text="ご利用ガイド" secondary />
      <div className={styles.guide__links__content}>
        {userGuide.map(({ id, title, list }) => (
          <div key={id} className={styles.guide__links__item}>
            <SectionTitle text={title} size="small" secondary />
            <LinkList items={list} secondary />
          </div>
        ))}
      </div>
    </section>
  );
};
