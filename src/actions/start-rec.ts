import streamDeck, { action, type JsonObject, type KeyDownEvent, SingletonAction } from "@elgato/streamdeck";

@action({ UUID: "com.maninthebag.medaltvi.startrec"})
export class LogKeyPressAction extends SingletonAction {
    /**@param ev */
    override onKeyDown(ev: KeyDownEvent<JsonObject>): Promise<void> | void {
        ev.action.setTitle("Hello Person :D");
    }
}