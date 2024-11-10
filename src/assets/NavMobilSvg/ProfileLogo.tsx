const ProfileLogo = (props: {color:string, stroke:string}) => {
    return(
        <svg width="27" height="25" viewBox="0 0 27 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={props.color}>
        <path d="M1 21.125C1 19.6 1.65848 18.1375 2.83058 17.0591C4.00268 15.9808 5.5924 15.375 7.25 15.375H19.75C21.4076 15.375 22.9973 15.9808 24.1694 17.0591C25.3415 18.1375 26 19.6 26 21.125C26 21.8875 25.6708 22.6188 25.0847 23.1579C24.4987 23.6971 23.7038 24 22.875 24H4.125C3.2962 24 2.50134 23.6971 1.91529 23.1579C1.32924 22.6188 1 21.8875 1 21.125Z" fill="currentColor" stroke={props.stroke} strokeLinejoin="round"/>
        <path d="M13.5 9.625C16.0888 9.625 18.1875 7.69423 18.1875 5.3125C18.1875 2.93077 16.0888 1 13.5 1C10.9112 1 8.8125 2.93077 8.8125 5.3125C8.8125 7.69423 10.9112 9.625 13.5 9.625Z" fill="currentColor" stroke={props.stroke}/>
        </svg>
    )
}

export default ProfileLogo