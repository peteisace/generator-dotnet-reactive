import FileProvider from './fileProvider';
import RawServerFileProvider from './rawserverFileProvider';

export default class FileProviderFactory {
    constructor() {        
        this._providers = [
            new RawServerFileProvider()
        ];
    }

    getFilesToWrite(fileSystemContext) {
        const returnedFiles = [];
        for(let provider of this._providers) {
            for(let fileInfo of provider.getFileInstructions(fileSystemContext)) {
                returnedFiles.push(fileInfo);
            }
        }

        return returnedFiles;
    }
}