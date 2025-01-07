import Link from 'next/link';
import styles from './ProductCard.module.css';
import Image from 'next/image';

const ProductCard = ({ image, title, link }) => {
  const imageUrl = image || null;
  
  return (
    <div className={styles.card}>
       <Image 
        src={image} 
        alt={title} 
        width={300} 
        height={200} 
        className={styles.image} 
      />
      <div>
        <h3 className={styles.title}>{title}</h3>
        {<Link href={link} className={styles.link}>Подробнее &gt;</Link>}
      </div>
    </div>
  );
};

export default ProductCard;
