import { Link } from "react-router-dom";
import AlamatFavoritLogo from "../../../assets/AlamatFavoritLogo";
import CustomerServiceLogo from "../../../assets/CustomerServiceLogo";
import InfoLogo from "../../../assets/InfoLogo";
import KebijakanLogo from "../../../assets/KebijakanLogo";
import LanguageLogo from "../../../assets/LanguageLogo";
import LogoutLogo from "../../../assets/LogoutLogo";
import NotifikasiLogo from "../../../assets/NotifikasiLogo";
import SecurityAccountLogo from "../../../assets/SecurityAccountLogo";
import { SettingLogo } from "../../../assets/SettingLogo";
import { User } from "../../../dataUtils/IUser";
import { useEffect, useState } from "react";
import SaveLogo from "../../../assets/SaveLogo";
import Api from "../../../api";

export function MobileBody(props: {user:User, setLog:any, setUser:any, setUserNameChanged:any}) {
    const [isSetting, setSetting] = useState(false)
    const [username, setUsername] = useState(props.user.username)

    useEffect(() => {
        // Synchronize the username state with the updated prop
        setUsername(props.user.username);
    }, [props.user.username]);

    const changeName = async (formData: any) => {
        try {
            props.setUserNameChanged(true)
            await Api.post('/api/user/update', formData)
        } catch (error) {
            console.error(error)
        } finally {
            props.setUserNameChanged(false)
        }
    }

    const handleClick = () => {
        setSetting(!isSetting)
        
        if(username != props.user.username) {
            changeName({
                _method: "PATCH",
                user_id: props.user.id,
                username: username
            })
        }
    }

    return(
        <div className="profileBody pb-4">
            <div className="flex items-center gap-5 px-6 w-full justify-between shadow-xl pb-6">
                <img className="rounded-full h-[max(15vw)]" src="/gleam_wheels/assetsImg/defaultProfile.jpg" alt="" />
                <div className="flex flex-col w-[max(50vw)]">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} disabled={isSetting ? false : true} className={`font-bold text-[max(6vw)] focus:outline-none`}></input>
                    {isSetting ? <div className="w-full h-[2px] bg-black mb-2"></div> : <></>}
                    <p className="text-[max(4vw)]">{props.user.email}</p>
                </div>
                <div className={`wrappersLogo`}>
                    <div className={`settingLogo ${isSetting ? "invisible size-0" : ""}`} onClick={handleClick}>
                        <SettingLogo />
                    </div>
                    <div className={`saveLogo ${isSetting ? "" : "invisible size-0"}`} onClick={handleClick}>
                        <SaveLogo />
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-[#232D40] font-semibold text-[max(5.5vw)] ps-5 mt-6 gap-3 mb-20">
                <h2 className="mb-3">Akun</h2>
                <div className="flex items-center gap-2">
                    <AlamatFavoritLogo />
                    <h2>Alamat favorit</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black px-2">
                </div>
                <div className="flex items-center gap-2">
                    <SecurityAccountLogo />
                    <h2>Keamanan akun</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black"></div>
                <div className="flex items-center gap-2">
                    <LanguageLogo />
                    <h2>Pilih bahasa</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black"></div>
                <div className="flex items-center gap-2">
                    <NotifikasiLogo />
                    <h2>Notifikasi</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black"></div>
                <div className="flex items-center gap-2">
                    <CustomerServiceLogo />
                    <h2>Pusat bantuan</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black"></div>
                <Link to={"/"}>
                    <div className="flex items-center gap-2" onClick={() => {localStorage.removeItem('authToken'); props.setLog(false); props.setUser({})}}>
                        <LogoutLogo />
                        <h2 className="text-[#EA001F]">Log out</h2>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col text-[#232D40] font-semibold text-[max(5.5vw)] ps-5 mt-6 gap-3">
                <h2 className="mb-3">Info lainnya</h2>
                <div className="flex items-center gap-2">
                    <SecurityAccountLogo />
                    <h2>Kebijakan privasi</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black px-2">
                </div>
                <div className="flex items-center gap-2">
                    <KebijakanLogo />
                    <h2>Ketentuan layanan</h2>
                </div>
                <div className="w-[max(42vw)] h-[0.5px] ms-3 bg-black"></div>
                <div className="flex items-center gap-2">
                    <InfoLogo />
                    <div className="flex flex-col">
                        <h2>Versi</h2>
                        <p className="text-[max(4vw)]">1.0 Alpha</p>
                    </div>
                </div>
            </div>
        </div>
    )
}