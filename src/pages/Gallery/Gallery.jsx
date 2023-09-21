import { Container, Grid, Image, Text } from "@nextui-org/react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageGallery = [
    {
      src: "/images/1.jpg",
      w960: "/images/1-960.jpg",
      w1440: "/images/1-1800.jpg",
    },
    {
      src: "/images/2.jpg",
      w960: "/images/2-960.jpg",
      w1440: "/images/2 -1800.jpg",
    },
    {
      src: "/images/3.jpg",
      w960: "/images/3-960.jpg",
      w1440: "/images/3 -1800.jpg",
    },
    {
      src: "/images/4.jpg",
      w960: "/images/4-960.jpg",
      w1440: "/images/4 -1800.jpg",
    },
    {
      src: "/images/5.jpg",
      w960: "/images/5-960.jpg",
      w1440: "/images/5 -1800.jpg",
    },
    {
      src: "/images/6.jpg",
      w960: "/images/6-960.jpg",
      w1440: "/images/6 -1800.jpg",
    },
    {
      src: "/images/7.jpg",
      w960: "/images/7-960.jpg",
      w1440: "/images/7 -1800.jpg",
    },
    {
      src: "/images/8.jpg",
      w960: "/images/8-960.jpg",
      w1440: "/images/8 -1800.jpg",
    },
    {
      src: "/images/9.jpg",
      w960: "/images/9-960.jpg",
      w1440: "/images/9 -1800.jpg",
    },
    {
      src: "/images/10.jpg",
      w960: "/images/10-960.jpg",
      w1440: "/images/10 -1800.jpg",
    },
    {
      src: "/images/11.jpg",
      w960: "/images/11-960.jpg",
      w1440: "/images/11 -1800.jpg",
    },
  ];

  return (
    <Container
      id="galeria"
      justify="center"
      alignItems="center"
      css={{ textAlign: "center", minHeight: "50vh" }}
    >
      <Text h2>Galeria</Text>
      <Grid.Container gap={2}>
        {imageGallery.map((image, id) => (
          <Grid xs={12} sm={3} md={3} key={image.src}>
            <Image
              src={image.src}
              showSkeleton
              objectFit="cover"
              width={300}
              srcSet={`${image.src} 360w,
              ${image.w960} 850w, 
              ${image.w1440} 1200w`}
              height={300}
              loading="lazy"
              onClick={() => (setIsOpen(true), setPhotoIndex(id))}
              css={{ borderRadius: "5px", cursor: "pointer" }}
            />
          </Grid>
        ))}
      </Grid.Container>

      {isOpen &&
        (console.log(imageGallery[1].w1440),
        (
          <Lightbox
            mainSrc={imageGallery[photoIndex].w1440}
            nextSrc={imageGallery[(photoIndex + 1) % imageGallery.length]}
            prevSrc={
              imageGallery[
                (photoIndex + imageGallery.length - 1) % imageGallery.length
              ]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + imageGallery.length - 1) % imageGallery.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % imageGallery.length)
            }
            clickOutsideToClose={true}
          />
        ))}
    </Container>
  );
};

export default Gallery;
