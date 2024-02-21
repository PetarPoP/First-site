"use client";
import { useState } from "react";

import PhotoAlbum, { Photo } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export function Photos({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="p-3 appear album">
        <PhotoAlbum
          renderPhoto={NextJsImage}
          spacing={10}
          photos={photos.map((p) => {
            return {
              ...p,
              height: p.height / 4,
              width: p.width / 4,
            };
          })}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 1400) return 2;
            return 4;
          }}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div
      style={{
        ...wrapperStyle,
        position: "relative",
      }}
    >
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, className, onClick }}
        sizes={sizes}
        className={`${className} object-cover`}
      />
    </div>
  );
}
