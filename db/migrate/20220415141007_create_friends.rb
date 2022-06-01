class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.string :idNo
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end