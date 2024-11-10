import { Link } from 'react-router-dom';

export function TopHeader() {
    return (
        <div className="flex justify-center p-3">
            <h2 className="flex-auto font-semibold text-stone-700 text-xl">Selamat datang, user</h2>
            <Link to={"/profile"}>
                <img className="object-contain w-10" src="/src/assets/Profile.png" alt="tes" />
            </Link>
        </div>
    )
}