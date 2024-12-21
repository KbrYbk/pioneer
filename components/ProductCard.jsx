import Link from 'next/link';
import styles from './ProductCard.module.css';
import Image from 'next/image';

const ProductCard = ({ image, title, link }) => {
  console.log('Image in ProductCard:', image); // Проверяем путь
  return (
    <div className={styles.card}>
       <Image 
        src={image} 
        alt={title} 
        width={300} // Укажите подходящую ширину
        height={200} // Укажите подходящую высоту
        className={styles.image} 
      />
      <div>
        <h3 className={styles.title}>{title}</h3>
        {/* <Link href={link} className={styles.link}>Подробнее &gt;</Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
