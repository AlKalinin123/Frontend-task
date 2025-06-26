import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shallowMount, flushPromises } from '@vue/test-utils';
import UserTable from '../UserTable.vue';

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '1', lng: '2' },
    },
    phone: '1-770-736-8031',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

global.fetch = vi.fn();

describe('UserTable', () => {
  beforeEach(() => {
    (fetch as any).mockClear();
  });

  it('renders loading state', async () => {
    (fetch as any).mockImplementation(() => new Promise(() => {}));
    const wrapper = shallowMount(UserTable);
    expect(wrapper.text()).toContain('Loading...');
  });

  it('renders error state', async () => {
    (fetch as any).mockRejectedValue(new Error('fail'));
    const wrapper = shallowMount(UserTable);
    await flushPromises();
    expect(wrapper.text()).toContain('Error loading users.');
  });

  it('renders user data', async () => {
    (fetch as any).mockResolvedValue({ ok: true, json: async () => mockUsers });
    const wrapper = shallowMount(UserTable);
    await flushPromises();
    expect(wrapper.text()).toContain('Leanne Graham');
    expect(wrapper.text()).toContain('Sincere@april.biz');
  });

  it('deletes a user', async () => {
    (fetch as any).mockResolvedValue({ ok: true, json: async () => mockUsers });
    const wrapper = shallowMount(UserTable);
    await flushPromises();
    // Simulate delete click
    await wrapper.find('[aria-label="Delete user"]').trigger('click');
    expect(wrapper.text()).not.toContain('Leanne Graham');
  });
}); 