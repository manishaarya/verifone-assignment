export const downLoadFile = (blob: Blob, fileName: string) => {
  const a = document.createElement('a')
  const objectUrl = URL.createObjectURL(blob)
  a.href = objectUrl
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(objectUrl);
}
