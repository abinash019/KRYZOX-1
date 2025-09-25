import clsx from "clsx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useGetData from "../../../../hooks/getData";
import useUpdateData from "../../../../hooks/updateData";

// Helper to format date array
const formatDate = (arr) => {
    if (!arr || arr.length < 5) return "N/A";
    const [year, month, day, hour, minute] = arr;
    return `${year}-${month}-${day} ${hour}:${minute}`;
};

// Tournament request card
const TournamentRequestCard = ({ data = {}, turnmentStatus }) => {
    if (!data) return null;

    const { user = {}, postAppId, post = {}, status = "N/A", requestAt } = data;

    const {
        updateData,
        result: updateResult,
        responseError: updateError,
        loading: updateLoading,
    } = useUpdateData();

    useEffect(() => {
        if (updateError) toast.error(updateError || "Something went wrong");
    }, [updateError]);

    const approveUser = async () => {
        if (!postAppId) return;
        await updateData(
            `/turnmentApp/post/${postAppId}?status=CREATOR_APPROVED`
        );
    };

    return (
        <div className="bg-[#202020] text-[#B05BDB] rounded-2xl shadow-lg p-5 w-[320px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold text-[#80FFDB]">
                    {post?.title || "N/A"}
                </h2>
                <span
                    className={`px-2 py-1 text-xs rounded-md ${
                        status === "PENDING"
                            ? "bg-yellow-500 text-black"
                            : status === "APPROVED"
                            ? "bg-green-500 text-black"
                            : "bg-red-500 text-white"
                    }`}
                >
                    {status}
                </span>
            </div>

            {/* Requester Info */}
            {updateResult && (
                <div className="text-sm space-y-1 mb-3">
                    <div className="w-full flex justify-between">
                        <span className="font-semibold">Requested By:</span>
                        <span className="text-[#80FFDB]">
                            {user?.name || "N/A"}
                        </span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="font-semibold">Email:</span>
                        <span className="text-[#80FFDB]">
                            {user?.email || "N/A"}
                        </span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="font-semibold">Mobile:</span>
                        <span className="text-[#80FFDB]">
                            {user?.mobileNo || "N/A"}
                        </span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="font-semibold">Balance:</span>
                        <span className="text-[#80FFDB]">
                            ${user?.balance ?? 0}
                        </span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="font-semibold">Requested At:</span>
                        <span className="text-[#80FFDB]">
                            {formatDate(requestAt)}
                        </span>
                    </div>
                </div>
            )}

            <hr className="border-gray-700 my-2" />

            {/* Tournament Info */}
            <div className="text-sm space-y-1">
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Game:</span>
                    <span className="text-[#80FFDB]">
                        {post?.game?.gameTitle || "N/A"}
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Mode:</span>
                    <span className="text-[#80FFDB]">
                        {post?.gameMode?.modeName || "N/A"}
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Map:</span>
                    <span className="text-[#80FFDB]">
                        {post?.map?.mapTitle || "N/A"}
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Entry Fee:</span>
                    <span className="text-[#80FFDB]">
                        ${post?.entryFee ?? 0}
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Prize:</span>
                    <span className="text-[#80FFDB]">
                        ${post?.winingPrices ?? 0}
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Start Time:</span>
                    <span className="text-[#80FFDB]">
                        {formatDate(post?.startTime)}
                    </span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="font-semibold">Created By:</span>
                    <span className="text-[#80FFDB]">
                        {post?.user?.name || "N/A"}
                    </span>
                </div>
            </div>

            {/* Footer Actions */}
            {turnmentStatus === "pending" && (
                <div className="flex justify-between text-white gap-2 mt-6">
                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm">
                        Reject
                    </button>
                    <button
                        className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm"
                        disabled={updateLoading}
                        onClick={approveUser}
                    >
                        {updateLoading ? <ClipLoader size={15} /> : "Approve"}
                    </button>
                </div>
            )}
        </div>
    );
};

// Pending Players Tab
const PendingPlayers = ({ postId, result }) => (
    <div>
        <div className="text-[18px] text-[#B05BDB] font-semibold mb-5">
            Pending Players for Tournament ID: {postId}
        </div>
        {result?.length > 0 ? (
            <div className="w-full h-auto py-10 flex justify-between flex-wrap">
                {result.map((item, index) =>
                    item ? (
                        <TournamentRequestCard
                            key={item?.postAppId || index}
                            data={item}
                            turnmentStatus="pending"
                        />
                    ) : null
                )}
            </div>
        ) : (
            <div>No pending player found</div>
        )}
    </div>
);

