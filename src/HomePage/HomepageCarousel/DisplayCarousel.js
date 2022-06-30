import HomepageCarousel, {CarouselItem} from "./HomepageCarousel"
import "./HomepageCarousel.css"

const DisplayCarousel = () => {
    return (
      <>
        <HomepageCarousel>
        <CarouselItem>
          <table>
          <tbody>
            <tr>
              <td><img className="zoom_image" src={require("./images/Daisy.jpeg")}  alt="Daisy" width="90%" justify-content="center"/></td>
              <td><img className="zoom_image" src={require("./images/Kallie.jpeg")}  alt="Kallie" width="90%" justify-content="center"/></td>
              <td><img className="zoom_image" src={require("./images/Xander.jpeg")}  alt="Xander" width="90%" justify-content="center"/></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
          <CarouselItem>
          <table>
          <tbody>
            <tr>
              <td><img className="zoom_image" src={require("./images/Elody.jpeg")}  alt="Elody" width="90%"/></td>
              <td><img className="zoom_image" src={require("./images/Kenan.jpeg")}  alt="Kenan" width="90%"/></td>
              <td><img className="zoom_image" src={require("./images/Graham.jpeg")}  alt="Graham" width="90%"/></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
          <CarouselItem>
          <table>
            <tbody>
            <tr>
              <td><img className="zoom_image" src={require("./images/Kel.jpeg")}  alt="Kel" width="90%"/></td>
              <td><img className="zoom_image" src={require("./images/Lola.jpeg")}  alt="Lola" width="90%"/></td>
              <td><img className="zoom_image" src={require("./images/Max.jpeg")}  alt="Max" width="90%"/></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
          <CarouselItem>
          <table>
            <tbody>
            <tr>
              <td><img className="zoom_image" src={require("./images/Penny.jpeg")}  alt="Penny" width="90%"/></td>
              <td><img className="zoom_image" src={require("./images/Simon.jpeg")}  alt="Simon" width="90%"/></td>
              <td><img className="zoom_image" src={require("./images/Tango.jpeg")}  alt="Tango" width="90%"/></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
      </HomepageCarousel>
      
      </>

    );

    }

export default DisplayCarousel;