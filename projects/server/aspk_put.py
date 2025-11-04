import aerospike_functions as aspkf 


#function call
aspk_client = aspkf.create_aspk_connection()

item_id = 1004
keyTuple = aspkf.create_keyTuple(ns='vest_vault',sn='inventory',ii=item_id)

# bin value variables
item_decade = "1970"
item_category = "coat"
item_size = 'L'
item_color = 'beige'
item_subcategory = 'heavy coat'
item_condition = 'good'
item_material = ['sheepskin', 'suede']
item_pattern = 'rustic'
item_price = 304.12
item_main_image = 'https://i.imgur.com/'+ 'Pvg2GU7' + '.png'


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



aspk_client.put(keyTuple,bins)
aspk_client.close()