import { Container, Grid, Image, Text } from "@nextui-org/react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageGallery = [
    "/images/front.jpg",
    "/images/sala.jpg",
    "/images/tyl_park.jpg",
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
          <Grid xs={12} sm={3} md={3} key={image}>
            <Image
              src={image}
              showSkeleton
              objectFit="cover"
              width={300}
              height={300}
              lazy={true}
              onClick={() => setIsOpen(true)}
              css={{ borderRadius: "5px", cursor: "pointer" }}
            />
          </Grid>
        ))}
      </Grid.Container>

      {isOpen && (
        <Lightbox
          mainSrc={imageGallery[photoIndex]}
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
          // clickOutsideToClose={true}
        />
      )}
    </Container>
  );
};

export default Gallery;
