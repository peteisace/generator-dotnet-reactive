import FileProvider from './fileProvider';
import FileInfo from './fileInfo';

export default class MvcViewFileProvider extends FileProvider {
    getFileInstructions(fileSystemContext) {
        return [
            new FileInfo(
                'server/_Layout.cshtml',
                fileSystemContext.appName + '/Views/Shared/_Layout.cshtml',
                {
                    styleSheetLocation: fileSystemContext.bundleCssPath + '/' + fileSystemContext.bundleCssName,
                    bundledJsLocation: fileSystemContext.bundleJsPath + '/' + fileSystemContext.bundleJsName
                }
            ),
            new FileInfo(
                'server/_ViewStart.cshtml',
                fileSystemContext.appName + '/Views/_ViewStart.cshtml'
            ),
            new FileInfo(
                'server/_ViewImports.cshtml',
                fileSystemContext.appName + '/Views/_ViewImports.cshtml',
                { projectName: fileSystemContext.appName }
            ),
            new FileInfo(
                'server/Index.cshtml',
                fileSystemContext.appName + '/Views/Default/Index.cshtml'
            )
        ];
    }
}