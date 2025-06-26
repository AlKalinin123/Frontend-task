import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import UserModal from '../UserModal.vue';
import type { User } from '../../types/user.types';

const user: User = {
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
};

describe('UserModal', () => {
  it('renders user details', () => {
    const wrapper = shallowMount(UserModal, {
      props: { user, onClose: () => {} },
    });
    expect(wrapper.text()).toContain('Leanne Graham');
    expect(wrapper.text()).toContain('Sincere@april.biz');
    expect(wrapper.text()).toContain('View on map');
    expect(wrapper.text()).toContain('Romaguera-Crona');
  });

  it('emits close on close icon click', async () => {
    const onClose = vi.fn();
    const wrapper = shallowMount(UserModal, {
      props: { user, onClose },
    });
    await wrapper.find('[aria-label="Close modal"]').trigger('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('emits close on overlay click', async () => {
    const onClose = vi.fn();
    const wrapper = shallowMount(UserModal, {
      props: { user, onClose },
    });
    await wrapper.find('[tabindex="-1"]').trigger('click.self');
    expect(onClose).toHaveBeenCalled();
  });
}); 