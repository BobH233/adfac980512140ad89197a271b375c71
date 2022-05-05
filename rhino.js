var packageName = common.getlpparam().packageName;
if (packageName == 'com.lerist.fakelocation') {
    //1.3.1.1(1148)版本
    common.hookAllMethods('android.app.ActivityThread', 'performLaunchActivity', null, function (param) {
        var mInitialApplication = common.getObjectField(param.thisObject, 'mInitialApplication');
        var classLoader = common.callMethod(mInitialApplication, 'getClassLoader');
        var a = common.findClass('ށ.ރ.ؠ.ރ.ރ.ވ', classLoader);
        var b = common.findClass('ށ.ރ.ؠ.ؠ.֏', classLoader);
        common.hookConstructor(a, ['android.os.Parcel'], null, function (param) {
            common.setObjectField(param.thisObject, 'type', java.lang.Integer.valueOf('1'));
        });
        common.hookConstructor(a, ['android.os.Parcel'], null, function (param) {
            common.setObjectField(param.thisObject, 'proindate', java.lang.Long.valueOf('4787107805000'));
        });
        common.hookMethod(b, 'ރ', null, function (param) {
            param.setResult(java.lang.Boolean.valueOf('true'));
        });
        common.hookMethod(a, 'getProindate', null, function (param) {
            param.setResult(java.lang.Long.valueOf('4787107805000'));
        });
        common.hookMethod(a, 'getType', null, function (param) {
            param.setResult(java.lang.Integer.valueOf('1'));
        });
    });
} else if (packageName == 'make.more.r2d2.cellular_pro') {
    //谷歌商店1.5.2版本
    common.hookAllMethods('android.app.ActivityThread', 'performLaunchActivity', null, function (param) {
        var mInitialApplication = common.getObjectField(param.thisObject, 'mInitialApplication');
        var classLoader = common.callMethod(mInitialApplication, 'getClassLoader');
        var a = common.findClass('make.more.r2d2.cellular_pro.vip.VipUtil', classLoader);
        var b = common.findClass('make.more.r2d2.cellular_pro.activity.MonitorActivity', classLoader);
        common.hookMethod(a, 'K', null, function (param) {
            param.setResult(java.lang.Boolean.valueOf('true'));
        });
        common.hookConstructor(b, null, function (param) {
            common.setStaticObjectField(a, 'M', java.lang.Integer.valueOf('4'));
        });
    });
}
