import FileInfo from './fileInfo';
import FileProvider from './fileProvider';

export default class RawServerFileProvider extends FileProvider {
    constructor() {     
        super();   
    }

    getFileInstructions(fileSystemContext) {
        var nsname = fileSystemContext.appName;        
        while(nsname.includes('-')) {
            nsname = nsname.replace('-', '_');
        }
     
        console.log('nsname = ' + nsname);
        return [
            // controller...
            new FileInfo(
                'server/DefaultController.cs', 
                fileSystemContext.appName + '/Controllers/DefaultController.cs', 
                { projectName: nsname }),
            new FileInfo(
                'server/appName.csproj.template',
                fileSystemContext.appName + '/' + fileSystemContext.appName + '.csproj'),
            new FileInfo(
                'server/Startup.cs',
                fileSystemContext.appName + '/Startup.cs',
                { projectName: nsname })
        ];
    }
}