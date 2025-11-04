import aerospike as aspk
from aerospike import predicates as pred

# Aerospike service class to handle DB interactions
class AerospikeService:
    def __init__(self,
                host: str = 'localhost',
                port: int = 3000,
                namespace: str = "vest_vault",
                set_name: str="inventory"
                ):
        self.host = host
        self.port = port
        self.namespace = namespace
        self.set_name = set_name
        self.client: aerospike.Client = None

    # methods definition
    def create_aspk_connection(self):
        cfg={"hosts": [(self.host,self.port)]}
        # connect to aerospike
        self.client=aspk.client(cfg).connect()
        return True

    def close(self):
        self.client.close()

    def get_record(self, this_ii):
        keyTuple = (self.namespace, self.set_name, this_ii)
        (_, _, record_details) = self.client.get(keyTuple)
        return record_details

    def query_all(self):
        # function to be looped through
        def collect_parts(item):
            record_id, metadata, record_details = item
            parts.append(record_details)
        # set up the lst variable that will hold the results
        parts: list[str]=[]
        # query the records and loop through each record collecting the parts
        self.client.query(self.namespace,self.set_name).foreach(collect_parts)
        return(parts)

    @staticmethod
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

    def query_filtered_products(self, filter, value):
        upd_val = self.match_case(value)
        # function to be looped through
        def collect_parts(item):
            _, _, record_details = item
            parts.append(record_details)
        # set up the lst variable that will hold the results
        parts: list[str]=[]
        # create query object 
        qry = self.client.query(self.namespace, self.set_name)
        # set the where conditions
        qry.where(pred.equals(filter,upd_val))
        # loop through each record collecting the parts
        qry.foreach(collect_parts)
        return(parts)
