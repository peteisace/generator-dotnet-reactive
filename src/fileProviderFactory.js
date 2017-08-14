import FileProvider from './fileProvider';
import RawServerFileProvider from './rawserverFileProvider';
import MvcViewFileProvider from './mvcViewFileProvider';
import ClientBootstrapFileProvider from './clientBootstrapFileProvider';
import JsFileProvider from './jsFileProvider';
import ReactFileProvider from './reactFileProvider';
import SassFileProvider from './sassFileProvider';

export default class FileProviderFactory {
    constructor() {        
        this._providers = [
            new RawServerFileProvider(),
            new MvcViewFileProvider(),
            new ClientBootstrapFileProvider(),
            new JsFileProvider(),
            new ReactFileProvider(),
            new SassFileProvider()
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