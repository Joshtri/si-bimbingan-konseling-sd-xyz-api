import express from 'express';



export const dashboardPage = async(req,res)=>{
    try {
        const title = "Dashboard";
        res.render('dashboard',{
            title,
        })

    } catch (error) {
        console.log(error);
        throw error;
    }
}
