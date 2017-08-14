import FileProvider from './fileProvider';
import FileInfo from './fileInfo';

export default class ClientBootstrapFileProvider extends FileProvider {
    getFileInstructions(fileSystemContext) {
        return [
            new FileInfo(
                'coreClient/.babelrc',
                '.babelrc'
            ),
            new FileInfo(
                'coreClient/webpack.config.js',
                'webpack.config.js',
                {
                    bundleFilename: fileSystemContext.bundleJsName,
                    serverWebDirectory: fileSystemContext.appName
                }
            )/*,
            new FileInfo(
                'coreClient/package.json',
                'package.json',
                {
                    appName: fileSystemContext.appName.toLowerCase()
                },
                false
            )*/
        ];
    }
}