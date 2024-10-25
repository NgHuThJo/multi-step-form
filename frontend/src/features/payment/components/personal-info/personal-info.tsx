import styles from "./personal-info.module.css";

export function PersonalInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Personal info</h1>
        <p>Please provide your name, email, address, and phone number.</p>
        <form action="" method="post">
          <label htmlFor="name">
            <div>
              <span>Name</span>
              <span>This field is required</span>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
            />
          </label>
          <label htmlFor="email">
            <div>
              <span>Email Address</span>
              <span>This field is required</span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </label>
          <label htmlFor="phone number">
            <div>
              <span>Phone Number</span>
              <span>This field is required</span>
            </div>
            <input
              type="tel"
              name="phone number"
              id="phone number"
              placeholder="e.g. +1 234 567 890"
            />
          </label>
        </form>
      </div>
      <div className={styles.bottom}>
        <button>Next Step</button>
      </div>
    </div>
  );
}
