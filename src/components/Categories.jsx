import styles from "../styles/Categories.module.css";

const Categories = () => {
    const items = [
        { id: 1, image: "/Images/CategoriesImg1.jpg", title: "Food Menu" },
        { id: 2, image: "/Images/CategoriesImg2.jpg", title: "Hard Drinks" },
        { id: 3, image: "/Images/CategoriesImg3.jpg", title: "Party Menu" },
        { id: 4, image: "/Images/CategoriesImg4.jpeg", title: "Imported Liquor Menu" },
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
