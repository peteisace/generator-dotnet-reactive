export default class FileInfo {
    constructor(source, destination, args, overwrite = true) {
        this._source = source;
        this._destination = destination;
        this._fileArguments = args;
        this._overwrite = overwrite;
    }

    get source() {
        return this._source;
    }

    get destination() {
        return this._destination;
    }

    get fileArguments() {
        return this._fileArguments;
    }

    get overwrite() {
        return this._overwrite;
    }
}