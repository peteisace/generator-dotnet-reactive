import generator from 'yeoman-generator';
import yosay from 'yosay';
import chalk from 'chalk';
import FileProviderFactory from './fileProviderFactory';

class DotnetReactGenerator extends generator {
    constructor(...args) {
        super(...args);
        this.log(yosay('Welcome to the dotnet-reactive generator. This will scaffold the dotnet core server, ' + 
            'client setup with webpack, react, sass.' + chalk.green(' This is going to be awesome :):)')));
    }

    getUserParameters() {
        return this.prompt([{
            type: 'input',
            name: 'appName',
            message: 'Enter the full name of the project (Namespace too): e.g.: ' + chalk.green('MyCompany.MyApplication.Web')
        }]).then((answers) => {
            this._appName = answers.appName;
        });
    }

    runAspnetGenerator() {
        let aspnet = require.resolve('generator-aspnet/app');
        this.composeWith(aspnet, {
            arguments: [
                "web",
                this._appName
            ]
        });
    }

    writeFiles() {
        const context = { appName: this._appName };
        const factory = new FileProviderFactory();
        for(let fileInfo of factory.getFilesToWrite(context)) {
            // just write from source to destination.
            this.fs.copyTpl(
                this.templatePath(fileInfo.source),
                this.destinationPath(fileInfo.destination),
                fileInfo.fileArguments
            );
        }
    }
}

module.exports = DotnetReactGenerator;