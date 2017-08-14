import FileProvider from './fileProvider';
import FileInfo from './fileInfo';

export default class SassFileProvider extends FileProvider {
    getFileInstructions(fileSystemContext) {
        return [
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/settings.scss',
                {
                    sassFileType: 'settings',
                    description: 'This is where you keep all your variables etc. e.g.: $white: #ffffff;'
                }
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/tools.gradient-mixins.scss',
                {
                    sassFileType: 'Tools - gradient mixins',
                    description: 'Tools files are to group your helper functions / mixins etc. Every site uses gradient mixins, ' +
                        'so I thought I\'d use that as the example'
                }
            ),
            new FileInfo(
                'scripts/generic.reset.scss',
                'client-src/scss/generic.reset.scss'
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/elements.h1.scss',
                {
                    sassFileType: 'Elements - h1',
                    description: 'Elements files give generic structure for all elements of that kind. This is example of h1. ' +
                        'Will apply to all h1.'
                }
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/elements.input.scss',
                {
                    sassFileType: 'Elements - input',
                    description: 'Elements files give generic structure for all elements of that kind. This is example of input. ' + 
                        'Will apply to all input elements.'
                }
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/objects.layout.scss',
                {
                    sassFileType: 'Objects - layout',
                    description: 'class-based selectors which define undecorated design patterns, for example media object known from OOCSS ' + 
                        'I\'ve chosen to use layout as an example. This may deserve a fate worse than a fate worse than death by ' + 
                        'SCSS purists.\r\n\r\nText taken from https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/'
                },
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/components.login.scss',
                {
                    sassFileType: 'Components - login',
                    description: 'This type creates many, many files. pecific UI components. This is where majority of our work takes place ' +
                        'and our UI components are often composed of Objects and Components' + 
                        '\r\n\r\nText taken from https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/'
                }
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/components.header-bar.scss',
                {
                    sassFileType: 'Components - Header Bar',
                    description: 'This type creates many, many files. pecific UI components. This is where majority of our work takes place ' +
                        'and our UI components are often composed of Objects and Components' + 
                        '\r\n\r\nText taken from https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/'
                }
            ),
            new FileInfo(
                'scripts/child.scss',
                'client-src/scss/overrides.scss',
                {
                    sassFileType: 'Overrides',
                    description: 'utilities and helper classes with ability to override anything which goes before in the triangle, ' + 
                        'eg. hide helper class.\r\n\r\nText taken from https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/'
                }
            ),
            new FileInfo(
                'scripts/main.scss',
                'client-src/scss/main.scss'
            )
        ];
    }
}