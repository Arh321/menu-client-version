const Base64Image = ({ src }: { src: string }) => {
  // Validate that input is a base64 string
  if (!src.startsWith("data:image")) {
    console.warn("Invalid base64 image string provided");
    return null;
  }

  return (
    <img
      src={src}
      alt="base64 image"
      width={500}
      height={300}
      style={{
        objectFit: "contain",
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default Base64Image;
