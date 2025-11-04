import aerospike_functions as aspkf 
import aerospike

# function call
aspk_client = aspkf.create_aspk_connection()

item_id = 1002

keyTuple = aspkf.create_keyTuple(ns='vest_vault', sn='inventory', ii=item_id)
write_item_id_policy = {'key': aerospike.POLICY_KEY_SEND}

# bin value variables
item_decade = "1970"
item_category = "shirt"
item_size = 'M'
item_color = 'mustard'
item_subcategory = 'button down'
item_condition = 'fair'
item_material = 'polyester'
item_pattern = 'floral'
item_price = 30.45
item_main_image = 'https://i.imgur.com/'+ '87JJ61A' + '.png'


bins = {
       "item_id": item_id,   
       "decade": item_decade,
       "category": item_category,
       "size": item_size,
       "color": item_color,
       "subcategory": item_subcategory,
       "condition": item_condition,
       "material": item_material,
       "pattern": item_pattern,
       "price": item_price,
       "images": {"main": item_main_image}
       }



aspk_client.put(keyTuple,bins,policy=write_item_id_policy)
aspk_client.close()