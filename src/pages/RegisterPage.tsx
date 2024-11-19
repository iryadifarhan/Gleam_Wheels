import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../api";
import { ArrowLogo } from "../assets/ArrowLogo";
import { LoadingSpinner } from "../assets/LoadingSpinner";

export function RegisterPage(props: {setLog:any, setUser:any}) {
    const[isFetching, setFetching] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        };

        if (!formData.username) {
            newErrors.username = "Username is required.";
        } else if (formData.username.length < 3) {
            newErrors.username = "Username must be at least 3 characters long.";
        }

        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Email format is invalid.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }

        if (!formData.passwordConfirmation) {
            newErrors.passwordConfirmation = "Password confirmation is required.";
        } else if (formData.password !== formData.passwordConfirmation) {
            newErrors.passwordConfirmation = "Passwords do not match.";
        }

        const flag = newErrors.email == '' && newErrors.password == '' && newErrors.passwordConfirmation == '' && newErrors.username == ''

        setErrors(newErrors);
        return flag; // Return true if no errors
    };

    const storeAccount = async () => {
        try {
            setFetching(true)
            const response = await Api.post('/api/users', formData)
            console.log(response)
            
            if(response.data.data != '') {
                props.setLog(true); 
                props.setUser(response.data.data); 

                localStorage.setItem("authToken", response.data.data.token);
                navigate('/')
            }
            
        } catch (error: any) {
            const errorText: string = error.response.data.message
            if(errorText.includes("Integrity"))
            setErrors({username: "", email: "Email already exist", password: "", passwordConfirmation: ""})
            setFetching(false)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted:", formData);
            // You can send the formData to your backend API here
            storeAccount()
        }
    };

    return (
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
            <form
                className="flex flex-col bg-[#3A94FF] rounded-xl px-4 text-white gap-4 pb-5 pt-3"
                onSubmit={handleSubmit}
            >
                <h2 className="font-bold text-center text-[max(5vw)]">Register New Account</h2>
                <div className="username w-full flex flex-col">
                    <h3 className="font-semibold text-[max(4vw)] mb-1">Username</h3>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="bg-white border-none focus:outline-none text-[max(3.5vw)] text-black placeholder:text-slate-500 rounded-lg ps-2 py-1"
                    />
                    {errors.username && <p className="text-red-500 text-[max(3vw)]  font-medium bg-rose-200 rounded-md px-2 mt-1">{errors.username}</p>}
                </div>
                <div className="email w-full flex flex-col">
                    <h3 className="font-semibold text-[max(4vw)] mb-1">Email Address</h3>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white border-none focus:outline-none text-[max(3.5vw)] text-black placeholder:text-slate-500 rounded-lg ps-2 py-1"
                    />
                    {errors.email && <p className="text-red-500 text-[max(3vw)]  font-medium bg-rose-200 rounded-md px-2 mt-1">{errors.email}</p>}
                </div>
                <div className="password w-full flex flex-col">
                    <h3 className="font-semibold text-[max(4vw)] mb-1">Password</h3>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-white border-none focus:outline-none text-[max(3.5vw)] text-black placeholder:text-slate-500 rounded-lg ps-2 py-1"
                    />
                    {errors.password && <p className="text-red-500 text-[max(3vw)]  font-medium bg-rose-200 rounded-md px-2 mt-1">{errors.password}</p>}
                </div>
                <div className="passwordConf w-full flex flex-col">
                    <h3 className="font-semibold text-[max(4vw)] mb-1">Password Confirmation</h3>
                    <input
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Password Confirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                        className="bg-white border-none focus:outline-none text-[max(3.5vw)] text-black placeholder:text-slate-500 rounded-lg ps-2 py-1"
                    />
                    {errors.passwordConfirmation && (
                        <p className="text-red-500 text-[max(3vw)] font-medium bg-rose-200 rounded-md px-2 mt-1">{errors.passwordConfirmation}</p>
                    )}
                </div>
                <button className="mt-2 p-2 rounded-xl bg-[#232D40]">Register</button>
            </form>
            <div className="register text-center my-4">
                <p>
                    Have an account?
                    <span> </span>
                    <Link to={"/login"}>
                        <span className="underline text-[#3A94FF] font-semibold">Login here!</span>
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
}
