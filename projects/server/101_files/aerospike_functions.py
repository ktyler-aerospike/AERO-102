import aerospike as aspk
from aerospike import predicates as pred

# function definition
def create_aspk_connection():
    # set variables
    host='localhost' # same as 127.0.0.1
    port=3000
    cfg={"hosts": [(host,port)]}
    # connect to aerospike
    aspk_client=aspk.client(cfg).connect()
    return aspk_client

def create_keyTuple(ns, sn, ii):
    namespace= ns
    set_name= sn
    item_id= ii
    keyTuple = (namespace, set_name, item_id)
    return keyTuple


def get_record(this_ii):
       aspk_client = create_aspk_connection()
       this_ns = 'vest_vault'
       this_sn = 'inventory'
       keyTuple = create_keyTuple(ns=this_ns, sn=this_sn, ii=this_ii)
       (record_id, metadata, record_details) = aspk_client.get(keyTuple)
       aspk_client.close()
       return record_details

def query_all(set_name):
    namespace = ('vest_vault')
    # function to be looped through
    def collect_parts(item):
        record_id, metadata, record_details = item
        parts.append(record_details)
    # connect to aerospike
    aspk_client = create_aspk_connection()
    # set up the lst variable that will hold the results
    parts: list[str]=[]
    # query the records and loop through each record collecting the parts
    aspk_client.query(namespace, set_name).foreach(collect_parts)
    aspk_client.close()
    return(parts)

def match_case(value):
    if isinstance(value, int):
        return value
    match value:
        case 'dresses': upd_val = 'dress'
        case 'tops': upd_val = 'shirt'
        case 'outerwear': upd_val= 'coat'
        case 'jackets': upd_val = 'jacket'
        case _: upd_val= value
    return upd_val

def query_filtered_products(set_name, filter, value):
    namespace = ('vest_vault')
    upd_val = match_case(value)
    # function to be looped through
    def collect_parts(item):
        record_id, metadata, record_details = item
        parts.append(record_details)
    # connect to aerospike
    aspk_client = create_aspk_connection()
    # set up the lst variable that will hold the results
    parts: list[str]=[]
    # create query object 
    qry = aspk_client.query(namespace, set_name)
    # set the where conditions
    qry.where(pred.equals(filter,upd_val))
    # loop through each record collecting the parts
    qry.foreach(collect_parts)
    aspk_client.close()
    return(parts)
