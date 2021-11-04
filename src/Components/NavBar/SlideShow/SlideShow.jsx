import React from "react";
import {Slide} from "react-slideshow-image";

const slideImages = [
    {
      url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjxlsW9vf_zAhUGDd8KHZt0DRoQMygBegUIARCvAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog&ved=2ahUKEwjxlsW9vf_zAhUGDd8KHZt0DRoQMygBegUIARCvAQ',
      caption: 'Slide 1'
    },
    {
      url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjxlsW9vf_zAhUGDd8KHZt0DRoQMygBegUIARCvAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog&ved=2ahUKEwjxlsW9vf_zAhUGDd8KHZt0DRoQMygBegUIARCvAQ',
      caption: 'Slide 2'
    },
    {
      url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjxlsW9vf_zAhUGDd8KHZt0DRoQMygBegUIARCvAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog&ved=2ahUKEwjxlsW9vf_zAhUGDd8KHZt0DRoQMygBegUIARCvAQ',
      caption: 'Slide 3'
    },
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }
