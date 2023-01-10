const Users = require("../model/user");
async function getusers() {
    const user = await users.find({});
    try {
        return user;
    } catch (error) {
        console.log(error);
    }
}
async function getUserPosts(req, res) {
    try {
        const page = Number(req.query.page) || 1,
            limit = Number(req.query.limit) || 10;

        const result = await Users.aggregate([{
            $facet: {
                count: [{ $count: "totalDocs" }],
                users: [{
                        $lookup: {
                            from: "posts",
                            localField: "_id",
                            foreignField: "userid",
                            pipeline: [{ $count: "count" }],
                            as: "posts",
                        },
                    },
                    {
                        $addFields: {
                            posts: { $sum: "$posts.count" },
                        },
                    },
                    { $sort: { _id: 1 } },
                    { $skip: (page - 1) * limit },
                    { $limit: limit },
                ],
            },
        }, ]);
        const users = result[0].users;
        const pagination = {
            limit,
            page,
            totalpages: result[0].count[0].totalDocs / limit,
            pagingCounter: (page - 1) * limit + 1,
            hasPrevPage: page - 1 ? true : false,
            hasNextPage: page - limit ? true : false,
            prevPage: page - 1 ? page - 1 : null,
            nextPage: page - limit ? page + 1 : null,
        };
        const response = { users, pagination };
        //  console.log(response);
        res.status(200).json({ status: "Success", data: response });
    } catch (error) {
        console.log(error);
        res.status(400).json({ status: "Error :", error: error });
    }
}

module.exports = { getusers, getUserPosts };