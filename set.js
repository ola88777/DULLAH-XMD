const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61V23LiOBD9F72aTHzHUJutNb5wcQwYAwa29kHYMghfI8s2ZoqH+ZP5tvmSLYekkqqdyWar1k8qWTp9uvv00VeQZrhAFmpA/yvICa4gRe2SNjkCfTAowxAR0AEBpBD0gTzaLXcbzoLSNtlDHUtPCzZAQdj4Z253CYbB3qBjcm6QUDyAawfk5T7G/geAifxou/lkAJ8Uwg8UwV4v0LRqTvopnWRKL6sHJn+23DHB/gO4togQE5wejPyIEkRgbKFmDjH5HH3N3hgZh5/qPM6Nut76dhRzeDjiHx+3cr7tBXbUbO95pxw5n6MvEc9esidvPY6M02J8Efies4ySDUXT2EiW9qpwdsXWcUPWuNEv8CFFwThAKcW0+XTdGSM61avuQZbzWTfW+YC5P9q20Ew3qZSvJW1oXFJTp3waR58kLp5P8qXxt0cuHaqn1WZWZrGJ1nohK9yjWVgOW5X5kSGe/574nLxqJfpPdbdEb3S/qx2deITfZpm9iWmxitwx0pbzdd6oqyFVldoeKZ+jHx7324aZbnfDXlNzhlCFprcYeeFR0PLKV+WRpefBfuzoafRGH9KSfMTSOqwNNlLUY3dyHOK5vR+5leYfrHCkecz+kQkaVhguD0tpMiSzqTCVsHq4TKa8jtFs6honwRwbmrlh9/Z0bo1OTGkul0f14TmjCDXjAPS5awcQdMAFJZDiLH3ek5UOgEHlIp8g+lxe4AbKQiw5NClxNE1UZrRW592Jvrp0q5i7Xy/cbRoUU15cwfoBdEBOMh8VBQpGuKAZaWxUFPCACtD/87lTbdIEJRlFExyAPuAFscdKCquIiiT8UXypj5AWMM+/pIiCDghJltgI9CkpUQc83zA0tmvKOqfIA97gpW7XYDmJ4zmzZ7JdVlfbHJNb1CVOUEFhkoM+1xUlTuiysnLt/F9EepomGTLPyhzHc5KkqsaA7w04eaAoLC9IHxPpCte/OiBFZ3pTclt/geuAEJOCrtIyjzMYvMr89Sf0/axMqdukvtYuEAH9d9uIUpweija1MoXEP+IKaW0eoB/CuEDXDghQhX3U4oHBabncqazm8igkxoV/fJrVI6ft4TFLb0d6Ph9wki/e+T7L34miyN9BxMK7XiCKe0GCLA+7oC3HzUTaO7/211yBOsSVwZ8Hk7E7iQVxPdUqdnO8GfRNjIig4LXKe+hHZb7MIpR+gDtqtksz4VNsx8kgNdXSOctInqHT+D3uTeSg//XNuLUsaPEWBrfeCd0eaLvVxvmnHPr8TxSRwvY4+P3Ht+9ffnz7/lsb66URLUqAKMRx0VrOzAsPY8c0JuE+KtThULUPqnZQwVvjXi3hNnLYOCGRWJdFziY0HiAmdGxpby3jbfXkPTZhVzcXquRraJM9/ASkzUm0Fx5b6UyucKNm4+LzgqHleOeTXZ08UWoOK1oFU0e8SKYre42r8fPImilPoyBYXORKKZQ49pje1osT1jkhzIup6jy00W4Ceh/sfDlTzjelSaOjGZYWU6QGjTRWxDRX62Z4Wk1kqgztQHes1YGptHXNzJcbjil7Mrfw1JiXKZk3Sgqt4W7MSkZsptKpvpnVs1nGL48UfrGRm9xCjJ49/6UP/96wN+mz1847kJdn5BfyGmyPY6G0moKFwYTsnE2VsvrMayLJe5RjrKRMfV45s42axjK4tjOdx5CGGUlAH8A0IBkOQAfEsKDq2/T+zJm4DkgaNc9dCunr0AO1/fR6CK5/A86u/z4hCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
