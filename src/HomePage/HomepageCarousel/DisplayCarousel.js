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
              <td><a href="../adopt/1"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=328739"  alt="TinyTim" width="90%" justify-content="center"/></a></td>
              <td><a href="../adopt/2"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=325652"  alt="Simba" width="90%" justify-content="center"/></a></td>
              <td><a href="../adopt/3"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=328636"  alt="Flame" width="90%" justify-content="center"/></a></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
          <CarouselItem>
          <table>
          <tbody>
            <tr>
            <td><a href="../adopt/4"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=330388"  alt="Fly" width="90%" justify-content="center"/></a></td>
            <td><a href="../adopt/5"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=A231334"  alt="Pops" width="90%" justify-content="center"/></a></td>
            <td><a href="../adopt/6"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=330093"  alt="Mr Lover Lover" width="90%" justify-content="center"/></a></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
          <CarouselItem>
          <table>
            <tbody>
            <tr>
            <td><a href="../adopt/7"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=330095"  alt="Snowdrop" width="90%" justify-content="center"/></a></td>
            <td><a href="../adopt/8"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=326414"  alt="Dobby" width="90%" justify-content="center"/></a></td>
            <td><a href="../adopt/9"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=A223403"  alt="Sonny" width="90%" justify-content="center"/></a></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
          <CarouselItem>
          <table>
            <tbody>
            <tr>
            <td><a href="../adopt/10"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=322418"  alt="Biggles" width="90%" justify-content="center"/></a></td>
            <td><a href="../adopt/11"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=A224734_3"  alt="Spaghetti" width="90%" justify-content="center"/></a></td>
            <td><a href="../adopt/12"><img className="zoom_image" src="https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=A222427"  alt="Rascals" width="90%" justify-content="center"/></a></td>
            </tr>
            </tbody>
          </table>
          </CarouselItem>
      </HomepageCarousel>
      
      </>

    );

    }

export default DisplayCarousel;