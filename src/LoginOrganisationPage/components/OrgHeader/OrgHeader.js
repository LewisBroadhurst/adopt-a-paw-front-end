import "./OrgHeader.css";

const OrgHeader = () => {
  return (
    <>

        <header className="orgHeader__container">
            <h2>Adopt A Paw</h2>

            <nav>
                <ul>
                    <li>Animals</li>
                    <li>Applications</li>
                </ul>
            </nav>

            <span>Log Out</span>
        </header>
    </>
  )
}

export default OrgHeader