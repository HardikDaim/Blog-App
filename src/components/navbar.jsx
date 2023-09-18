import React from 'react'
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }
    return (
        <div className="container-fluid">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" role='img' fill="currentColor" class="bi bi-browser-firefox text-indigo-700 " viewBox="0 0 16 16">
                            <path d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a7.98 7.98 0 0 1 .503 3.897l-.009.077a8.533 8.533 0 0 1-.026.224A7.758 7.758 0 0 1 .006 8.257v-.04c.016-.363.055-.724.114-1.082.01-.074.075-.42.09-.489l.01-.051a6.551 6.551 0 0 1 1.041-2.35c.217-.31.46-.6.725-.87.233-.238.487-.456.758-.65a1.5 1.5 0 0 1 .26-.137c-.018.268-.04 1.553.268 1.943h.003a5.744 5.744 0 0 1 1.868-1.443 3.597 3.597 0 0 0 .021 1.896c.07.047.137.098.2.152.107.09.226.207.454.433l.068.066.009.009a1.933 1.933 0 0 0 .213.18c.383.287.943.563 1.306.741.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858-2.206 0-2.564 1.335-2.564 1.335.087.997.714 1.839 1.517 2.357a3.72 3.72 0 0 0 .439.241c.076.034.152.065.228.094.325.115.665.18 1.01.194 3.043.143 4.155-2.804 3.129-4.745v-.001a3.005 3.005 0 0 0-.731-.9 2.945 2.945 0 0 0-.571-.37l-.003-.002a2.679 2.679 0 0 1 1.87.454 3.915 3.915 0 0 0-3.396-1.983c-.078 0-.153.005-.23.01l-.042.003V4.31h-.002a3.882 3.882 0 0 0-.8.14 6.454 6.454 0 0 0-.333-.314 2.321 2.321 0 0 0-.2-.152 3.594 3.594 0 0 1-.088-.383 4.88 4.88 0 0 1 1.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005.003-.001.002-.002h.002l.002-.002a.028.028 0 0 1 .015 0 .02.02 0 0 1 .012.007 2.408 2.408 0 0 0 .206.48c.06.103.122.2.183.297.49.774 1.023 1.379 1.543 1.968.771.874 1.512 1.715 2.036 3.02l-.001-.013a8.06 8.06 0 0 0-.786-2.353Z" />
                        </svg>
                        <span class="fs-4 text-indigo-600 font-semibold">Simple header</span>
                    </Link>
                </div>

                {localStorage.getItem("authToken") ?
                    <div>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link  text-indigo-600 hover:text-indigo-500 font-semibold   px-2">Blogs</Link></li>
                            <li><Link to="/" className="nav-link  text-indigo-600 hover:text-indigo-500 font-semibold  px-2">Features</Link></li>
                            <li><Link to="/" className="nav-link  text-indigo-600 hover:text-indigo5400 font-semibold  px-2">Pricing</Link></li>
                            <li><Link to="/" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold  px-2">FAQs</Link></li>
                            <li><a href="https://hardikdaim.netlify.app" target='_blank' className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold  px-2">MyWebsite</a></li>
                        </ul>
                    </div> :
                    <div>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link  text-indigo-600 hover:text-indigo-500 font-semibold   px-2">Blogs</Link></li>
                            <li><Link to="/" className="nav-link  text-indigo-600 hover:text-indigo-500 font-semibold  px-2">Features</Link></li>
                            <li><Link to="/" className="nav-link  text-indigo-600 hover:text-indigo5400 font-semibold  px-2">Pricing</Link></li>
                            <li><Link to="/" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold  px-2">FAQs</Link></li>
                            <li><a href="https://hardikdaim.netlify.app" target='_blank' className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold  px-2">MyWebsite</a></li>
                        </ul>
                    </div>
                }


                <div className="col-md-3 text-end">
                    {!localStorage.getItem("authToken") ?
                        <div>
                            <Link to="/login" type="button" className="justify-center border-indigo-600 border-1 rounded-md  px-3 mx-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</Link>
                            <Link to="/signup" type="button" className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign-up</Link>
                        </div>
                        : <div>
                            <Link to="/create-blog" type="button" className="position-relative justify-center border-indigo-600 border-1 rounded-md  px-3 mx-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">+ New <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span></Link>
                            <Link to="/login" type="button" className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogout}>LogOut</Link>
                        </div>
                    }
                </div>
            </header>
        </div>
    );
}
