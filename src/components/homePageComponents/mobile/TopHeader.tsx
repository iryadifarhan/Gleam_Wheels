import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../dataUtils/IUser';

export function TopHeader(props:{isLogged: boolean, user: User, setLog:any, setUser:any}) {
    const [isModalVisible, setModalVisible] = useState(false)

    const showModal = () => {
        setModalVisible(!isModalVisible)
    }

    return (
        <div className="flex justify-center mx-5 py-3">
            <h2 className="flex-auto font-semibold text-stone-700 text-[max(4.2vw)] mt-1">{`Selamat datang${props.isLogged ? `, ${props.user.username}` : ""}`}</h2>
            <div className="relative">
                <img onClick={() => showModal()} className="object-contain w-10" src="./src/assets/Profile.png" alt="tes" />
                {isModalVisible && (
                    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-[200px] z-50 shadow-[0_1px_7px_0_rgba(0,0,0,0.7)]">
                        {
                            !props.isLogged
                            ?
                            <>
                                <h3 className="font-semibold text-[max(4.5vw)] text-center mb-1">Get started on <span className='text-[#3A94FF]'>Gleam</span> Wheels</h3>
                                <Link to={'/login'}>
                                    <button className='w-full bg-[#3A94FF] my-1 rounded-xl font-semibold text-[max(4.2vw)] text-white p-1'>Log in</button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className='w-full bg-[#232D40] my-1 rounded-xl font-semibold text-[max(4.2vw)] text-white p-1'>Sign up</button>
                                </Link>
                            </>
                            :
                            <>
                                <button onClick={() => {localStorage.removeItem('authToken'); props.setLog(false); props.setUser({})}}
                                 className='w-full bg-[#3A94FF] my-1 rounded-xl font-semibold text-[max(4.2vw)] text-white p-1'>Log out
                                </button>
                            </>
                        }
                    </div>
                )}
            </div>
            {/* <Link to={"/profile"}>
            </Link> */}
        </div>
    )
}