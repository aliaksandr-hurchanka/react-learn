var Lesson2 = React.createClass({
    render: function(){
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    }
});

//React.render(<Lesson2 name="Alex" />, document.getElementById('lesson2'));
ReactDOM.render(
    <Lesson2 name="Alex" />,
    document.getElementById("lesson2")
);
