import sizeOf from "image-size";
import path from "path";
import * as fs from "fs";
import { Photos } from "@/components/photos";

// @ts-ignore
const imageSize = (imagePath: string, folder = "") => {
  try {
    const absolutePath = path.resolve(process.cwd(), "public", imagePath);
    const dimensions = sizeOf(absolutePath);

    return dimensions;
  } catch (error) {
    console.error("Error getting image dimensions:", error);
    return { width: 0, height: 0 };
  }
};

// @ts-ignore
const fetchPhotos = (folder = "") => {
  const publicFolder = path.join(process.cwd(), `public/${folder}`);
  const items = fs.readdirSync(publicFolder);

  // @ts-ignore
  const photoData = items.flatMap((item) => {
    const itemPath = path.join(publicFolder, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    if (isDirectory) {
      return fetchPhotos(path.join(folder, item));
    } else {
      const imageExtensions = [".jpg", ".jpeg", ".png"];
      const isImage = imageExtensions.includes(
        path.extname(item).toLowerCase()
      );

      if (isImage) {
        const dimensions = imageSize(itemPath);
        const width = dimensions.width || 300;
        const height = dimensions.height || 300;

        return {
          src: `${folder ? "/" + folder : ""}/${item}`,
          width,
          height,
          originalHeight: dimensions.height || 300,
          originalWidth: dimensions.width || 300,
        };
      } else {
        return []; // Ignore non-image files
      }
    }
  });

  return photoData;
};

export default function Home() {
  const photos = fetchPhotos("Zdravkec&Bubi");
  console.log(photos);
  return <Photos photos={photos} />;
}
