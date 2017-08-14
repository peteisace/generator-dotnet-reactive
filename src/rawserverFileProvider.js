import FileInfo from './fileInfo';
import FileProvider from './fileProvider';

export default class RawServerFileProvider extends FileProvider {
    constructor() {     
        super();   
    }

    getFileInstructions(fileSystemContext) {
        return [
            // controller...
            new FileInfo('server/DefaultController.cs', 'Controllers/DefaultController.cs', { projectName: fileSystemContext.appName })
        ];
    }
}