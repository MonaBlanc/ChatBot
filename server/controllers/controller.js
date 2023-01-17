// Controller for home
exports.home = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while loading home" }); 
    }
}

// Controller for chatbot
exports.chatbot = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while loading chatbot" });
    }
}


