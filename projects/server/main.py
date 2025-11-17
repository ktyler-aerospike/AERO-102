from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from as_class import AerospikeService

as_service = AerospikeService(namespace='vest_vault')

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    as_service.create_aspk_connection()
    yield
    # Shutdown
    as_service.close()

# Instantiates the app to serve the API 
app = FastAPI(
    title="Vest Vault",
    openapi_url=None,
    docs_url=None,
    redoc_url=None,
    swagger_ui_oauth2_redirect_url=None,
    lifespan=lifespan
)

# Add CORS middleware to allow calls from the front end to the API while on different ports
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Add functions to these routes

@app.get("/home")
def home():
    data = as_service.query_all()
    return { 'error': None, 'data': data }

@app.get("/products")
def get_products():
    data = as_service.query_all()
    return { 'error': None, 'data': data }

@app.get("/related/{product_ids}")
def get_many_products(product_ids: str):
    data = as_service.get_many_products(product_ids)
    return {"error": None, "data": data}

@app.get("/products/{filter}/{value}")
def get_filtered_products(filter, value):
    data = as_service.query_filtered_products(filter = filter, value = value)
    return { 'error': None, 'data': data }

@app.get("/products/{product}")
def get_record(product: int):
    data = as_service.get_record(product)
    return { 'error': None, 'data': data}


