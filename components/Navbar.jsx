export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <a className="logo" href="index.html"><i className="fa-solid fa-book"></i>My learning journal</a>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About me</a></li>
                </ul>
            </div>
        </nav>
    )
}