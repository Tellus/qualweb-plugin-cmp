import 'mocha';
import { expect } from 'chai';

import { createPlugin } from '@src/index';

describe('Instantiating plugin', async () => {
  it('Should instantiate a basic plugin', async () => {
    const plugin = await createPlugin([], true);

    expect(plugin).to.not.be.null;
    expect(plugin).to.have.property('afterPageLoad');
  })
});