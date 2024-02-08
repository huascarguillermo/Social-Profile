import style from "./UserProfile.module.css"


function UserProfile() {
    return (
        <header className={style.headerWrapper}>
            <div className={style.profileImage}>
                <img src="/public/images/2x2.jpeg" alt="" />
            </div>
            <div className={style.profileInfo}>
                <h1 className={style.profileName}>Huascar Guillermo</h1>
                <span className={style.profileCity}>South Lake Tahoe, California</span>
            </div>
            <p className={style.profileBio}>"Front-end student and 2K player"</p>
        </header>
    )
}

export default UserProfile
