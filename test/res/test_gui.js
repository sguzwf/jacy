//Duktape.__ui_add_path("test")
//Duktape.__ui_add_path("../ide/assets")
//Duktape.__ui_load_zip()
//Duktape.__ui_add_path("../kara/ide/res")

//the duktape with system is completely unusable - we have to put all exports in the global object
var UI=require("gui2d/ui");
var W=require("gui2d/widgets");

UI.Theme_Minimalistic(0xffcc7733)

var demo_text_animation=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	if(!attrs.anim_x){attrs.anim_x=0;attrs.danim_x=1;}
	attrs.text=attrs.text||"Grumpy wizards make toxic brew for the evil Queen and Jack.";//"The quick brown fox jumps over a lazy dog.";
	//attrs.font=attrs.font||"RobotoCondensed-Regular";//"segoeui";
	attrs.font=UI.font_name
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"GUI hello world",w:1024,h:768,bgcolor:0xff000000,designated_screen_size:1440,flags:UI.SDL_WINDOW_MAXIMIZED|UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:"ALT+F4",action:function(){UI.DestroyWindow(wnd)}});
			W.RoundRect("",{x:attrs.anim_x+10,y:10, w:200,h:100,color:0xff0000ff});
			W.RoundRect("",{x:attrs.anim_x+10,y:120,w:200,h:100,color:0xff00ff00});
			W.RoundRect("",{x:attrs.anim_x+10,y:230,w:200,h:100,color:0xffff0000});
			W.RoundRect("",{x:wnd.w/2,y:0,w:wnd.w/2,h:wnd.h,color:0xffffffff});
			W.RoundRect("",{x:wnd.w/2+attrs.anim_x+10,y:10, w:200,h:100,border_width:0,round:16,color:0xffe0e0ff,border_color:0xff00007f});
			W.RoundRect("",{x:wnd.w/2+attrs.anim_x+10,y:120,w:200,h:100,border_width:1,round:16,color:0xffe0ffe0,border_color:0xff007f00});
			W.RoundRect("",{x:wnd.w/2+attrs.anim_x+10,y:230,w:200,h:100,border_width:4.5,round:16,color:[{x:0,y:0,color:0xff7f0000},{x:1,y:1,color:0xffffe0e0}],border_color:0xff7f0000});
			//W.Bitmap("",{x:wnd.w/2+attrs.anim_x+10,y:10,file:"test/res/edico.png"})
			W.Button("ok",{
				x:16,y:wnd.h-110,
				font:UI.Font("ArialUni",48),text:"OK",
				OnClick:function(){UI.DestroyWindow(wnd)}});
			W.Button("cancel",{
				x:wnd.w-316,y:wnd.h-110,
				icon:"test/res/check_64.png",
				font:UI.Font("dsanscn",48,200),text:"漢字",
				OnClick:function(){attrs.text="世の中に、必要な悪があるなんて、子供たちに教えたくありません"}})
			var y0=340;
			var s_text=attrs.text;
			//1.07
			for(var i=12;i<68;i*=1.1){
				//Text("",{x:attrs.anim_x+10,y:y0,font:UI.Font("cambria",i),text:"Hello world!",color:0xff000000})
				W.Text("",{x:attrs.anim_x+10,y:y0,font:UI.Font(attrs.font,i),text:s_text,color:0xffffffff})
				W.Text("",{x:wnd.w/2+attrs.anim_x+10,y:y0,font:UI.Font(attrs.font,i),text:s_text,color:0xff000080})
				y0+=i;
			}
		UI.End();
		attrs.anim_x+=attrs.danim_x;
		if(attrs.anim_x>180){attrs.danim_x=-1}
		if(attrs.anim_x<10){attrs.danim_x=1}
		UI.Refresh()
	UI.End();
};

