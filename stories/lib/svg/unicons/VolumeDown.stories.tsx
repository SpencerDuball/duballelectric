import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VolumeDown, VolumeDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VolumeDown",
  component: VolumeDown,
} as ComponentMeta<typeof VolumeDown>;

const Template: ComponentStory<typeof VolumeDown> = (
  args: VolumeDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <VolumeDown {...args} />
    <VolumeDown {...args} fill="red.500" />
    <VolumeDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
