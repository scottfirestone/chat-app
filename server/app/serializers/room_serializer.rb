class RoomSerializer < ApplicationSerializer
  attributes :id, :name, :users, :messages
end