var Lesson3 = React.createClass({
    getInitialState: function(){
        return {
            count: 5
        }
    },
    render: function(){
        return (
            <h1>{this.state.count}</h1>
        )
    }
});

ReactDOM.render(
    <Lesson3 />,
    document.getElementById("lesson3")
);
