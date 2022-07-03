import "./UserLandPage.css";

const UserLandPage = () => {
  return (
    <>
        <main id="ulp__mainContainer">
            <section className="ulp__header"></section>

            <section className="ulp__mainContent">
                <section className="ulp__leftSideBar">
                    <h3>Your Applications</h3>
                    <ul>
                        <li>App 1</li>
                        <li>App 2</li>
                        <li>App 3</li>
                        <li>App 4</li>
                    </ul>
                </section>

                <section className="ulp__center">
                    <h2>Available Animals!</h2>
                    <ul>
                        <li>A1</li>
                        <li>A1</li>
                        <li>A1</li>
                        <li>A1</li>
                        <li>A1</li>
                        <li>A1</li>
                        <li>A1</li>
                        <li>A1</li>
                    </ul>
                </section>

                <section className="ulp__rightSideBar">
                    <section className="ulp__form1">
                        <button></button>
                        <form>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <button type="button">Press me!</button>
                        </form>
                    </section>
                </section>
            </section>
        </main>
    </>
  )
}

export default UserLandPage