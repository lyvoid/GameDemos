class MainUI extends eui.Component {

    private l1StartButton: eui.Button;
    private l2StartButton: eui.Button;

    constructor() {
        super();
        this.width = GameRoot.GameStage.stageWidth;
        this.height = GameRoot.GameStage.stageHeight;
        this.addEventListener(eui.UIEvent.COMPLETE, this.mainUIEventInit, this);
    }

    private mainUIEventInit() {
        this.l1StartButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tol1, this);
        this.l2StartButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tol2, this);
    }

    private tol1(){
        SceneManager.Ins.setScene(new L1MainScene());
    }

    private tol2(){
        ToastInfoManager.newRedToast("敬请期待");
    }

}