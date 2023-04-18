var nodemailer = require("nodemailer");

var transfor = nodemailer.createTransport({
    service: "gmail", // gönderen mailin kullandığı servis
    auth:{ // gönderecek kişinin mail bilgileri
        user:"user@gmail.com",
        pass:"123456"
    }
});

var mailBilgi = {
    from:"user@gmail.com",
    to:"receivers@gmail.com", // gönderilen kişinin mail bilgileri
    subject: "Node.js ile mail", // Başlık 
    text: "Bu bir test mesajıdır"
};

transfor.sendMail(mailBilgi, function(error){
    if(error) console.log(error);
    else console.log("Mailiniz gönderildi");
});
