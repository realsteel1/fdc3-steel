/**
 * @jest-environment jsdom
 */

import { Fdc3SteelDesktopAgent } from './fdc3-steel-desktop-agent';
import { MessageRouter } from './model/message-router';
import { PostMessageRouter } from './model/post-message-router';

describe('Fdc3SteelDesktopAgent', () => {
    let agent: Fdc3SteelDesktopAgent;
    const mockWindow = { 
        postMessage: jest.fn(),
        addEventListener: jest.fn()
    } as unknown as Window;

    const mockRouter = {
        publish: jest.fn()
    } as unknown as MessageRouter;

    beforeEach(() => {
        // Set up a new agent instance before each test
        agent = new Fdc3SteelDesktopAgent(mockRouter);
    });

    test('broadcast should call MessageRouter.publish', () => {
        const context = { type: 'fdc3.context', id: { ticker: 'MSFT' } };
        agent.broadcast(context);

        expect(mockRouter.publish).toHaveBeenCalledWith('broadcast', context);
    });
});
