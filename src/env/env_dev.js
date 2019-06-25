module.exports = {
    app: 'reactnativestarterkit', // 하이메리
    version: "",
    versionName : '0.0.1',
    appID : '', // 애플 스토어 ID
    packageName : '', // 구글 스토어 패키지명
    playstoryURL : '', //https://play.google.com/store/apps/details?id=[packageName]
    storeURL : '', //https://itunes.apple.com/kr/app/[appName]/id[appID]
    serverURL: '',
    storageName : '@reactnativestarterkit:',
    deviceId: '',
    deviceName: '',
    SCREENSHOT_DIR: '',
    SCREENSHOT_OPTIONS: {
        timeout: 1000,
        killSignal: 'SIGKILL',
    },
    WEBVIEW : {
        enable : true,
        url : 'http://160.202.161.148:8080/community/main',
        login : {
            uid: '',
            upw: '',
            autoLogin : false
        }
    },
    isPermission : !false,
};
