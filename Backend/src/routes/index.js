import express from "express"
import authRoute from "../Module/auth.route.js"

const router = express.Router();

router.get("/health",(req,res)=>{
    return res.json({
        message:"cilnic managemnet system",
        success:true
    })
})
router.use("/auth",authRoute)




export default router