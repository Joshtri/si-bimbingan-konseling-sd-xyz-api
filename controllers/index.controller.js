export const loginPage = async (req, res) => {
    const title = "Login Page";
    try {
        // Mengecek apakah data users kosong


        // const messageProtect = await req.flash('messageProtect');
        res.render('index', {
            title,
            
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};