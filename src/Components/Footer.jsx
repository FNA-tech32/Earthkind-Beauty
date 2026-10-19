import { Link, NavLink, useNavigate } from 'react-router-dom'


function Footer() {
    const navigate = useNavigate();
    // Simple function to navigate to section
    const goToSection = (sectionId) => {
        navigate('/')
        setTimeout(() => {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }
    return (
        <footer className='bg-obsidian border-t border-white/10'>
            <div className="py-10 px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col justify-center md:justify-between space-y-4 md:space-y-0 items-center mx-auto max-w-7xl">
                <div className="flex items-center">
                    <div className="logo ">
                        <Link to="/" className="flex flex-col leading-none" aria-label="Earthkind Beauty">
                            <span className="font-black uppercase tracking-[0.22em] text-white text-xl">Earthkind</span>
                            <span className="text-champagne text-[11px] tracking-[0.48em] uppercase mt-1">Beauty</span>
                        </Link>
                    </div>
                </div>
                <div className="navigation-links flex items-center gap-12 uppercase font-medium text-sm tracking-widest mt-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-champagne font-bold' : 'text-white hover:text-champagne transition-colors duration-500 ease-luxury'
                        }
                    >
                        Home
                    </NavLink>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            goToSection('services')
                        }}
                        className='text-white hover:text-champagne transition-colors duration-500 ease-luxury'
                    >
                        Services
                    </a>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'text-champagne font-bold' : 'text-white hover:text-champagne transition-colors duration-500 ease-luxury'
                        }
                    >
                        Contact
                    </NavLink>

                </div>
                {/* social */}
                <div className="social-icons flex items-center gap-6 mt-4 md:mt-3">
                    <a href="#" className="text-white hover:text-champagne transition-colors duration-500 ease-luxury">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white hover:text-champagne transition-colors duration-500 ease-luxury">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-champagne transition-colors duration-500 ease-luxury">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="bg-obsidian-card text-white py-10 border-t border-white/10">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Earthkind Beauty. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
