class AddRoomToMessageAndRemoveMessageFromMessage < ActiveRecord::Migration[5.1]
  def change
    remove_reference :messages, :message, index: true, foreign_key: true
    add_reference :messages, :room, index: true, foreign_key: true
  end
end