// Approved Players Tab
const ApprovedPlayers = ({ postId, result }) => (
    <div>
        <div className="text-[18px] text-[#B05BDB] font-semibold">
            Approved Players for Tournament ID: {postId}
        </div>
        {result?.length > 0 ? (
            <div className="w-full h-auto py-10 flex justify-between flex-wrap">
                {result.map((item, index) =>
                    item ? (
                        <TournamentRequestCard
                            key={item?.postAppId || index}
                            data={item}
                            turnmentStatus="approved"
                        />
                    ) : null
                )}
            </div>
        ) : (
            <div>No approved player found</div>
        )}
    </div>
);

// Reward Selection Tab
const RewardSelection = ({ postId }) => (
    <div className="text-[18px] text-[#B05BDB] font-semibold">
        Reward Selection for Tournament ID: {postId}
    </div>
);

// Reward Players Tab
const RewardPlayer = ({ postId }) => (
    <div className="text-[18px] text-[#B05BDB] font-semibold">
        Reward Players for Tournament ID: {postId}
    </div>
);

// Tournament Complete Tab
const TournamentComplete = ({ postId }) => (
    <div className="text-[18px] text-[#B05BDB] font-semibold">
        Tournament Completed Data for ID: {postId}
    </div>
);

// Tab definitions
const TabHeading = [
    { heading: "Pending Players", key: "pending" },
    { heading: "Approved Players", key: "approved" },
    { heading: "Rewards", key: "reward" },
    { heading: "Complete", key: "complete" },
];

// Main Tournament Management Page
export default function TournamentManagePage() {
    const { tounamentId: postId } = useParams();
    const [activeTab, setActiveTab] = useState("pending");
    const [url, setUrl] = useState(
        `/turnmentApp/pending/${postId}?status=PENDING`
    );
    const [data, setData] = useState([]);

    const { getData, result, responseError, loading } = useGetData();

    // Update URL when tab changes
    useEffect(() => {
        if (activeTab === "pending")
            setUrl(`/turnmentApp/pending/${postId}?status=PENDING`);
        else if (activeTab === "approved")
            setUrl(`/turnmentApp/pending/${postId}?status=CREATOR_APPROVED`);
    }, [activeTab, postId]);

    // Fetch data when URL changes
    useEffect(() => {
        if (!url) return;
        (async () => {
            await getData(url);
        })();
    }, []);

    return (
        <div className="w-full xl:px-[72px] py-[65px] text-white">
            <div className="mb-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold pb-5">
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            background:
                                "linear-gradient(45deg, #80FFDB, #B05BDB)",
                            WebkitBackgroundClip: "text",
                        }}
                    >
                        Tournament Details
                    </span>
                </h1>
                <section className="w-full flex flex-wrap justify-between">
                    <p className="text-[18px] text-[#B05BDB] font-semibold">
                        Manage players, approvals, and rewards
                    </p>
                </section>
            </div>

            {/* Tabs */}
            <div className="w-full h-[54px] py-1 px-1 flex items-center rounded-sm border-b bg-[#303030] border-[#3A3A3A] mb-6">
                {TabHeading.map((item) => (
                    <button
                        key={item.key}
                        className={clsx(
                            "h-full flex-1 text-gray-300",
                            activeTab === item.key && "bg-[#121212] rounded-sm"
                        )}
                        onClick={() => setActiveTab(item.key)}
                    >
                        {item.heading}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {responseError ? (
                <div className="text-red-700 text-center">
                    {responseError || "Something went wrong"}
                </div>
            ) : (
                <div className="mb-5 mt-10">
                    {loading ? (
                        <div className="flex justify-center">
                            <ClipLoader color="white" />
                        </div>
                    ) : (
                        (activeTab === "pending" && (
                            <PendingPlayers
                                postId={postId}
                                result={result || []}
                            />
                        )) ||
                        (activeTab === "approved" && (
                            <ApprovedPlayers
                                postId={postId}
                                result={result || []}
                            />
                        )) ||
                        (activeTab === "reward" && (
                            <div>
                                <RewardSelection postId={postId} />
                                <RewardPlayer postId={postId} />
                            </div>
                        )) ||
                        (activeTab === "complete" && (
                            <TournamentComplete postId={postId} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
