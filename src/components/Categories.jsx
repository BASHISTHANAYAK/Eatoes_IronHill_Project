import styles from "../styles/Categories.module.css";

const Categories = () => {
    const items = [
        { id: 1, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/CategoriesImg1.jpg?raw=true", title: "Food Menu" },
        { id: 2, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/CategoriesImg2.jpg?raw=true", title: "Hard Drinks" },
        { id: 3, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/CategoriesImg3.jpg?raw=true", title: "Party Menu" },
        { id: 4, image: "https://github.com/BASHISTHANAYAK/Eatoes_IronHill_Project/blob/main/public/Images/CategoriesImg4.jpeg?raw=true", title: "Imported Liquor Menu" },
    ];

    return (
        <div className={styles.container}>
            {items.map((item) => (
                <div key={item.id} className={styles.card}>
                    <img src={item.image} alt={item.title} className={styles.image} />
                    <div className={styles.overlay}>
                        <p className={styles.title}>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
