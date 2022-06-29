import React, {useEffect, useState} from "react";
import "./HomepageCarousel.css"


export const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel_item" style = {{width : width}}>
            {children}
        </div>
    );
};

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
        newIndex = 0;
    }

    setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 5000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
        });
    

    return (
        <section>
        
        <div className="carousel">
            <div 
                className="inner" 
                style={{transform: `translateX(-${activeIndex * 100}%)`}}
            >
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width: "100%"});
                    }
                    )}
            </div>
            <div className="indicators">
                <button
                    class ="leftButton previous round"
                    onClick={() => {
                        updateIndex(activeIndex -1);
                    }}
                    >
                        &#8249;
                    </button>

                    <button
                        className="rightButton next round"
                        onClick={() => {
                            updateIndex(activeIndex +1);
                        }}
                        >
                            &#8250;
                        </button>
                

            </div>
        </div>
        
        
        </section>
        );

};


export default Carousel;