import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../api";
import { ArrowLogo } from "../assets/ArrowLogo";
import { LoadingSpinner } from "../assets/LoadingSpinner";

export function LoginPage(props: {setLog: any, setUser: any}) {
    const[isFetching, setFetching] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {

        try {
            // Send login request
            setFetching(true)
            const response = await Api.post('/api/users/login', formData);
            
            if(response.data.data == '') {
                const newError = {
                    email: '',
                    password: ''
                }
                
                newError.email = !formData.email ? "Email is required" : response.data.message == "Email is not yet registered" ? "Email is not yet registered" : ""
                newError.password = !formData.password ? "Password is required" : response.data.message == "Password is incorrect" ? "Password is incorrect" : ""
                
                setFetching(false)
                setErrors(newError)
            } else {
                props.setLog(true); 
                props.setUser(response.data.data); 
     
                localStorage.setItem("authToken", response.data.data.token);
                // Redirect after successful login
                navigate('/');
            }
        } catch (error) {
            // Optionally show an error message to the user
            console.error(error);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleLogin()
    };

    return(
        <>
        <div className="container mx-auto w-[max(70vw)] py-4">
            {
                isFetching
                ?
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                    <LoadingSpinner />
                </div>
                :
                <></>
            }
            <Link to={"/"}>
                <div className="absolute top-5 left-3 px-3 py-2 bg-[#3A94FF] rounded-full font-extrabold text-xl">
                    <ArrowLogo />
                </div>
            </Link>
            <img className="p-4 pb-0" src="/gleam_wheels/assetsImg/LogoGleamWheels.jpg" alt="" />
            <div className="flex flex-col bg-[#3A94FF] rounded-xl px-4 text-white gap-4 pb-5 pt-3">
                <h2 className="font-bold text-center text-[max(5vw)]">Login to Account</h2>
                <div className="email w-full flex flex-col">
                    <h3 className="font-semibold text-[max(4vw)] mb-1">Email Address</h3>
                    <input name="email" onChange={handleChange} type="email" placeholder="Email Address" className=" bg-white border-none focus:outline-none text-[max(3.5vw)] text-black placeholder:text-slate-500 rounded-lg ps-2 py-1"/>
                    {errors.email && <p className="text-red-500 text-[max(3vw)]  font-medium bg-rose-200 rounded-md px-2 mt-1">{errors.email}</p>}
                </div>
                <div className="password w-full flex flex-col">
                    <h3 className="font-semibold text-[max(4vw)] mb-1">Password</h3>
                    <input name="password" onChange={handleChange} type="password" placeholder="Password" className="bg-white border-none focus:outline-none text-[max(3.5vw)] text-black placeholder:text-slate-500 rounded-lg ps-2 py-1"/>
                    {errors.password && <p className="text-red-500 text-[max(3vw)]  font-medium bg-rose-200 rounded-md px-2 mt-1">{errors.password}</p>}
                </div>
                <button onClick={handleSubmit} className="mt-2 p-2 rounded-xl bg-[#232D40]">Login</button>
            </div>
            <div className="register text-center my-4">
                <p>Need an account?<span> </span>
                    <Link to={"/register"}>
                        <span className="underline text-[#3A94FF] font-semibold">Register here!</span>
                    </Link>
                </p>
            </div>
        </div>
        </>
    )
}