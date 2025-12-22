import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // 1️⃣ No token
    if (!authHeader) {
        return res.status(401).send("Token not found");
    }

    // 2️⃣ Check Bearer format
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).send("Invalid token format");
    }

    // 3️⃣ Extract token
    const token = authHeader.split(" ")[1];

    try {
        // 4️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 5️⃣ Attach user info
        req.user = decoded;

        // 6️⃣ Move forward
        next();
    } catch (error) {
        return res.status(401).send("Invalid token");
    }
};
