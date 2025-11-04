import aerospike_functions as aspkf 
import aerospike

# function call
aspk_client = aspkf.create_aspk_connection()

item_id = 1003

keyTuple = aspkf.create_keyTuple(ns='vest_vault', sn='inventory', ii=item_id)
write_item_id_policy = {'key': aerospike.POLICY_KEY_SEND}

# bin value variables
item_decade = "1970"
item_category = "dress"
item_size = 's'
item_color = 'chartreuse'
item_subcategory = 'shift'
item_condition = 'excellent'
item_material = 'wool broadcloth'
item_pattern = 'wavy geometric'
item_price = 122.34
item_main_image = 'https://i.imgur.com/'+ 'ReMo53s' + '.png'


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



aspk_client.put(keyTuple,bins, policy=write_item_id_policy)
aspk_client.close()