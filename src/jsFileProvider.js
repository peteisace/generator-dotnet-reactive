import FileProvider from './fileProvider';
import FileInfo from './fileInfo';

export default class JsFileProvider extends FileProvider {
    getFileInstructions(fileSystemContext) {
        return [
            new FileInfo(
                'scripts/index.js',
                'client-src/js/index.js'
            ),
            new FileInfo(
                'scripts/my-model.js',
                'client-src/js/my-model.js'
            )
        ]
    }
}