Rails.application.routes.draw do 
  resources :rooms, only: [:index, :show]
  resources :users, only: [:index]
  resources :messages, only: [:create]

  post '/login', to: 'auth#create'

  mount ActionCable.server => '/cable'
end
