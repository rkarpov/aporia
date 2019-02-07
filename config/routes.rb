Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]      # user sign up
      resource :session, only: [:create, :destroy]  # user login, logout
      resources :questions, only: [:index, :create, :show, :update, :destroy] do 
        resources :answers, only: [:index, :create]
      end
      resources :answers, only: [:show, :update, :destroy] do
        resources :comments, only: [:index, :create]
     end 
     resources :comments, only: [:update, :destroy]
    end 
    root "static_pages#root" 
end
