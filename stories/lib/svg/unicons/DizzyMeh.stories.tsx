import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DizzyMeh, DizzyMehPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DizzyMeh",
  component: DizzyMeh,
} as ComponentMeta<typeof DizzyMeh>;

const Template: ComponentStory<typeof DizzyMeh> = (args: DizzyMehPropsI) => (
  <x.div display="flex" gap="20px">
    <DizzyMeh {...args} />
    <DizzyMeh {...args} fill="red.500" />
    <DizzyMeh {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
