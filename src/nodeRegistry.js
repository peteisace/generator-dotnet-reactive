import {NodeInstallType} from './nodeInstallation';
import NodeInstallation from './nodeInstallation';
import NodeInstallRequest from './nodeInstallRequest';

export default class NodeRegistry {
    constructor() {
        this._installations = [];
        this._globalInstalls();
        this._devInstalls();
        this._appInstalls();
    }

    findByType(nodeInstallType) {
        const request = new NodeInstallRequest();
        
        this._installations.map((value) => {
            if(value.installType == nodeInstallType) {                
                request.add(value);
            }
        });

        return request;
    }

    _globalInstalls() {
        this._addToRegistry(
            NodeInstallType.Global,
            [
                'webpack@^3.1.0'
            ]
        );
    }

    _devInstalls() {
        this._addToRegistry(
            NodeInstallType.Dev,
            [
                'babel-cli',
                'babel-loader',
                'css-loader',
                'sass-loader',
                'extract-text-webpack-plugin',
                'babel-preset-es2015',
                'babel-preset-react',
                'node-sass@4',
                'ajv@5'
            ]
        );
    }

    _appInstalls() {
        const pkgs = [
            'react',
            'react-dom',
            'react-router-dom'
        ];

        this._addToRegistry(            
            NodeInstallType.Save,
            pkgs
        );
    }

    _addToRegistry(nodeInstallType, packages) {
        packages.map((value) => {
            var install = new NodeInstallation(value, nodeInstallType);
            this._installations.push(install);
        });
    }
}