import React from 'react';

export default class TodosList extends React.Component {
    //构建了一个error状态，用于判断 
    constructor(props) {   
        super(props);

        this.state = {
            error: null
        };
    }
    //构建了一个渲染方法，用于渲染error，产生一个新的<div>，在这里用的是红色字体
    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>; //这样就不用额外添加stylish了。
    }

    render() {      //渲染方法用于对提交表单进行渲染   //用于对this.state.error 的判断 type="password" 则输入是小黑点，不可见。
                
        return (
            <div >
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="输入待办事务" ref="createInput" />
                <button>创建</button>
                {this.renderError()}   
            </form>
            </div>
        );
    }
    /*如果使用type="email",则输入必须通配@ 字符，否则会显示请输入电子邮箱地址。*/
    /*ref 属性
React 支持一种非常特殊的属性，你可以用来绑定到 render() 输出的任何组件上去。这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。*/
    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;   //获取对应的input，并传递给一个const
        const task = createInput.value;               //获取这个input的值。
        const validateInput = this.validateInput(task);   

        if (validateInput) {
            this.setState({ error: validateInput });   //用于改变状态
            return;
        }

        this.setState({ error: null });        //更改状态值
        this.props.createTask(task);          //这里的this指的是什么呢？
        this.refs.createInput.value = '';     
    }

    validateInput(task) {                       //没有输入的情况。看上面task指的是输入值。
        if (!task) {                            //!task指的是没有输入的情况。
            return '请输入一项待办事务';      //没有输入，则返回一个一个字符串给这个方法。
        }                                       //这里用到的是lodash的用法_.find(),http://lodashjs.com/docs/
        else if (_.find(this.props.todos, todo => todo.task === task)) { 
        //todo.task 就是在app.js中的todo 中的任务，则如果输入与之相等，就返回一个字符串，指示任务已经存在。
        //这里也就是用的查找指令。查找的是todos（这个时候就已经跨文件了），=>是ES6的新特性，是说给todo返回todo.task
            return '任务已经存在';
        } else {
            return null;
        }
    }
}
