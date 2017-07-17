var ProductCrud = React.createClass({

  getInitialState() {
    return {editable: this.props.action, formError: false, errorMessage: ''};
  },

  resetToNew() {
    this.setState({formError: false, errorMessage: ''});
    this.props.resetToNew()
  },

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit(id) {
    this.setState({formError: false, errorMessage: ''});
    this.props.handleEdit(id);
  },

  validateProduct(name, price){
    var msg = 'Please enter ', flag = true;
    if( name.length <= 0 && price.length <= 0 ){
      msg += 'Name and Price', flag = false;
    } else if( name.length <= 0 ){
      msg += 'Name', flag = false;
    } else if( price.length <= 0 ){
      msg += 'Price', flag = false;
    }
    this.setState({formError: !flag, errorMessage: msg});
    return flag;
  },

  render() {

    var prTemplate = <NewProduct handleSubmit={this.props.handleSubmit} validateProduct={this.validateProduct} resetToNew={this.props.resetToNew} formError={this.state.formError} errorMessage={this.state.errorMessage}/>;

    if(this.props.action == 'show') {
      prTemplate = <ProductDetail product={this.props.product} resetToNew={this.resetToNew} handleDelete={this.handleDelete.bind(this, this.props.product.id)} handleEdit={this.handleEdit.bind(this, this.props.product.id)}/>;
    } else if(this.props.action == 'edit') {
      prTemplate = <EditProduct handleSubmit={this.props.handleSubmit} product={this.props.product} validateProduct={this.validateProduct} resetToNew={this.props.resetToNew} formError={this.state.formError} errorMessage={this.state.errorMessage}/>;
    } else if(this.props.action == 'new') {
      <NewProduct handleSubmit={this.props.handleSubmit} validateProduct={this.validateProduct} resetToNew={this.props.resetToNew} formError={this.state.formError} errorMessage={this.state.errorMessage}/>;
    }

    return <div className='well fix-height'> {prTemplate} </div>;
  }

});
