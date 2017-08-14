import ReactDOM from 'react-dom';
import HelloWorld from '../jsx/hello-world';
import MyModel from './my-model';
import '../scss/main.scss';

let model = new MyModel(1, 'dotnet-reactive user');

ReactDOM.render(
    <HelloWorld model={model} />,
    document.getElementById('react-entry-point')
);