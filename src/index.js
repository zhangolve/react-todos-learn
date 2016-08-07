import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';  //从components文件夹中输入app.js，而这个index.js可以看作入口，最后render的也是这个app。






render(<App/>, document.getElementById('app'));


/*


export default class TodosListHeader extends React.Component {
    render() {
        return (
            <p>2+3={2+3} </p>
        );
    }
}





*/
