import generator from 'yeoman-generator';
import yosay from 'yosay';
import chalk from 'chalk';
import FileProviderFactory from './fileProviderFactory';
import NodeRegistry from './nodeRegistry';
import {NodeInstallType} from './nodeInstallation';
import mkdirp from 'mkdirp';

class DotnetReactGenerator extends generator {
    constructor(...args) {
        super(...args);
        this.log(yosay('Welcome to the dotnet-reactive generator. This will scaffold the dotnet core server, ' + 
            'client setup with webpack, react, sass.' + chalk.green(' This is going to be awesome :):)')));
    }

    prompting() {
        // let's get current dir
        var currentDir = process.cwd();
        const pieces = currentDir.split('/');            
        currentDir = pieces[pieces.length - 1];
        currentDir = currentDir.replace('.', '-');
        // ask the question.
        return this.prompt([{
            type: 'input',
            name: 'appName',
            message: 'Enter the full name of the project (Namespace too): e.g.: ' + chalk.green('MyCompany.MyApplication.Web'),
            default: currentDir
        }]).then((answers) => {
            this._appName = answers.appName;
        });
    }

    get configuring() {
        // on configuring, we'll have the app setup like
        // client-src/js/*
        // name of .net project/bits.
        return  {
            createPackageJson() {
                // most important... package.json.
                this.log('Now creating ' + chalk.yellow('package.json (if required)'));    
                if(!this.fs.exists(this.destinationPath('package.json'))) {
                    this.fs.copyTpl(
                        this.templatePath('coreClient/package.json'),
                        this.destinationPath('package.json'),
                        {
                            appName: this._appName.toLowerCase()
                        }
                    );
                } 
            },
            createDotNetApp() {
                // to host server code.
                const current = process.cwd();
                const newDir = current + '/' + this._appName;
                mkdirp.sync(newDir);
                // now change dir
                process.chdir(newDir);
                // execute command.
                const cmd = 'dotnet';
                const args = [ 'new', 'web'];
                const opts = {
                    auth: 'None',
                    framework: 'netcoreapp1.1'
                };                                    
                this.spawnCommandSync(cmd, args, opts);
                // now change back
                process.chdir(current);
            }
        }
    }

    writing() {
        // inform user...
        this.log(chalk.red('*** You will be prompted whether to overwrite or not. Answer "y(es)" or "a(ll)". The project file ' + 
            'needs to be overwritten to include latest library versions, and some additional files / views. This generator ' + 
            'will NOT work without positive confirmation at this step.'));
            
        const context = { 
            appName: this._appName.toString(),
            bundleJsName: 'bundled.js',
            bundleJsPath: 'scripts',
            bundleCssName: 'styles.css',
            bundleCssPath: 'css'
        };

        const factory = new FileProviderFactory();
        for(let fileInfo of factory.getFilesToWrite(context)) {            
            if(!this.fs.exists(this.destinationPath(fileInfo.destination)) || fileInfo.overwrite) {            
                // just write from source to destination.
                this.fs.copyTpl(
                    this.templatePath(fileInfo.source),
                    this.destinationPath(fileInfo.destination),
                    fileInfo.fileArguments
                );
                this.log(chalk.green('   create') + ' ' + this.destinationPath(fileInfo.destination));
            }
        }
    }
    
    install() {
        // let's go global first...
        const registry = new NodeRegistry();
        // -g
        var installRequest = registry.findByType(NodeInstallType.Global);
        this.npmInstall(installRequest.packages, installRequest.options);
        // --save
        installRequest = registry.findByType(NodeInstallType.Save);
        this.npmInstall(installRequest.packages, installRequest.options);
        // --save-dev
        installRequest = registry.findByType(NodeInstallType.Dev);
        this.npmInstall(installRequest.packages, installRequest.options);
    }

    end() {
        const currentPath = process.cwd();
        const selectedPath = this.destinationPath(this._appName);
        process.chdir(selectedPath);       
        // run the command, lest anyone cry.
        this.spawnCommandSync(
            "dotnet",
            ["restore"]
        );  
        // and go back
        process.chdir('..');
        // and run the webpack
        this.spawnCommandSync(
            'webpack'
        );
    }
}

module.exports = DotnetReactGenerator;