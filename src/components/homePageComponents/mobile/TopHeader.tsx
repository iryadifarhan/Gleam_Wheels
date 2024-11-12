import { Link } from 'react-router-dom';

export function TopHeader() {
    return (
        <div className="flex justify-center mx-5 py-3">
            <h2 className="flex-auto font-semibold text-stone-700 text-xl">Selamat datang, User</h2>
            <Link to={"/profile"}>
                <img className="object-contain w-10" src="./src/assets/Profile.png" alt="tes" />
            </Link>
        </div>
    )
}