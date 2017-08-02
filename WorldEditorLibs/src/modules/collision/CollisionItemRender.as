package modules.collision
{
	import flash.display.NativeMenu;
	import flash.display.NativeMenuItem;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	import mx.controls.treeClasses.TreeItemRenderer;
	
	public class CollisionItemRender extends TreeItemRenderer
	{
		public function CollisionItemRender()
		{
			super();
			addEvents();
		}
		private var _menuFile:NativeMenu = new NativeMenu;
		private function addEvents():void
		{
			var item:NativeMenuItem = new NativeMenuItem("删除");
			_menuFile.addItem(item);
			item.addEventListener(Event.SELECT,onSel);
			this.addEventListener(MouseEvent.RIGHT_CLICK,onRightClick);
			
		}
		
		protected function onRightClick(event:MouseEvent):void
		{
			_menuFile.display(this.stage,stage.mouseX,stage.mouseY);
			
		}
		
		protected function onSel(event:Event):void
		{
	
			 this.parent.parent.dispatchEvent(new Event(Event.CLEAR));
			
		}
	}
}