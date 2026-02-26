import aerospike

def create_aspk_connection():
  # set variables
  host='localhost' # same as 127.0.0.1
  port=3000
  cfg={'hosts': [(host,port)]}
  # connect to aerospike
  aspk_client=aspk.client(cfg).connect()
  return aspk_client

# create connection and policy
aspk_client = create_aspk_connection()
write_item_id_policy = {'key': aerospike.POLICY_KEY_SEND}

# get the csv file and load it

# loop through the file and process the data

aspk_client.put(keyTuple, bins, policy=write_item_id_policy)
aspk_client.close()
