(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_background("#fffbe6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer_login","612","145","58","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/ico_map_03.png\')");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Id","509","ImageViewer_login:25","265","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_Login");
            obj.set_displaynulltext("아이디");
            obj.set_text("아이디");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Password","509","edt_Id:10","265","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edt_Login");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","509","edt_Password:25","265","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("btn_Login");
            this.addChild(obj.name, obj);

            obj = new Static("stt_signUp","514","btn_login:20","106","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("회원이 아니신가요?");
            obj.set_cssclass("stt_SignUp");
            this.addChild(obj.name, obj);

            obj = new Button("btn_signUp","719","btn_login:20","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_SignUp");
            this.addChild(obj.name, obj);

            obj = new Static("stt_line01","509","443","105","1",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("stt_Line");
            this.addChild(obj.name, obj);

            obj = new Static("stt_line02","669","443","105","1",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("stt_Line");
            this.addChild(obj.name, obj);

            obj = new Static("stt_or","635","433","12","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("or");
            obj.set_cssclass("stt_Or");
            this.addChild(obj.name, obj);

            obj = new Button("btn_kakao","509","stt_line01:25","265","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("카카오 계정으로 로그인");
            obj.set_cssclass("btn_Kakao");
            this.addChild(obj.name, obj);

            obj = new Button("btn_google","509","532","265","38",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Google 계정으로 로그인");
            obj.set_cssclass("btn_Google");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("login_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
