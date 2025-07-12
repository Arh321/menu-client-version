import styles from "./infinite-scroll-text.module.css";
const InfiniteScrollText = ({ text }: { text: string }) => {
  return (
    <div className={styles.marque_container}>
      <div className={styles.marque}>
        <span className="text-light-text font-Yekan-Regular text-xs">
          {text}
        </span>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
