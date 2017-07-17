
var Error = React.createClass({
	render() {
		return(
			<div className="alert alert-danger alert-dismissible" role="alert">
				{this.props.message}
			</div>
		);
	}
});
