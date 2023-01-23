const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 8080
const cors = require("cors")
const Joi = require("joi")

app.use(cors())
app.use(express.json())

let newNft = null

const ArtistShema = new mongoose.Schema({
    nameAndSurname: String,
    userName: String,
    password: String,
    change: Number,
    sold: Number,
    volume: Number,
    nfts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NFT",
        }
    ]
})
const NftShema = new mongoose.Schema({
    artistId: String,
    name: String,
    price: Number,
    bid: Number,
})

// Models
const ArtistModel = mongoose.model("Artist", ArtistShema)
const NftModel = mongoose.model("NFT", NftShema)


// Connect to Mongo DB
mongoose.set("strictQuery", false)
mongoose.connect(`mongodb+srv://RasulAliyarov:yhDM5vvDNiuCJT0K@cluster0.78j7miz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Connect to MongoDB"))
    .catch((error) => console.error(error));


// Artist and NFT SHEMA
const artistShema = Joi.object({
    nameAndSurname: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
    change: Joi.number().required(),
    sold: Joi.number().required(),
    volume: Joi.number().required(),
})
const nftShema = Joi.object({
    artistId: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    bid: Joi.number().required(),
})

// GET Artist 
app.get("/api/artist", (req, res) => {
    ArtistModel.find({}, (error, artist) => {
        if (error) return res.status(500).send({ error });
        res.send(artist)
    })
})

// GET NFT 
app.get("/api/nft", (req, res) => {
    NftModel.find({}, (error, nft) => {
        if (error) return res.status(500).send({ error })
        res.send(nft)
    })
})

app.post("/api/create",
    (req, res, next) => {
        let { error } = artistShema.validate(req.body);
        if (!error) next()
        else {
            const { details } = error
            const message = details.map((i) => i.message).join(",");

            res.status(422).send({ error: message })
        }
    },
    (req, res) => {
        const newUser = new ArtistModel({
            ...req.body
        })

        newUser
            .save()
            .then(() => res.send({ message: "User succesfully created" }))
            .catch((error) => res.status(500).send(error));

        User = newUser
    })

let nft = {}

app.post("/api/nft/create",
    (req, res, next) => {
        let { error } = nftShema.validate(req.body)
        if (!error) next()
        else {
            const { details } = error
            const message = details.map((i) => i.message).join(",");
            res.status(422).send({ eroor: message })
        }
    },
    (req, res) => {
        newNft = new NftModel({
            ...req.body
        })
            .save()
            .then(() => res.send({ message: "Nft succesfully created" }))
            .catch((error) => res.status(500).send({ error }));
    },
)

app.post("/api/artist/nfts/:artistID",
    (req, res) => {

        console.log(req.params.artistID, "artId")
        console.log(req.body.data, "body")

        ArtistModel.findByIdAndUpdate(
            req.params.artistID,
            {
                $push: {
                    nfts: req.body.data,
                },
            },
            (error, data) => {
                if (error) return res.status(500).send({ error })
                res.send(data)
            }
        );
    })

app.get("/api/users", (req, res) => {
    ArtistModel.find(null, "nameAndSurname userName password change sold volume nfts")
        .populate("nfts")
        .exec((error, data) => {
            if (error) return res.status(500).send({ error });

            res.send(data);
        });
});


// Listen SERVER 8080
app.listen(PORT, (req, res) => {
    console.log("Server is up", PORT)
})

// mongodb+srv://RasulAliyarov:<password>@cluster0.78j7miz.mongodb.net/?retryWrites=true&w=majority
// yhDM5vvDNiuCJT0K