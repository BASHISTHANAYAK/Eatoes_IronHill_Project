import styles from '../styles/ContactCard.module.css';
// import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactCard = () => {
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <div className={styles.header}>
                <section><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8EUOCb7us_p_OH2_937RQxS03w5k72Z6Uw&s" alt="" /></section>
                <section>
                    <h1>Iron Hill Bengaluru</h1>
                    <p className={styles.address}>Bengaluru Brewery, Bengaluru Pub, Bar</p>
                    <button className={styles.editProfile}>Edit Profile</button>
                </section>
            </div>
            <button className={styles.editProfile2}>Edit Profile</button>


            {/* Navigation Buttons */}
            <div className={styles.navButtons}>
                <button>Menu</button>
                <button>Reserve Table</button>
                <button>Pay Bill Now</button>
            </div>

            {/* Contact Info Section */}
            <div className={styles.contactInfo}>
                <h3>Contact Info</h3>

                <div className={styles.infoItem}>
                    <strong>Address</strong>
                    <p>
                        Sy no 90, 7 & 90/8, Marathahalli - Sarjapur Outer Ring 560037{' '}
                        <br />
                        <a href="#" className={styles.textWithArrow}>Get direction →</a>

                    </p>
                </div>

                <div className={styles.infoItem}>
                    <strong>Call Us</strong>
                    <p>+91 9082546789</p>
                </div>

                <div className={styles.infoItem}>
                    <strong>Email Id</strong>
                    <p>eatoes121@gmail.com</p>
                </div>

                <div className={styles.infoItem}>
                    <strong>Timings</strong>
                    <p>
                        MON - SUN <span className={styles.timeSlot}>10:00AM - 12:00PM</span>
                        <br />
                        <a href="#" className={styles.textWithArrow}>See weekly timings →</a>

                    </p>
                </div>

            </div>

            {/* Follow Us Section */}
            <div className={styles.socialSection}>
                <h3 className={styles.FollowUs}>Follow Us</h3>
                <div className={styles.socialIcons}>
                    {/* <FaFacebook />
                    <FaInstagram /> */}
                    <img src="/Images/FacebookLogo.png" alt="FB" />
                    <img src="/public/Images/instagramLogo.png" alt="Insta" />
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <p className={styles.createdBy}> created using </p>
                <p className={styles.brand}>eatoes</p>
            </div>
        </div>
    );
};

export default ContactCard;