var paper_text="For simplicity, our compiler uses the AST (Abstract Syntax Tree) directly as our IR. As an example, \\figref{ast:raw}(a) shows a simple code snippet written in our DSL. \\figref{ast:raw}(b) shows the corresponding raw AST generated by the parser, where each inner node is formatted as a C-like function call using its children as arguments, and each leaf node is formatted as a variable, a string, or a number. The \\texttt{symderiv} call in \\figref{ast:raw} is a meta-function that returns a new function that computes the partial derivatives of an input function (its first argument \\texttt{f}) with respect to a specific set of parameters (the remaining argument \\texttt{u}). Prior to computing symbolic derivatives, we flatten all structure types, turning their components into simple scalar variables and update relevant \\texttt{symderiv} calls accordingly, as illustrated in \\figref{ast:raw}(c). Without loss of generality, in the following we will assume that all vector and tensor types have been flattened already and all relevant variables are of scalar types. We also assume that conventional compiler optimizations has already eliminated trivial inefficiencies such as unused variables from the input function.\n\nIn this paper, we propose a novel photon gathering method as a replacement of the density estimation to efficiently achieve unbiased rendering with photon mapping. Specifically, instead of aggregating the gathered photons, we process each photon individually and connect the corresponding light sub-path with the eye sub-path that generates the gather point. By removing the gather point itself from the completed path, we obtain a path sample in the path space of unbiased Monte Carlo methods. The Monte Carlo estimation for such a path sample is calculated by evaluating all its terms in a strict manner. To achieve this evaluation, we introduce an unbiased algorithm to estimate the reciprocal of the sampling probability using a series of Bernoulli trials. The end result is a self-contained unbiased sampling technique with minimal overhead, which can be incorporated into a wide variety of Monte Carlo light transport algorithms. We additionally develop a set of multiple importance sampling (MIS) weights that allows our method to be optimally combined with traditional techniques.\n";
var code_text="var demo_msgbox=function(id,attrs){\n\t//世の中に、必要な悪があるなんて、子供たちに教えたくありません\n	attrs=UI.Keep(id,attrs);\n	UI.Begin(attrs);\n		var wnd=UI.Begin(W.Window('app',{title:'GUI example',w:1024,h:768,bgcolor:0xffffffff,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))\n			W.Hotkey('',{key:['ALT','F4'],action:function(){UI.DestroyWindow(wnd)}});\n			W.Hotkey('',{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});\n			W.Text('',{\n				anchor:UI.context_parent,anchor_align:'left',anchor_valign:'up',\n				w:UI.context_parent.w-32,\n				x:16,y:16,\n				font:UI.Font('cmunrm',32,1),text:paper_text,\n				color:0xff000000,\n				//color:0xff111111,\n				});\n			W.Button('ok',{\n				anchor:UI.context_parent,anchor_align:'left',anchor_valign:'down',\n				x:16,y:16,\n				font:UI.Font('Inconsolata.ttf',48),text:'OK',\n				OnClick:function(){\n					UI.DestroyWindow(wnd);\n				}});\n			W.Button('Cancel',{\n				anchor:UI.context_parent,anchor_align:'right',anchor_valign:'down',\n				x:16,y:16,\n				font:UI.Font('Inconsolata.ttf',48),text:'Cancel',\n				OnClick:function(){\n					UI.DestroyWindow(wnd);\n				}});\n		UI.End();\n	UI.End();\n};\n";
var demo_msgbox=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"GUI example",w:1024,h:768,bgcolor:0xffffffff,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:"ALT+F4",action:function(){UI.DestroyWindow(wnd)}});
			W.Hotkey("",{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});
			W.Text("",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"up",
				w:UI.context_parent.w-32,
				x:16,y:16,
				font:UI.Font("cmunrm",24,100),text:paper_text,
				//font:UI.Font("dsanscn",128,-200),text:'标题很好看',
				color:0xff000000,
				//color:0xff111111,
				});
			W.Button("ok",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"OK",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
			W.Button("Cancel",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"Cancel",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
		UI.End();
	UI.End();
};

var demo_msgboxb=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"GUI example",w:1024,h:768,bgcolor:0xff000000,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:"ALT+F4",action:function(){UI.DestroyWindow(wnd)}});
			W.Hotkey("",{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});
			W.Text("",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"up",
				w:UI.context_parent.w-32,
				x:16,y:16,
				font:UI.Font("cmunrm",32),text:paper_text,
				color:0xffffffff,
				//color:0xffcccccc,
				});
			W.Button("ok",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"OK",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
			W.Button("Cancel",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"Cancel",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
		UI.End();
	UI.End();
};

//var ed;
var demo_textbox=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	//(embolden==undefined?5000/size:embolden)
	var color_mask=(attrs.color_mask||0);
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"Text box example",w:1024,h:768,bgcolor:0xffffffff^color_mask,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			//if(!ed){
			//	ed=Duktape.__ui_new_editor({font:UI.Font("cmunrm",24),color:0xff000000^color_mask});
			//	//ed=ED.New({font:UI.Font("cmunrm",12),color:0xff000000^color_mask});
			//	//ed=ED.New({font:UI.Font("Inconsolata.ttf",16),color:0xff000000^color_mask});
			//	ed.MassEdit([0,0,code_text]);
			//	//print(ed.GetTextSize())
			//	//print(ed.GetText())
			//}
			W.Hotkey("",{key:"ALT+F4",action:function(){UI.DestroyWindow(wnd)}});
			//ed.Render({x:0,y:0,w:1024-16,h:768-16, scr_x:8,scr_y:8,scale:1})
			//UI.SetCaret(wnd,8,8,3,24,0x7f000000,500)
			var textbox=W.Edit("textbox",{
				//font:UI.Font("cmunrm",24),color:0xff000000^color_mask,
				font:UI.Font("cmunrm",32),color:0xff000000^color_mask,
				text:paper_text,wrap_width:800,
				//text:code_text,
				x:8,y:8,w:1024-16,h:768-16
			})
			W.Button("invert",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("arial",48),text:"Invert",
				OnClick:function(){
					attrs.color_mask=color_mask^0xffffff;
					textbox.ed=null;//todo
					UI.Refresh()
				}});
			W.Button("smooth",{
				anchor:UI.context_parent.invert,anchor_placement:"left",anchor_align:"left",anchor_valign:"up",anchor_spacing:16,
				x:16,y:0,
				font:UI.Font("arial",48),text:attrs.sharpen?"Smooth":"Sharpen",
				OnClick:function(){
					attrs.sharpen=!attrs.sharpen;
					UI.SetFontSharpening(attrs.sharpen?1.5:0.0);
					UI.Refresh()
				}});
		UI.End();
	UI.End();
};

