import style from "./ProfileLinks.module.css"


function ProfileLinks() {

    return (
        <ul className={style.buttonsWrapper}>
            <li><a href="https://github.com/huascarguillermo">GitHub</a></li>
            <li><a href="#">FrontEnd Mentor</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    )
}

export default ProfileLinks
