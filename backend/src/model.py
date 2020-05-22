import redis

import backend.src.config as config


class RedisConnection():
    def __init__(self):
        self.conn = redis.Redis(host=config.REDIS_HOST,
                                port=config.REDIS_PORT, charset="utf-8", decode_responses=True)

    def inc_count(self):
        self.conn.incr('count', amount=1)

    def get_count(self):
        return self.conn.get('count')


_redis = None


def init_redis_connection():
    global _redis
    _redis = RedisConnection()
    return _redis
