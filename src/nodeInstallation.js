export const NodeInstallType = {
    NotSet: 0,

    Global: 1,

    Dev: 2,

    Save: 3
};

export default class NodeInstallation {
    constructor(packageName, installType) {
        this._packageName = packageName;
        this._installType = installType;
    }

    get packageName() {
        return this._packageName;
    }

    get installType() {
        return this._installType;
    }
}