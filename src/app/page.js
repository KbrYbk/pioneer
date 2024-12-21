import Image from "next/image";
import styles from "./page.module.css";
import Header from "/components/Header";
import ProductCard from '/components/ProductCard';
import prisma from '/lib/prisma';

export default async function Home() {
  const cardList = await prisma.Card.findMany();
  return (
    <div className="container">
      <Header />
      <main>
        <div>
          <h1>Российский завод силовых машин</h1>
          <p>научно-производственное предприятие, занимающееся разработкой и производством силовых машин.</p>
          <Image src="/hero-image.png" alt="фото завода" width={1180} height={440} layout="responsive" />
        </div>
        <h1>О предприятии</h1>
        <div className={styles.gridContainer}>
          <div className={styles.col}>
            <p>
              За 20 лет развития в структуре завода сформирован мощный производственный потенциал, научно-технический центр, испытательная лаборатория, современная база, учебный центр и широкая сеть региональных и международных представительств в Российской Федерации, Республике Беларусь, Узбекистане и Казахстане.
            </p>
            <p>
              Ежегодно НПП «ПИОНЕР» реализует несколько проектов по модернизации серийных и разработке новых приборов, призванные в наибольшей степени удовлетворять возрастающие требования наших заказчиков.
            </p>
          </div>
          <div className={styles.col}>
            <p>
              В номенклатуре выпускаемой НПП «ПИОНЕР» продукции найдется все, что необходимо для успешного решения задачи автоматизации технологических процессов на любом предприятии. Все средства измерения производства «ПИОНЕР» внесены в Государственный реестр СИ и имеют необходимые разрешительные документы.
            </p>
          </div>
          <Image src="/aurelien-romain-DB_q6rPFnBM-unsplash 1.jpg" alt="фото завода" width={1180} height={440} layout="responsive" />
          <Image src="/carlos-aranda-QMjCzOGeglA-unsplash 1.jpg" alt="фото завода" width={1180} height={440} layout="responsive" />
        </div>
        <h1>Продукция</h1>
        <div>
          <div className={styles.productGrid}>
            {
              cardList.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    image={item.img}
                    link="/product/"
                  />
                );
              })
            }

            {/* <ProductCard
              image="/product1.png"
              title="Сигнализатор уровня"
              link="/product/1"
            />
            <ProductCard
              image="/product2.png"
              title="Датчики давления"
              link="/product/2"
            />
            <ProductCard
              image="/product3.png"
              title="ПИД-регуляторы"
              link="/product/3"
            />
            <ProductCard
              image="/product4.png"
              title="Калибратор давления"
              link="/product/4"
            />
            <ProductCard
              image="/product5.png"
              title="Корректор расхода газа"
              link="/product/5"
            />
            <ProductCard
              image="/product6.png"
              title="Манометры"
              link="/product/6"
            /> */}
          </div>
        </div>
        <h1>Представительства</h1>
        <Image src="/map.png" alt="Карта" width={1180} height={715} layout="responsive" />

      </main>
    </div>
  );
}
