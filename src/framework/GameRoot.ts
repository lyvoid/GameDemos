class GameRoot {
    private static _instance: GameRoot;
    private _gameStage: egret.Stage;
    private _initialed: boolean = false;
    
	private constructor(){
    }
    
    public static get GameStage(): egret.Stage{
        return GameRoot.Ins._gameStage;
    }

	public static get Ins():GameRoot{
		if(GameRoot._instance){
			return GameRoot._instance;
		}
		GameRoot._instance = new GameRoot();
		return GameRoot._instance;
    }

    public init(stage: egret.Stage):void{
        UserData.initialData();
        this._gameStage = stage;
        MessageManager.Ins.initial(stage);
        LayerManager.Ins.initial();
        SceneManager.Ins.initial();
        TimeScaleManager.Ins.initial();
        this._initialed = true;
        this._gameStage.addEventListener(
            egret.Event.ENTER_FRAME, 
            this.update, 
            this
        );
    }
    
    private update(): void{
        // 如果还没初始化，就不update
        if(!this._initialed) return;
        
        // 使用Timescale控制之后的update速度
        if(!TimeScaleManager.Ins.update()) return;

        // 以下的update是需要收到timescale控制的，不受其控制的放在上面
        SceneManager.Ins.update();
    }
}
