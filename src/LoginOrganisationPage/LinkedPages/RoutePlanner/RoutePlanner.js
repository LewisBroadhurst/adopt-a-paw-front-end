import "./RoutePlanner.css";
import OrgHeader from "../../components/OrgHeader/OrgHeader";
import DirectionsComponent from "../../../DirectionsComponent/DirectionsComponent";
import { useEffect, useState } from "react";
import { getAllApplications } from "../../../API.js";

const RoutePlanner = () => {

    const [applications, setApplications] = useState([]);
    const [application, setApplication] = useState({});

    useEffect( () => {
        getAllApplications(setApplications)
    }, []);

  return (
    <>
        <OrgHeader />

        <header className="rp__header">
            <h2>Route Planner</h2>
            <div></div>
        </header>

        <main className="rp__main">
            <DirectionsComponent />

            <section className="applicationBar">
                <h3>Application Info.</h3>

                <form>
                    <select>
                        <option>Application ID</option>
                        {
                            applications?.map( (app, index) => {
                                return <option key={index}>{app.id}</option>
                            })
                        }
                    </select>
                    <button>Get Application Info.</button>
                </form>

                <section>
                    <h3>Application Ref. ID: {}</h3>
                    <span></span>
                </section>
            </section>
        </main>
    </>
  )
}

export default RoutePlanner