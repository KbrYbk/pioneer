import Image from "next/image";
import styles from "./page.module.css";
import Header from "/components/Header";
import prisma from "/lib/prisma";

// Делаем компонент асинхронным
const CategoryPage = async ({ params }) => {
  const id = params?.id;

  // Проверка на отсутствие ID
  if (!id) {
    return <div>Ошибка: ID категории не найдено!</div>;
  }

  try {
    // Получаем категорию и товары по ID
    const category = await prisma.category.findUnique({
      where: { id },
      include: { products: true }, // Включаем связанные товары
    });

    // Если категория не найдена
    if (!category) {
      return <div>Категория с ID {id} не найдена.</div>;
    }

    return (
      <div className="container">
        <Header />
        <main>
          <h1>{category.name}</h1>
          <div className={styles.productGrid}>
            {category.products.length === 0 ? (
              <p>Товары отсутствуют в этой категории.</p>
            ) : (
              category.products.map((product) => (
                <div key={product.id} className={styles.card}>
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                  <h3 className={styles.title}>{product.title}</h3>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Ошибка при загрузке категории:", error);
    return <div>Произошла ошибка при загрузке данных.</div>;
  }
};

export default CategoryPage;
