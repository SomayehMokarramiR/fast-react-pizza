import { Link } from "react-router-dom"

function Button({children,disable,to,type,onClick}) {

    const base="bg-yellow-400 text-sm tracking-wide uppercase text-stone-800 font-semibold  inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    const styles={
        primary:base +' py-3 px-4 md:px-6 md:py-4',
        small:base +' py-2 px-4 md:px-5 md:py-2.5 text-xs',
        round:base +' py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
        secondary:" text-sm  tracking-wide uppercase text-stone-400 font-semibold  inline-block rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none  focus:text-stone-800 focus:bg-stone-300  focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed border border-ston-300 py-2.5 px-4 md:px-6 md:py-3.5"

    }
    if(to){
        return(
            <Link className={styles[type]} to={to}>{children}</Link>
        )
    }
    if(onClick)
        return (
            <button onClick={onClick} disabled={disable} className={styles[type]}>
                {children}
            </button>
        )
    return (
        <button disabled={disable} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
