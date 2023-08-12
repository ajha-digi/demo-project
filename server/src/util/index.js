// Helper function to determine content type based on file extension
export function getFileContentType(fileExtension) {
  switch (fileExtension) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    // Add more cases for other image types as needed
    default:
      return null; // Unknown or unsupported file extension
  }
}
