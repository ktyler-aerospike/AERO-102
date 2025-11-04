import aerospike_functions as aspkf 


#results = aspkf.get_record(1004)
results =  aspkf.query_filtered_products(set_name= 'inventory', filter='category', value='pants')
print(results)
