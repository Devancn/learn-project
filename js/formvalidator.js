/**
 * Created by Administrator on 2015/12/11.
 */
$(function () {
    function formvalidator (index){
        $.formValidator.initConfig({
            validatorGroup:index
        });
        $("#named_"+index).formValidator({
            validatorGroup:index,
            onshow:null,
            onfocus:null,
            oncorrect:"恭喜您输入正确！"
        }).InputValidator({
            min:2,
            max:11,
            onerror:"输入错误，称呼至少两位!"
        });
        $("#telphone_"+index).formValidator({
            validatorGroup:index,
            onshow:null,
            onfocus:null,
            oncorrect:"恭喜您输入正确!"
        }).RegexValidator({
            regexp:"mobile",
            datatype:"enum"
        });
        $("#apply_now_"+index).click(function () {
            if($.formValidator.PageIsValid(index)){
                $("body").css("overflow-y","hidden");
                $("#transparent_window").css("display","block");
                $("#window_open_1").css("display","block");
                return true;
            }else{
                alert("输入错误,请重新输入!");
                return false;
            }
            return false;
        });
    }
    formvalidator(1);
    formvalidator(2);
    formvalidator(3);
    formvalidator(4);
    formvalidator(5);
});