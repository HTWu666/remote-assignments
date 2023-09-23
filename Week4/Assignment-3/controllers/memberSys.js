const index = (req, res) => {
    res.status(200).render('index')
}

const memberSys = (req, res) => {
    const signedIn = req.cookies.SIGNEDIN
    
    if (signedIn) {
        res.status(200).render('member')
    } else {
        res.status(302).redirect('/')
    }
}

const signOut = (req, res) => {
    res.status(302).cookie('SIGNEDIN', '', { expires: 0 }).redirect('/')
}

module.exports = {
    memberSys,
    signOut
}