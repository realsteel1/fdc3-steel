import { AppIdentifier, AppIntent, AppMetadata, Channel, Context, DesktopAgent, ImplementationMetadata, Intent, IntentHandler, Listener, PrivateChannel } from "@finos/fdc3";

export class Fdc3SteelDesktopAgent implements DesktopAgent {
    open(name: unknown, context?: unknown): Promise<import("@finos/fdc3").AppIdentifier> {
        throw new Error("Method not implemented.");
    }
    findIntent(intent: Intent, context?: Context, resultType?: string): Promise<AppIntent> {
        throw new Error("Method not implemented.");
    }
    findIntentsByContext(context: Context, resultType?: string): Promise<Array<AppIntent>> {
        throw new Error("Method not implemented.");
    }
    findInstances(app: AppIdentifier): Promise<Array<AppIdentifier>> {
        throw new Error("Method not implemented.");
    }
    broadcast(context: Context): Promise<void> {
        throw new Error("Method not implemented.");
    }
    raiseIntent(intent: unknown, context: unknown, name?: unknown): Promise<import("@finos/fdc3").IntentResolution> {
        throw new Error("Method not implemented.");
    }
    raiseIntentForContext(context: unknown, name?: unknown): Promise<import("@finos/fdc3").IntentResolution> {
        throw new Error("Method not implemented.");
    }
    addIntentListener(intent: Intent, handler: IntentHandler): Promise<Listener> {
        throw new Error("Method not implemented.");
    }
    addContextListener(contextType: unknown, handler?: unknown): Promise<import("@finos/fdc3").Listener> {
        throw new Error("Method not implemented.");
    }
    getUserChannels(): Promise<Array<Channel>> {
        throw new Error("Method not implemented.");
    }
    joinUserChannel(channelId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getOrCreateChannel(channelId: string): Promise<Channel> {
        throw new Error("Method not implemented.");
    }
    createPrivateChannel(): Promise<PrivateChannel> {
        throw new Error("Method not implemented.");
    }
    getCurrentChannel(): Promise<Channel | null> {
        throw new Error("Method not implemented.");
    }
    leaveCurrentChannel(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getInfo(): Promise<ImplementationMetadata> {
        throw new Error("Method not implemented.");
    }
    getAppMetadata(app: AppIdentifier): Promise<AppMetadata> {
        throw new Error("Method not implemented.");
    }
    getSystemChannels(): Promise<Array<Channel>> {
        throw new Error("Method not implemented.");
    }
    joinChannel(channelId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}