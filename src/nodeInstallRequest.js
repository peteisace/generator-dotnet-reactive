import {NodeInstallType} from './nodeInstallation';

export default class NodeInstallRequest {
    constructor() {
        this._packages = [];
        this._installType = NodeInstallType.NotSet;
    }

    add(nodeInstallation) {        
        // check the type first.
        if(this._installType == NodeInstallType.NotSet) {
            // we're good, overwrite it
            this._installType = nodeInstallation.installType;
        }
        else if(this._installType != NodeInstallType.NotSet && this._installType != nodeInstallation.installType) {
            throw 'Cannot mix install types on an install request, current is ' + this._installType + 
                ' and supplied is ' + nodeInstallation.installType;
        }

        // we're good so add it to the list of packages.            
        this._packages.push(nodeInstallation.packageName);        
    }

    get packages() {

        return this._packages;
    }

    get options() {
        switch(this._installType) {
            case NodeInstallType.Global: {
                return { 'global': true };
            }
            case NodeInstallType.Dev: {
                return { 'save-dev': true };
            }
            case NodeInstallType.Save: {
                return { 'save': true };
            }
        }
    }
}