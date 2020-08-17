require 'rails_helper'

RSpec.describe "Users", type: :request do
  it "request list of all users" do
    user = User.create(:name => "user", :color => "#bbb")

    get "/users"
    expect(response).to be_successful
    expect(response.body).to include("user")
    expect(response.body).to include("#bbb")
  end
end