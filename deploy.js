const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

ftpDeploy
  .deploy({
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    localRoot: __dirname + '/dist',
    remoteRoot: '/public_html/earthfestsingapore.com/earthlife/',
    include: ['*', '**/*'] // this would upload everything except dot files
    // deleteRemote: true,              // delete existing files at destination before uploading
    // forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
  })
  .then(res => console.log('Done!'))
  .catch(err => console.log(err));

ftpDeploy.on('uploaded', function(data) {
  console.log('Uploaded', data);
});
