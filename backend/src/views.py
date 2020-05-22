from flask import Blueprint

import backend.src.model as model

api_bp = Blueprint('api_bp', __name__)


@api_bp.route("/")
def index():
    model._redis.inc_count()
    count = model._redis.get_count()
    return "This page has been visited {} times".format(count)
