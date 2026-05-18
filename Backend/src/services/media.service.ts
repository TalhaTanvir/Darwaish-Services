import cloudinary, { configureCloudinary } from "../config/cloudinary";

type UploadImageInput = {
  buffer: Buffer;
  mimetype: string;
  folder?: string;
};

export const uploadImageToCloudinary = async ({
  buffer,
  mimetype,
  folder = "darwaish-services",
}: UploadImageInput) => {
  configureCloudinary();

  const dataUri = `data:${mimetype};base64,${buffer.toString("base64")}`;
  try {
    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder,
      resource_type: "image",
    });

    return {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      width: uploadResult.width,
      height: uploadResult.height,
      format: uploadResult.format,
    };
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
};
