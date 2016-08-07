import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header'; //它其实又有两个组件，一个是todos-list-header另外一个是todos-list-item
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component
{   //这里是又创建的一个类
    //renderItems()方法用来渲染每一个表格中的元素。
    renderItems() {
        const props = _.omit(this.props, 'todos');  //_.omit()方法是操作对象OBJECT的，可以省略某个属性。与_pick()正好相反
                                                    //所以这一行的目的是去除todos属性。map()方法用于遍历，第一个参数是遍历的对象，第二个参数是给它的function
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() 
    {       
        return (   
            <table>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
                 );
    }
}        

