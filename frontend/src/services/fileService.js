/* eslint-disable no-undef */
class FileService {
    static toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
                console.log(resolve(fileReader.result));
            }
            fileReader.onerror = () => {
                reject(fileReader.error)
            }
        });
    };
  

}

export default FileService;


