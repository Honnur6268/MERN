import 'dotenv/config'

class Config{
    MONGODB_URI = process.env.MONGO_URI

    PORT = parseInt(process.env.PORT || "80")
}

export default new Config()