import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { UnlockAlt, UnlockAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/UnlockAlt",
  component: UnlockAlt,
} as ComponentMeta<typeof UnlockAlt>;

const Template: ComponentStory<typeof UnlockAlt> = (args: UnlockAltPropsI) => (
  <x.div display="flex" gap="20px">
    <UnlockAlt {...args} />
    <UnlockAlt {...args} fill="red.500" />
    <UnlockAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
