Rails.application.routes.draw do
  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :v1 do
<<<<<<< HEAD
  		resources :products, only: [:index, :create, :destroy, :update]
=======
  		resources :products, only: [:index, :create, :destroy, :update, :show], :defaults => { :format => 'json' }
>>>>>>> 29e992264dcfe0c226f08a6a3e9793869f66af17
  	end
  end
end
