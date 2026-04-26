import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import axios from "axios";


const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get("/api/notes");
                console.log("Fetched notes:", response.data);
                setNotes(response.data);
            } catch (error) {
                console.error("Error fetching notes:", error);
                if (error.response && error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                    setErrorMsg("Failed to connect. This is likely a CORS error or the backend is not running.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);
    return (
        <div className="min-h-screen p-4">
            <Navbar />
            <h1 className="text-2xl font-bold mb-4">Home Page</h1>
            {isRateLimited && <RateLimitedUI />}
 
        </div>
    );

};
export default HomePage;