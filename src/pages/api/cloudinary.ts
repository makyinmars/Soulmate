import type { NextApiRequest, NextApiResponse } from "next";

import cloudinary from "src/utils/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    // Get the image from body

    const image = "example.jpg";

    // Upload image to Cloudinary
    const uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "nextjs",
    });

    // Get the uploadResponse url
    const { secure_url } = uploadedResponse;

    // Send the url back to the client
    res.status(200).json({ url: secure_url });
  }
}
