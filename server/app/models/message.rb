class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates_presence_of :content
  validates_presence_of :user
  validates_presence_of :room
end
