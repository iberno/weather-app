// src/hooks/useBackgroundImage.js
import { useEffect, useState } from "react";
import { buildImageQuery } from "../utils/imageQueryBuilder.js";
import { fetchBackgroundImage } from "../services/unsplashServices.js";

export function useBackgroundImage(city, condition, hour) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function updateImage() {
      if (!city || !condition || hour === null) return;

      const query = buildImageQuery({ city, condition, hour });
      const image = await fetchBackgroundImage(query);
      setImageUrl(image);
    }

    updateImage();
  }, [city, condition, hour]);

  return imageUrl;
}
