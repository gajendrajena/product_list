class Products extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log('Component mounted');
    $.getJSON('/api/v1/products.json', (response) => {
      this.setState({ products: response })
    });
  }

  render() {
    var products = this.state.products.map((product) => {
      return (
        <div key={item.id}>
          <h3>{product.name}</h3>
          <h5>{product.price}</h5>
          <p>{product.description}</p>
        </div>
      );
    });

    return (
      <div>
        {products}
      </div>
    );
  }
}