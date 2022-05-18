

export default function Footer(props) {
    return (
        <div className="footer">
            <button>
                Settings 
            </button>
            <Link to='/about'>About</Link>
            <button>
                Support 
            </button>
            <button>
                &copy;2022 
            </button>
        </div>
    )
}