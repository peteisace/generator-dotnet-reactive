import FileProvider from './fileProvider';
import FileInfo from './fileInfo';

export default class ReactFileProvider extends FileProvider {
    getFileInstructions(fileSystemContext) {
        return [
            new FileInfo(
                'react/hello-world.jsx',
                'client-src/jsx/hello-world.jsx'
            )
        ];
    }
}