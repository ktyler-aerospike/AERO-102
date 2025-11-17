import aerospike_functions as aspkf 
import aerospike

# function call
aspk_client = aspkf.create_aspk_connection()

item_id = 1001

keyTuple = aspkf.create_keyTuple(ns='vest_vault', sn='inventory', ii=item_id)
write_item_id_policy = {'key': aerospike.POLICY_KEY_SEND}

# bin value variables
item_decade = "1970"
item_category = "pants"
item_size = 8
item_color = 'rust'
item_subcategory = 'flare leg'
item_condition = 'excellent'
item_material = 'corduroy'
item_pattern = 'solid'
item_price = 41.14
item_main_image = 'https://i.imgur.com/'+ 'BVrKTDn' + '.png'
item_description = 'High-waisted pants snap front and five pocket styling.'
item_related = [1002, 1004]


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
       "related": item_related,
       "description": item_description
       }



aspk_client.put(keyTuple,bins,policy=write_item_id_policy)
aspk_client.close()
