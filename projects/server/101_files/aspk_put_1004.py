import aerospike_functions as aspkf 
import aerospike

# function call
aspk_client = aspkf.create_aspk_connection()

item_id = 1004

keyTuple = aspkf.create_keyTuple(ns='vest_vault', sn='inventory', ii=item_id)
write_item_id_policy = {'key': aerospike.POLICY_KEY_SEND}

# bin value variables
item_decade = "1970"
item_category = "coat"
item_size = 'L'
item_color = 'beige'
item_subcategory = 'heavy coat'
item_condition = 'good'
item_material = 'sheepskin'
item_pattern = 'rustic'
item_price = 304.12
item_main_image = 'https://i.imgur.com/'+ 'Pvg2GU7' + '.png'
item_description = 'Shearling coat with southwest pattern. Shawl collar with suede outside and sheeps wool inside."
item_related = 1001


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
       "images": {"main": item_main_image},
       "related": [item_related],
       "description": item_description
       }



aspk_client.put(keyTuple,bins,policy=write_item_id_policy)
aspk_client.close()