var demo_menu=function(id,attrs){
	var obj=UI.Keep(id,attrs);
	UI.Begin(obj);
		var wnd=UI.Begin(W.Window("app",{title:"GUI example",w:1024,h:768,bgcolor:0xffffffff,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:"ALT+F4",action:function(){UI.DestroyWindow(wnd)}});
			W.Hotkey("",{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});
			W.Button("menubtn",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"top",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"Menu",
				OnClick:function(){
					if(UI.HasFocus(UI.top.app.menu)){
						UI.top.app.menu.Close()
					}else{
						UI.top.app.menu.Popup();
					}
				}});
			W.Menu("menu",{
				anchor:UI.context_parent.menubtn,anchor_placement:"down",anchor_align:"left",anchor_valign:"top",
				x:0,y:0,
				items:[
					{text:"Open"},
					{text:"Save"},
					{text:"Exit"},
				],
			})
			W.ComboBox("combobox",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"top",
				x:16,y:16,w:300,h:32,
				items:[
					{text:"Item 0"},
					{text:"Item 1"},
					{text:"Item 2"},
				],
			});
		UI.End();
	UI.End();
};

var g_theme_id=0
var demo_widgets=function(id,attrs){
	UI.Theme_Minimalistic([[0xffcc5533,0xff33aa33,0xff3333aa][g_theme_id]])
	var obj=UI.Keep(id,attrs);
	UI.Begin(obj);
		W.Hotkey("",{key:"ALT+F4",action:function(){UI.DestroyWindow(wnd)}});
		var wnd=UI.Begin(W.Window("app",{title:"Widgets demo",w:1280,h:720,bgcolor:0xfff0f0f0,designated_screen_size:1080,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.ComboBox("combobox",{
				x:310,y:10,w:300,h:32,
				items:[
					{text:"Item 0"},
					{text:"Item 1"},
					{text:"Item 2"},
				],
			});
			W.Slider("slider",{x:10,y:10,w:256,h:8})
			W.EditBox("editbox",{x:10,y:36,w:256,h:32})
			W.Select("select0",{x:10,y:100,w:256,h:32,items:[0,1]})
			W.Select("select1",{
				x:10,y:140,w:256,h:32,
				value:g_theme_id,OnChange:function(value){g_theme_id=value},
				items:["Blue","Green","Red"]})
			W.Select("select2",{x:10,y:180,w:256,h:32,items:["Choice A","選択乙","long long long shit"]})
		UI.End();
	UI.End();
};

//UI.Application=demo_textbox;
//UI.Application=demo_msgbox;
UI.Application=demo_text_animation;
//UI.Application=demo_widgets;

//UI.setTimeout(function(){print("setTimeout");},1500)
//UI.setInterval(function(){print("setInterval");},1000)
UI.Run()
