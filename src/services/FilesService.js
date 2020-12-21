class FilesService {
  static async getBase64(file) {
    let result;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      result = reader.result;
    };
    reader.onerror = (error) => {
      // TODO: Error handler
      console.log('Error: ', error);
    };
    return result;
  }
}

export default FilesService;
