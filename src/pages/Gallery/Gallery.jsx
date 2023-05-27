import { Container, Grid, Image, Text } from "@nextui-org/react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageGallery = [
    {
      src: "/images/przod-420.webp",
      w960: "/images/przod-960.webp",
      w1440: "/images/przod-1440-1080.webp",
    },
    {
      src: "/images/bok-420.webp",
      w960: "/images/bok-960.webp",
      w1440: "/images/bok-1440-960.webp",
    },
    {
      src: "/images/tyl-420.webp",
      w960: "/images/tyl-960.webp",
      w1440: "/images/tyl-1333-640.webp",
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
        {imageGallery.map((image) => (
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
              onClick={() => setIsOpen(true)}
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
