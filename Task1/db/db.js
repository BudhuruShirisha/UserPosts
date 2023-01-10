const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/Users_task1", (err, db) => {
    if (!err) {
        console.log("Successfully Connected to MongoDB");
    } else {
        console.log("Failed to Connect MongoDB  " + err);
    }
});
/* async function aggr(params) {
    const { page, limit } = params;
    const result = await users.aggregate([{
        $facet: {
            users: [{
                    $lookup: {
                        from: "posts",
                        localField: "_id",
                        foreignField: "userid",
                        pipeline: [{ $count: "TotalPosts" }],
                        as: "posts",
                    }
                },
                {
                    $project: {

                        TotalPosts: { $arrayElemAt: ["$posts.TotalPosts", 0] }
                    }
                },
                { $skip: (page - 1) * limit },
                { $limit: limit }
            ],
            pagination: [{
                    $count: "totalDocs",
                },
                {
                    $addFields: {
                        limit,
                        page,
                        totalpages: { $divide: ["$totalDocs", limit] },
                        pagingCounter: (page - 1) * limit + 1,
                        hasPrevPage: page - 1 ? true : false,
                        hasNextPage: page - limit ? true : false,
                        prevPage: page - 1 ? page - 1 : null,
                        nextPage: page - limit ? page + 1 : null
                    },
                },

            ],
        }
    }])
    return result;
}
 */


module.exports = mongoose;