import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';   //导入了本文件夹中的todos-list


//export default class App extends React.Component {};  //相当于var App =createClass({});

//const es new feature es6的新特性，const表示的是一个定值，需要预先赋值。

const todos = [ 

//在这里完成是绿色，未完成是红色。
{
    task: 'React 学习',
    isCompleted: true
},

{
    task: 'ES6 学习',
    isCompleted: true
}
];

//现在这里就不会发生改变了。

export default class App extends React.Component {
    //相当于getInitialState(),这里表示状态的初始值是todos
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }               //注意这里没有逗号
                     //这里说明有一个组件名为CreateTodo ，它有一个属性是App这个类的状态todos，还有一个属性是createTask
    render() {
        return (    //sumblme 只有在括号开始或结束的地方注释，这也是保持代码整洁的方法。所以也借此看看人家的代码
            <div>
                <h1>待办事物列表</h1> 
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} /> 
                <TodosList
                    todos={this.state.todos}  //bind()方法会创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数, 它的参数是bind()的其他参数和其原参数，用于绑定事件
                    toggleTask={this.toggleTask.bind(this)}  //绑定
                    saveTask={this.saveTask.bind(this)}      //绑定  注意这里是绑定的是todoslist 的属性。
                    deleteTask={this.deleteTask.bind(this)}  //绑定 至此呈现了Todoslist这个类的四个属性
                />
            </div>
        );
    }

    toggleTask(task)    
    {    

        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }                                                   

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}

/*最后这四个是App的四个属性*/

