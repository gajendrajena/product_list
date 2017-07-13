class Api::V1::ProductsController < Api::V1::BaseController
  before_action :set_product, only: [:show, :update]

  # GET /api/v1/products.json
  def index
    respond_with Product.all.limit(10)
  end

  # GET /api/v1/products/1.json
  def show
    respond_with :api, :v1, @product
  end

  # POST /api/v1/products.json
  def create
    respond_with :api, :v1, Product.create(product_params)
  end

  # PATCH/PUT /api/v1/products/1.json
  def update
    @product.update(product_params)
    respond_with @product, json: @product
  end

  # DELETE /api/v1/products/1.json
  def destroy
    respond_with Product.destroy(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:name, :description, :price)
    end
end
