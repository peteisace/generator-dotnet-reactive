export default class FileInfo {
    constructor(source, destination, args) {
        this._source = source;
        this._destination = destination;
        this._fileArguments = args;
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
}